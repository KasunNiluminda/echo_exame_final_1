import React from "react";
import LogoTop from "../assets/images/Logo02.png";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/bannerimg.png";
import ServiceImage from "../assets/images/service.png";
import MonitoringImg from "../assets/images/monitoringImg.png";
import MonitoringTimeImg from "../assets/images/monitoringTime.png";
import Footer from "../layouts/footer";

function home() {
  return (
    <>
      <div
        className="2xl:h-[880px] lg:h-[800px] md:h-[750px] h-[820px] lg:bg-cover lg:bg-center bg-accent"
        style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src={LogoTop}
              alt="logo"
              className="bg-primary lg:h-fit md:h-48 h-36 2xl:p-16 lg:p-12 rounded-b-3xl 2xl:ml-72 lg:ml-44 ml-4"
            />
            <h2 className="2xl:pt-14 pt-4 md:pt-16 lg:ml-32 ml-8 capitalize text-left">
              inclusive and accessible exam-taking experience for all
            </h2>
            <p className="lg:ml-32 ml-8 mt-6 font-semibold mb-12 capitalize text-left">
              Our platform is specifically designed for individuals with
              disabilities, enabling them to take exams using voice commands or
              typing, providing flexibility and convenience
            </p>
            <Link
              to="/login"
              className="lg:ml-32 ml-8 bg-transparent border-[5px] border-primary capitalize roboto text-primary mt-10 lg:mb-0 mb-10 text-2xl py-2.5 px-4 rounded-3xl font-bold">
              get started
            </Link>
          </div>
          <div className="lg:col-span-2 "></div>
          <div className="col-span-4 lg:block hidden">
            <Link
              to="/signup"
              className="float-right 2xl:mr-56 lg:mr-40 bg-primary capitalize roboto text-white mt-10 text-3xl py-2.5 px-4 rounded-full font-bold">
              signup
            </Link>
            {/* <Link
              to="/login"
              className="float-right 2xl:mr-56 lg:mr-40 bg-primary capitalize roboto text-white mt-10 text-3xl py-2.5 px-4 rounded-full font-bold">
              login
            </Link> */}
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container lg:mx-auto px-2 lg:px-0">
          <h3 className="capitalize lg:text-center text-primary 2xl:pt-16 pt-10">
            our service
          </h3>
          <div className="lg:grid lg:grid-cols-3 lg:flex-none flex-col-reverse mt-10">
            <div className="col-span-2 self-center">
              <h4 className="text-[#00415A] my-6">
                Secured Examination Environment
              </h4>
              <p className="w-11/12">
                Our online exam platform provides a secure environment for
                students to take their exams without any worries about cheating
                or unauthorized access. We use state-of-the-art security
                protocols to ensure that students' personal information and exam
                results are protected.
              </p>
            </div>
            <div className="col-span-1">
              <img src={ServiceImage} alt="image" className="h-96" />
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:flex-none flex-col-reverse my-24">
            <div className="col-span-1 lg:block hidden">
              <img src={MonitoringImg} alt="image" className="h-96" />
            </div>
            <div className="col-span-2 self-center">
              <h4 className="text-[#00415A] my-6">
                Secured Examination Environment
              </h4>
              <p className="w-11/12">
                Our online exam platform provides a secure environment for
                students to take their exams without any worries about cheating
                or unauthorized access. We use state-of-the-art security
                protocols to ensure that students' personal information and exam
                results are protected.
              </p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:flex-none flex-col-reverse">
            <div className="lg:col-span-2 self-center">
              <h4 className="text-[#00415A] my-6">
                Monitoring full examination time
              </h4>
              <p className="w-11/12">
                Our online exam platform provides a secure environment for
                students to take their exams without any worries about cheating
                or unauthorized access. We use state-of-the-art security
                protocols to ensure that students' personal information and exam
                results are protected.
              </p>
            </div>
            <div className="lg:col-span-1">
              <img src={MonitoringTimeImg} alt="image" className="h-96" />
            </div>
          </div>
        </div>
        <div className="lg:my-40 my-20">
          <h3 className="text-[#00415A] lg:text-center lg:ml-0 ml-3 my-6">Plans</h3>
          <div className="lg:flex lg:flex-row flex-col justify-center mt-10 2xl:gap-40 lg:gap-12 px-1 md:px-10 lg:px-0">
            <div className="border-[3px] lg:w-[400px] md:w-full my-4 lg:my-0 py-24">
              <h5 className="capitalize text-center">basic</h5>
              <h2 className="capitalize text-center text-[#009BD6]">free</h2>
              <ul className="list-disc pl-32 list-inside font-bold">
                <li>10 students</li>
                <li>1 Lecture</li>
                <li>2 Quiz for Month</li>
                <li>2 Sections</li>
              </ul>
            </div>

            <div className="border-[3px] lg:w-[400px] md:w-full xs:w-96 my-4 lg:my-0 py-24">
              <h5 className="capitalize text-center">plus</h5>
              <h2 className="capitalize text-center text-[#009BD6]">$50</h2>
              <ul className="list-disc pl-32 list-inside font-bold">
                <li>100 students</li>
                <li>5 Lectures</li>
                <li>10 Quizes for Month</li>
                <li>5 Sections</li>
              </ul>
            </div>

            <div className="border-[3px] lg:w-[400px] md:w-full xs:w-96my-4 lg:my-0 py-24">
              <h5 className="capitalize text-center">pro</h5>
              <h2 className="capitalize text-center text-[#009BD6]">$100</h2>
              <ul className="list-disc pl-32 list-inside font-bold">
                <li>Unlimited students</li>
                <li>10 Lectures</li>
                <li>50 Quizes for Month</li>
                <li>10 Sections</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default home;
