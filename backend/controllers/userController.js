import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// route of the login
const loginUser = async (req, res) => {
  try {
// frontend se email password lena 
    const { email, password} = req.body;

    // check your database this email is exist or not 

    const user = await userModel.findOne({email});
//if user is not exists then send error 
    if (!user) {
      return res.json({success:false, message:"User doesn't exists"})
    }
// if user is exists then password verify kro 
//bcrypt.compare () plain password ko db ke handle se compare kare 
    const isMatch = await bcrypt.compare(password, user.password);
// agar password shi hai /match ho gya
    if(isMatch) {
      // JWT token generate kar rahe hain jisme user ki ID store hogi
      const token = createToken(user._id)
      
      res.json({success:true,token})
    }
    else {
      res.json({ success: false, message: 'Invalid creadentials'})
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message})

  }

};

// route for the register controller
const registerUser = async (req, res) => {

   // console.log("req.body => ", req.body);
  try {
    // client se name , email, password , le rhe hai
    const { name, email, password} = req.body;

    //checking User already exist or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // email format shi hai ya nhi valid karo
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }
    // password ki length check karo min 8 character password is necessary
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }

    // password ko hash (encrypt ) karna hai
    //salt e random string hoti hai jo password hashing ko aur secure banati hai

    const salt = await bcrypt.genSalt(10);
    //user ka password + salt = hashedPassword (safe version)
    const hashedPassword = await bcrypt.hash(password, salt);

    // naya user object banate hai jisme hashed password save hoga
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    // user ko databse me save kar dete hai
    const user = await newUser.save();

    //jwt token banate hai jisse user future me login session ke liye use karega
    const token = createToken(user._id);

    // frontend ko response bhej dete hai
    res.json({ success: true, token });
  } catch (error) {
    // agar khi bhi error aaya to yaha handle hoga
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// route for the admin
const adminLogin = async (req, res) => {
  try {
    const {email,password} = req.body

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email+password,process.env.JWT_SECRET);
      res.json({ success:true, token})
    } else {
      res.json({success:false, message: "Invalid credentials"})
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message})

  }
};

export { loginUser, registerUser, adminLogin };
