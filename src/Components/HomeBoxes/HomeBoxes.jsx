import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import EmGroup from "../../Images/EmGroup 3500.png";
import EmGroup3657 from "../../Images/EmGroup 3657.png";
import EmGroup3658 from "../../Images/EmGroup 3658.png";
import EmGroup3654 from "../../Images/EmGroup 3654.png";
import EmGroup3656 from "../../Images/EmGroup 3656.png";
import EmGroup3655 from "../../Images/EmGroup 3655.png";
import EmGroupman from "../../Images/EmGroup.png";
import EmGroupsingalman from "../../Images/EmGroupsingalman.png";
import EmIllustration from "../../Images/EmIllustration.png";
import EmLayer from "../../Images/EmLayer_1.png";
import EmBgImage from "../../Images/EmBgImage.png";
import Emfunny from "../../Images/Emfunny-3d-illustration-cartoon-teenage-girl 1.png";
import { GiCheckMark } from "react-icons/gi";
import group01 from "../../Images/Mask group01.png";
import group02 from "../../Images/Mask group02.png";
import group03 from "../../Images/Mask group03.png";
import group04 from "../../Images/Mask group04.png";
import Emailmarketing from "../../Images/Emailmarketing.png";
import CountUp from "react-countup";
import "./HomeBoxes.css";

