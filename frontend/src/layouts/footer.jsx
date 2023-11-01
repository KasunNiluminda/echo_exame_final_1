import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo01.png";
import TwitterIcon from "../assets/images/twitter.png";
import LinkedinIcon from "../assets/images/linkedin.png";
import FbIcon from "../assets/images/fb.png";
import IgIcon from "../assets/images/ig.png";

function Footer() {
  return (
    <>
      <div className="bg-primary">
        <div className="lg:grid lg:justify-items-center lg:grid-cols-2 py-20 lg:px-28 px-8">
          <div>
            <img src={Logo} alt="logo" className="h-24 lg:mx-auto" />
            <div className="lg:flex lg:flex-row flex-col my-14 gap-6 2xl:text-xl lg:text-base">
              <div>
                <Link to="/about" className="font-bold capitalize text-white">
                  about us
                </Link>
              </div>
              <div>
                <Link to="#" className="font-bold text-white">
                  How it works
                </Link>
              </div>
              <div>
                <Link to="#" className="font-bold capitalize text-white">
                  Terms & conditions
                </Link>
              </div>
              <div>
                <Link to="#" className="font-bold capitalize text-white">
                  privacy policy
                </Link>
              </div>
              <div>
                <Link to="#" className="font-bold capitalize text-white">
                  FAQs
                </Link>
              </div>
            </div>
            <div className="flex my-14 lg:gap-24 gap-12 lg:justify-center text-xl">
              <Link to="#" className="">
                <img src={TwitterIcon} alt="" />
              </Link>
              <Link to="#" className="">
                <img src={LinkedinIcon} alt="" />
              </Link>
              <Link to="#" className="">
                <img src={FbIcon} alt="" />
              </Link>
              <Link to="#" className="">
                <img src={IgIcon} alt="" />
              </Link>
            </div>
          </div>

          <div className="lg:-center">
            <form action="" method="post" className="lg:w-96">
              <h6 className="capitalize text-white">contact us</h6>
              <input
                placeholder="Email"
                type="email"
                className="bg-white w-full mt-3 px-3 py-1 rounded-md"
              />{" "}
              <br />
              <textarea
                placeholder="Message"
                type="text"
                className="bg-white h-40 w-full mt-3 p-3 rounded-md"
              />
              <button className="bg-white text-primary font-semibold rounded-xl capitalize w-24 py-1">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
