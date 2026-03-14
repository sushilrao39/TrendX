import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            TrendX was born out of passion for innovation and a desire to
            revolution An effective mission statement is clear, concise, and focused on what is most important to the organization. It typically answers three key questions
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at TrendX is to empower customers with choice ,
            conventionmission is the core purpose of a business, organization, or individual. It guides your actions, provides a sense of direction, and communicates what you do, who you serve, and what you aim to achieve
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product An effective mission statement is clear, concise, and focused on what is most important to the organization. It typically answers three key questions
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Service</b>
          <p className="text-gray-600">
            We meticulously select and vet each product An effective mission statement is clear, concise, and focused on what is most important to the organization. It typically answers three key questions
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convience</b>
          <p className="text-gray-600">
            We meticulously select and vet each product Convience Convenience refers to ease, comfort, and usefulness, while conveyance refers to the act of transferring property, transportation of people or goods, or a legal document that effects a property transfer. 
          </p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  );
};

export default About;
