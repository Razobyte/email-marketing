import React from "react";
import group3294 from "../../Images/Group 3294.png";
import group3243 from "../../Images/Group 3243.png";
import one from "../../Images/01.png";
import two from "../../Images/02.png";
import three from "../../Images/03.png";
import four from "../../Images/04.png";
import five from "../../Images/05.png";
import six from "../../Images/06.png";
import { FiCheckCircle } from "react-icons/fi";
import shotman from "../../Images/Group 3310 (5).png";
import Group3310 from "../../Images/Group 3310.png";
import Group3311 from "../../Images/Group 3310 (1).png";
import Group3312 from "../../Images/Group 3310 (2).png";
import Group3313 from "../../Images/Group 3310 (3).png";
import Group3314 from "../../Images/Group 3310 (4).png";
import Vector1 from "../../Images/Vector 27.png";
import Vector2 from "../../Images/Vector 28.png";
import Vector3 from "../../Images/Vector 29.png";
import Vector4 from "../../Images/Vector 30.png";

function HomeBoxes() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 px-4 space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-px bg-[#3B7FBF] w-[80px] md:w-[100px]"></div>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-center">
            Razobyte’s Website Maintenance & Support Services
          </h1>
          <div className="h-px bg-[#3B7FBF] w-[80px] md:w-[100px]"></div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-8 px-4 space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-auto">
          <img
            src={group3294}
            alt="group3294"
            className="object-contain w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] mx-auto"
          />
        </div>
        <div className="w-full max-w-lg text-center md:text-left">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            In today’s fast-paced digital landscape, ensuring your website is
            secure, up-to-date, and fully optimized is crucial for business
            growth. Razobyte’s Website Maintenance & Support services help you
            focus on your core operations while we take care of everything
            behind the scenes—protecting your site from cyber threats, improving
            its performance, and delivering an exceptional user experience.
          </p>
          <div className="pt-7 w-full">
            <img
              src={group3243}
              alt="group3243"
              className="object-contain w-full max-w-[300px] mx-auto md:max-w-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10 px-10 h-auto ">
        <div className="flex flex-col items-center text-center shadow-2xl w-[100%] max-w-[255px] h-[380px] rounded-t-xl overflow-hidden bg-white">
          <div className="h-[44px] w-full bg-[#BA68C8] pt-[20%]"></div>
          <a href="#">
            <h1 className="pt-6 text-[18px] font-bold text-[#BA68C8] underline">
              Robust Security
            </h1>
          </a>
          <p className="text-[14px] leading-relaxed p-3">
            A secure website not only safeguards customer data but also
            strengthens brand reputation. With proactive security audits,
            routine malware scans, and timely software updates, Razobyte ensures
            your site remains protected against emerging threats.
          </p>
        </div>
        <div className="flex flex-col items-center text-center shadow-2xl mt-[50%] w-[100%] max-w-[255px] h-auto rounded-b-xl overflow-hidden bg-white">
          <div className="p-3">
            <a href="#">
              <h1 className=" text-[17px] font-bold text-[#E8505B] underline">
                Top-Notch Performance
              </h1>
            </a>
            <p className=" text-[14px] leading-relaxed pt-2 ">
              In an era where speed matters, a lagging website can result in
              lost traffic and reduced conversions. Our continuous monitoring
              and optimization techniques keep your load times swift— boosting
              both user satisfaction and SEO rankings.
            </p>
          </div>
          <div className="h-[44px] w-full bg-[#E8505B] shadow-2xl mt-[20%] "></div>
        </div>
        {/* Box 2 */}
        <div className="flex flex-col items-center text-center shadow-2xl w-[100%] max-w-[255px] h-[380px]  rounded-t-xl overflow-hidden bg-white">
          <div className="h-[44px] w-full bg-[#651D13]"></div>
          <a href="#">
            <h1 className="pt-6 text-[18px] font-bold text-[#651D13] underline">
              Seamless User Experience
            </h1>
          </a>
          <p className="text-[14px] leading-relaxed p-3">
            Broken links, outdated plugins, and cumbersome navigation can deter
            potential customers. Razobyte addresses these pain points promptly,
            ensuring visitors can explore your site with ease and confidence.
          </p>
        </div>
        <div className="flex flex-col items-center text-center shadow-2xl mt-[50%] w-[100%] max-w-[255px] h-auto rounded-b-xl overflow-hidden bg-white">
          <div className="p-3">
            <a href="#">
              <h1 className=" text-[17px] font-bold text-[#2F9AFF] underline">
                Improved SEO Results{" "}
              </h1>
            </a>
            <p className=" text-[14px] leading-relaxed pt-2  ">
              Fresh, relevant content and properly optimized site architecture
              are key to achieving higher visibility on search engines. By
              keeping your website updated and search-engine-friendly, we help
              you climb the SERPs and attract more qualified traffic.
            </p>
          </div>
          <div className="h-[44px] w-full bg-[#2F9AFF] shadow-2xl mt-[21%] "></div>
        </div>

        <div className="flex flex-col items-center text-center shadow-2xl w-[100%] max-w-[255px] h-[380px] rounded-t-xl overflow-hidden bg-white ">
          <div className="h-[44px] w-full bg-[#76769E] pt-[20%]"></div>
          <a href="#">
            {" "}
            <h1 className=" text-[18px] font-bold text-[#76769E] underline pt-4">
              Regular Updates & Enhancements
            </h1>
          </a>
          <p className="text-[14px] leading-relaxed p-3">
            Whether you’re running a corporate blog, an e-commerce platform, or
            a custom web application, frequent updates are necessary to keep
            features running smoothly. Razobyte’s proactive approach to plugin,
            theme, and CMS updates ensures optimal functionality.
          </p>
        </div>
      </div>

      <div className="w-full h-full bg-black">
        <div className="flex flex-col items-center justify-center mt-10 px-4 space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-white w-[80px] md:w-[100px]"></div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center p-10">
              Our Comprehensive Maintenance & Support Services
            </h1>
            <div className="h-px bg-white w-[80px] md:w-[100px]"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-10">
          <div className="md:w-1/2 pl-5">
            <img src={one} alt="one" className="mb-[-5%]" />
            <h1 className="text-white text-[25px] font-semibold">
              Security & Vulnerability Management
            </h1>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Security Audits & Patches:
                </span>{" "}
                Routine checks for potential vulnerabilities, along with timely
                patch installations.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Malware Detection & Removal:
                </span>{" "}
                Swift action to identify & remove malicious scripts, viruses, or
                backdoors.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Firewall & Spam Protection:
                </span>{" "}
                Advanced security measures to block intrusions and reduce spam,
                safeguarding your reputation and data.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 pt-5">
            <img src={shotman} alt="man" className="max-w-full h-auto" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between px-10">
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 pt-5">
            <img src={Group3310} alt="man" className="max-w-full h-auto" />
          </div>
          <div className="md:w-1/2 pl-5">
            <img src={two} alt="one" className="mb-[-5%]" />
            <h1 className="text-white text-[25px] font-semibold">
              Performance Optimization
            </h1>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Speed Analysis & Tuning
                </span>{" "}
                In-depth audits to pinpoint factors slowing down your site,
                followed by targeted improvements.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Malware Detection & Removal
                </span>{" "}
                Implementing caching layers and Content Delivery Networks to
                shorten load times globally.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Database Maintenance
                </span>{" "}
                Regular database cleanups to prevent slow queries and ensure
                smooth operations.
              </p>
            </div>
          </div>

        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-10">
          <div className="md:w-1/2 pl-5">
            <img src={three} alt="one" className="mb-[-5%]" />
            <h1 className="text-white text-[25px] font-semibold">
              Content & Design Refresh
            </h1>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Content Updates
                </span>{" "}
                Keeping your website engaging with fresh, relevant blog posts,
                product listings, and announcements.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Design & UX Tweaks
                </span>{" "}
                Refining your site’s interface for responsiveness, visual
                appeal, and easy navigation across all devices.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Localization & Multilingual Support
                </span>{" "}
                Managing content in various languages to broaden your global
                reach.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 pt-5">
            <img src={Group3311} alt="man" className="max-w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-10">
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 pt-5">
            <img src={Group3312} alt="man" className="max-w-full h-auto" />
          </div>
          <div className="md:w-1/2 pl-5">
            <img src={four} alt="one" className="mb-[-5%]" />
            <h1 className="text-white text-[25px] font-semibold">
              Backups & Disaster Recovery
            </h1>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Scheduled Backups
                </span>{" "}
                Automated daily, weekly, or monthly backups stored securely,
                ready for quick restoration.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Emergency Recovery{" "}
                </span>{" "}
                Rapid response strategies to restore your site in case of
                unexpected crashes or breaches.5. 24/7 Technical Support
              </p>
            </div>
            
          </div>

        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-10">
          {/* Left Section: Text Content */}
          <div className="md:w-1/2 pl-5">
            <img src={five} alt="one" className="mb-[-5%]" />
            <h1 className="text-white text-[25px] font-semibold">
              24/7 Technical Support
            </h1>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Real-time Monitoring
                </span>{" "}
                Continuous oversight to identify issues before they escalate,
                reducing downtime.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Expert Troubleshooting
                </span>{" "}
                Our skilled support team resolves technical snags, no matter the
                complexity or platform.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Priority Helpdesk{" "}
                </span>
                Prompt assistance to tackle critical challenges, ensuring
                minimal disruption to your online operations.
              </p>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 pt-5">
            <img src={Group3313} alt="man" className="max-w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-10">
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 pt-5">
            <img src={Group3314} alt="man" className="max-w-full h-auto" />
          </div>
          {/* Left Section: Text Content */}
          <div className="md:w-1/2 pl-5">
            <img src={six} alt="one" className="mb-[-5%]" />
            <h1 className="text-white text-[25px] font-semibold">
              E-commerce Maintenance
            </h1>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Inventory & Pricing Management
                </span>{" "}
                Keeping product databases accurate with real-time updates.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Secure Payment Gateways
                </span>{" "}
                Monitoring checkout processes for seamless, secure transactions.
              </p>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <FiCheckCircle className="text-white text-xl flex-shrink-0" />
              <p className="text-white">
                <span className="text-[#673DE6] font-bold">
                  Periodic Performance Checks
                </span>{" "}
                Testing integrations, shopping carts, and extensions to offer a
                glitch-free purchasing journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center   px-4 space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-px bg-black w-[80px] md:w-[100px]"></div>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black text-center p-10">
            Razobyte’s Maintenance Methodology
          </h1>
          <div className="h-px bg-black w-[80px] md:w-[100px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-4  ">
          {/* Box 1 */}
          <div className="relative text-center overflow-hidden">
            {/* Image */}
            <img
              src={Vector1}
              alt="Vector1"
              className="w-full  object-cover "
            />

            {/* Text Overlay on Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-lg font-bold px-2 pb-[60%]">
                Proven Expertise
              </h1>
            </div>

            {/* Text Below Image */}
            <div className="p-4">
              <p className="text-gray-700 text-sm leading-relaxed font-semibold">
                Solutions inspired by top maintenance practices.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative text-center overflow-hidden">
            {/* Text Above Image (Directly on Top) */}
            <div className="absolute inset-0 flex items-start justify-center p-4">
              <p className="text-gray-700 text-sm leading-relaxed mt-[40%] font-semibold">
                Front-end and back-end optimizations.
              </p>
            </div>

            {/* Image */}
            <img
              src={Vector2}
              alt="Vector1"
              className="w-full object-cover mt-[60%]"
            />

            {/* Text Inside the Image (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-lg font-bold px-2 mt-[60%]">
                Comprehensive Care
              </h1>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative text-center  overflow-hidden">
            <img src={Vector3} alt="Vector1" className="w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-lg font-bold px-2 pb-[60%]">
                Flexible Plans
              </h1>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-sm leading-relaxed font-semibold">
                Monthly or pay-as-you-go options.
              </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="relative text-center overflow-hidden">
            {/* Text Above Image (Directly on Top) */}
            <div className="absolute inset-0 flex items-start justify-center p-4">
              <p className="text-gray-700 text-sm leading-relaxed mt-[40%] font-semibold">
                A single contact for seamless updates.
              </p>
            </div>

            {/* Image */}
            <img
              src={Vector4}
              alt="Vector1"
              className="w-full object-cover mt-[60%]"
            />

            {/* Text Inside the Image (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-lg font-bold px-2 mt-[60%]">
                Comprehensive Care
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-black w-full text-white pt-5">
          <div className="flex items-center justify-center space-x-4 w-full">
            <div className="h-px bg-white w-[80px] md:w-[100px]"></div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center p-10">
              Why Partner with Razobyte?
            </h1>
            <div className="h-px bg-white w-[80px] md:w-[100px]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-4 py-8 ">
            <div className="pl-[10%]">
              <h1 className="text-[25px] w-[230px] pl-[2%]">
                Industry-Leading Insights
              </h1>
              <p className="w-[250px] pl-[2%]">
                Drawing from best practices used by top maintenance providers
                ensures tried-and- tested solutions for your website.
              </p>
            </div>
            <div className="pl-[10%]">
              {/* <img src={line} alt="line" className="mb-[-30%] pr-[10px]" /> */}

              <h1 className="text-[25px] w-[230px] pl-[2%]">
                All-in-One Maintenance
              </h1>
              <p className="w-[250px] pl-[2%]">
                Drawing from best practices From front-end improvements to
                back-end optimizations, we handle every aspect to keep your site
                in peak condition.
              </p>
            </div>
            <div className="pl-[10%]">
              <h1 className="text-[25px] w-[230px] pl-[2%]">
                Flexible Pricing & Plans
              </h1>
              <p className="w-[250px] pl-[2%]">
                Drawing from best practices Choose from monthly retainers or
                pay-as-you-go plans that align with your budget and project
                scope.
              </p>
            </div>
            <div className="pl-[10%]">
              <h1 className="text-[25px] w-[230px] pl-[2%]">
                Dedicated Support Team
              </h1>
              <p className="w-[250px] pl-[2%]">
                Drawing from best practices Enjoy the convenience of a single
                point of contact who will manage your requests and keep you
                updated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBoxes;