function HomeBoxes() {
  return (
    <>
      <div className="w-full flex justify-center">
        <img
          src={Emailmarketing}
          alt="Email Marketing"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-[-5%] px-4">
        <div className="relative max-w-6xl pt-10 mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {/* Box 1 */}
          <div className="bg-[#651D13] text-white p-6 rounded-md flex items-center space-x-4 shadow-lg w-full">
            <img
              src={group01}
              alt="group01"
              className="object-contain w-12 h-12"
            />
            <div>
              <h2 className="text-2xl font-bold">
                <CountUp delay={0} end={98} duration={7} suffix="%" />
              </h2>

              <p className="text-sm">Clients satisfied</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-[#76769E] text-white p-6 rounded-md flex items-center space-x-4 shadow-lg w-full">
            <img
              src={group02}
              alt="group02"
              className="object-contain w-12 h-12"
            />
            <div>
              <h2 className="text-2xl font-bold">
                <CountUp delay={0} end={395} duration={7} suffix="+" />
              </h2>
              <p className="text-sm">Successful projects</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-[#E8505B] text-white p-6 rounded-md flex items-center space-x-4 shadow-lg w-full">
            <img
              src={group03}
              alt="group03"
              className="object-contain w-12 h-12"
            />
            <div>
              <h2 className="text-2xl font-bold">
                <CountUp delay={0} end={8} duration={9} suffix="M+" />
              </h2>
              <p className="text-sm">Lines of code</p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-[#2F9AFF] text-white p-6 rounded-md flex items-center space-x-4 shadow-lg w-full">
            <img
              src={group04}
              alt="group04"
              className="object-contain w-12 h-12"
            />
            <div>
              <h2 className="text-2xl font-bold">
                <CountUp delay={0} end={8} duration={5} suffix="+" />
              </h2>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full py-10 px-6">
        {/* Section Title */}

        {/* Content Section */}
        <div className="flex flex-col md:flex-col items-center justify-center gap-2 lg:px-20">
          {/* Image Section */}
          <h1 className="text-3xl font-bold">
            Email Marketing That Connects, Engages, and Grows
          </h1>
          <p className="text-[#5E5E5E] text-sm justify-center text-center">
            In today's digital world, email marketing remains one of the most
            effective ways to connect with your audience directly. With expert
            email marketing services, businesses can create authentic strategies
            that deliver real results.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between px-10">
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 pt-5">
          <img src={EmGroup} alt="man" className="max-w-full h-auto" />
        </div>
        <div className="md:w-1/2 pl-5 pt-5">
          <h1 className=" text-2xl font-semibold py-5 mt-[-50px]">
            Why Email Marketing is Important
          </h1>
          <p className="text-[#5E5E5E] text-sm">
            Email marketing is a powerful tool for businesses of all sizes. It
            helps
          </p>
          <div className="flex items-start space-x-2 mt-4">
            <FiCheckCircle className=" text-xl flex-shrink-0 text-[#1290F3]" />
            <p className="font-semibold">
              Build personalized relationships with customers
            </p>
          </div>
          <div className="flex items-start space-x-2 mt-4 py-2">
            <FiCheckCircle className=" text-xl flex-shrink-0 text-[#1290F3]" />
            <p className="font-semibold">
              Increase conversion rates through targeted messaging
            </p>
          </div>
          <div className="flex items-start space-x-2 mt-4 py-1">
            <FiCheckCircle className="text-xl flex-shrink-0 text-[#1290F3]" />
            <p className="font-semibold">Share exclusive offers and updates</p>
          </div>
          <div className="flex items-start space-x-2 mt-4 py-2">
            <FiCheckCircle className="text-xl flex-shrink-0 text-[#1290F3]" />
            <p className="font-semibold ">
              Drive customer loyalty with engaging content
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4 pt-5">
        <div className="h-px bg-[#3B7FBF] w-[80px] md:w-[100px]"></div>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center p-5">
          What We Offer
        </h1>
        <div className="h-px bg-[#3B7FBF] w-[80px] md:w-[100px]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center w-full max-w-5xl mx-auto px-4 gap-6">
      {/* Box 1 */}
        <div className="relative w-full max-w-md mx-auto">
          <img
            src={EmGroup3657}
            alt="EmGroup3657"
            className="w-full h-[300px] max-w-[500px] mx-auto rounded-lg "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-xl font-bold text-[#022E51] pt-7">
              Personalized Campaigns
            </h1>
            <ul className="text-sm space-y-2 text-left list-disc list-inside text-[#5E5E5E] mt-3">
              <li>Tailored emails that resonate with your audience</li>
              <li>Dynamic content based on customer preferences</li>
              <li>Drip campaigns for lead nurturing</li>
            </ul>
          </div>
        </div>

        {/* Box 2 */}
        <div className="relative w-full max-w-md mx-auto">
          <img
            src={EmGroup3658}
            alt="EmGroup3658"
            className="w-full h-[300px] max-w-[500px] mx-auto rounded-lg "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-xl font-bold text-[#1290F3] pt-7">
              Automated Workflows
            </h1>
            <ul className="text-sm space-y-2 text-left list-disc list-inside text-[#5E5E5E] mt-3">
              <li>Abandoned cart recovery emails</li>
              <li>Welcome series for new subscribers</li>
              <li>Re-engagement campaigns for inactive contacts</li>
            </ul>
          </div>
        </div>

        {/* Box 3 */}
        <div className="relative w-full max-w-md mx-auto">
          <img
            src={EmGroup3654}
            alt="EmGroup3657"
            className="w-full h-[300px] max-w-[500px] mx-auto rounded-lg "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-xl font-bold text-[#022E51] pt-7">
              Engaging Newsletters
            </h1>
            <ul className="text-sm space-y-2 text-left list-disc list-inside text-[#5E5E5E] mt-3">
              <li>Regular updates to keep your audience informed</li>
              <li>Value-driven content that fosters brand loyalty</li>
              <li>Design templates that reflect your brand’s identity</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full max-w-3xl mx-auto px-4 gap-6 sm:gap-8">
      <div className="relative w-full max-w-md mx-auto">
          <img
            src={EmGroup3656}
            alt="EmGroup3656"
            className="w-full h-[300px] max-w-[500px] mx-auto rounded-lg "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-xl font-bold text-[#1290F3] pt-7">
              A/B Testing
            </h1>
            <ul className="text-sm space-y-2 text-left list-disc list-inside text-[#5E5E5E] mt-3">
              <li>Subject line testing to improve open rates</li>
              <li>Content and layout variations to boost engagement</li>
              <li>Data-driven optimization for better performance</li>
            </ul>
          </div>
        </div>

        <div className="relative w-full max-w-md mx-auto">
          <img
            src={EmGroup3655}
            alt="EmGroup3655"
            className="w-full h-[300px] max-w-[500px] mx-auto rounded-lg "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-xl font-bold text-[#1290F3] pt-7">
              Analytics That Matter
            </h1>
            <ul className="text-sm space-y-2 text-left list-disc list-inside text-[#5E5E5E] mt-3">
              <li>Track open rates, click-throughs, and conversions</li>
              <li>Detailed reports to measure campaign effectiveness</li>
              <li>Insights to refine future strategies</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold pt-10 text-[#3B7FBF] text-center leading-snug max-w-4xl mx-auto">
    Email Marketing Case Study Boosting Customer Retention Through Targeted Campaigns
  </h1>
</div>

{/* Container */}
<div className="flex flex-wrap justify-center pt-10">

  {/* Client Card */}
  <div className="border-t border-l border-black w-[90%] sm:w-[300px] md:w-[250px] mr-[-2px] rounded-t-[15%]">
    <img src={EmGroupman} alt="EmGroup" className="p-10 mx-auto" />
    <div className="w-5 h-5 bg-[#BC7408] ml-[40px]  rounded-full"></div>
    
    <h1 className="text-lg text-[#3B7FBF] font-semibold m-3">Client</h1>
    <p className="text-xs m-3">
      An e-commerce business facing challenges with customer retention and low repeat purchase rates.
    </p>
    <div className="w-5 h-5 bg-black ml-[-10px] mt-[70%] rounded-full"></div>
  </div>

  {/* Challenge Card */}
  <div className="border-b border-l border-r border-black w-[90%] sm:w-[300px] md:w-[250px] clip-custom rounded-b-[15%] mt-[50px]">

    <h1 className="text-lg text-[#3B7FBF] font-semibold m-3 mt-20">Challenge</h1>
  <div className="w-5 h-5 bg-[#F80563] ml-[20px] mt-[-15px]  rounded-full"></div>
    <p className="text-xs m-3">
      Difficulty in maintaining engagement with past customers and increasing repeat purchases.
    </p>
    <img src={EmGroupsingalman} alt="EmGroup" className="p-10 mx-auto" />
  </div>

  {/* Our Approach Card */}
  <div className="border-t border-black w-[90%] sm:w-[300px] md:w-[250px] rounded-t-[15%] ml-[-2px]">
    <img src={EmIllustration} alt="EmGroup" className="p-10 mx-auto" />
    <div className="w-5 h-5 bg-[#4FB2F0] ml-[20px] mt-[-10px] rounded-full"></div>

    <h1 className="text-lg text-[#3B7FBF] font-semibold m-3 mt-[-20px]">Our Approach</h1>
    
    <p className="text-xs m-3 flex">
      <GiCheckMark className="text-[#3B7FBF] h-9 w-9 p-1 mt-[-7px]" />
      Developed segmented email lists to target different customer groups based on their purchase behavior.
    </p>

    <p className="text-xs m-3 flex">
      <GiCheckMark className="text-[#3B7FBF]  h-9 w-9 p-1 mt-[-7px]" />
      Created personalized email campaigns with product recommendations, exclusive discounts, and re-engagement content.
    </p>

    <p className="text-xs m-3 flex">
      <GiCheckMark className="text-[#3B7FBF]  h-9 w-9 p-1 mt-[-7px]" />
      Implemented automated workflows for abandoned carts and post-purchase follow-ups.
    </p>
  </div>

  {/* Results Card */}
  <div className="border-b border-l border-r border-black w-[90%] sm:w-[300px] md:w-[250px] rounded-b-[15%] mt-[50px] p-5 ml-[-2px]">
  <div className="w-5 h-5 bg-[#A5C10D] ml-[20px] mt-[-10px] rounded-full"></div>

    <h1 className="text-lg text-[#3B7FBF] font-semibold mb-3">Results</h1>
    <ul className="list-disc list-inside text-xs space-y-2">
      <li>200% increase in email open rates within 2 months</li>
      <li>180% boost in click-through rates from personalized emails</li>
      <li>35% rise in repeat purchases driven by targeted email campaigns</li>
    </ul>
    <img src={EmLayer} alt="EmGroup" className="p-6 mx-auto" />
  </div>

  <div className="w-5 h-5 bg-black ml-[-10px] mb-[-30px] mt-8 rounded-full"></div>
</div>




      <div className="relative w-full h-auto pt-10 hidden sm:block">
        {/* Background Image */}
        <img
          src={EmBgImage}
          alt="EmBgImage"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center text-white p-4 sm:p-6 text-center">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-5xl">
            {/* Left Content */}
            <div className="flex-1 text-left p-2 sm:p-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                Why Choose Us?
              </h1>
              <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base">
                Because we understand that email marketing isn't just about
                sending messages—it's about telling your story, creating
                meaningful connections, and driving real results. Whether you're
                a small business or an established brand, our strategies help
                you turn subscribers into loyal customers. Our approach is
                simple yet effective: we listen to your needs, create tailored
                strategies, and deliver measurable results. With a dedicated
                team by your side, your brand's message will be heard loud and
                clear.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0 p-2 sm:p-4">
              <img
                src={Emfunny}
                alt="Emfunny"
                className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto mt-4 md:mt-[10%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBoxes;
