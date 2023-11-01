import React from "react";
import Design from "../assets/images/about-design.png";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/footer";

function Aboutus() {
  return (
    <>
      <Navbar />
      <div className="bg-secondary lg:grid lg:grid-cols-12 justify-items-center px-5 lg:px1 py-40">
        <div className="lg:col-span-6">
          <img className="hidden lg:block" src={Design} />
          <h2 className="uppercase block lg:hidden text-center my-5">About us</h2>
        </div>
        <div className="lg:col-span-6 self-center text-justify lg:text-left mt-10 lg:pr-6">
          <p className="font-semibold">
            Welcome to our online exam platform designed specifically for
            individuals with disabilities who are unable to use traditional
            methods of taking exams. At our platform, we believe that everyone
            should have access to education and opportunities regardless of
            their physical limitations. 
          </p>
          <p className="font-semibold my-6">Our team is dedicated to creating a
            seamless and user-friendly experience for individuals who use voice
            commands as their primary means of communication. With our
            innovative technology, students can take exams in a way that is
            comfortable and convenient for them. </p>
          <p className="font-semibold">We work closely with
            educational institutions to ensure that our platform meets their
            needs and requirements. Our platform is fully customizable, and we
            can adapt it to fit the unique needs of each institution. Whether
            you are a university, college, or a certification program, we can
            help you create an inclusive exam-taking experience for all your
            students. 
          </p>
          <p className="font-semibold my-6">
          Our mission is to level the playing field for individuals
            with disabilities and provide them with the opportunity to succeed
            in their academic pursuits. We believe that our platform is a step
            in the right direction towards creating a more inclusive and
            accessible education system. 
          </p>
          <p className="font-semibold">
          Thank you for considering our platform
            as your online exam solution. We look forward to working with you
            and providing a seamless and accessible experience for all your
            students.
          </p>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
