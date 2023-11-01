import React from "react";
import { Link } from "react-router-dom";
import SignoutIcon from "../assets/images/signout.png";
import OrgLogo from "../assets/images/org-logo.png";
import SearchIcon from "../assets/images/icon-search_.png";
import '../App.css'

function quizHistory() {
  return (
    <>
      <div>
        <div className="flex py-14 px-20 justify-center">
          <div>
            <h4 className="capitalize text-primary">Quiz history</h4>
          </div>
        </div>
        <div className="h-[3px] bg-primary w-full"></div>
        <div className="container mx-auto my-10">
          <div className="flex justify-end">
            <div className="flex items-center right-0 justify-between w-96 rounded-xl py-3 px-2 border-2 border-primary">
              <input
                className="bg-transparent search-placeholder"
                style={{ fontStyle: "italic"}}
                type="text"
                placeholder="Search subject code here"
              />
              <img src={SearchIcon} alt="" />
            </div>
          </div>
          <div className="flex justify-between px-5 mt-10 border-2 border-primary p-7">
            <div>
              <div className="flex w-96 gap-4">
                <p className="capitalize font-semibold">subject code</p>
                <p className="capitalize font-semibold">-</p>
                <p className="capitalize font-semibold">subject name</p>
              </div>
              <div className="mt-4 font-medium">
                <span className="capitalize">Date of Held:</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  <span className="text-[#009BD6]">Total Students - 50</span> |{" "}
                  <span className="text-[#359613]">
                    Attended Studnts - 45 (90%)
                  </span>{" "}
                </span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  Single line short description about exam:
                </span>
              </div>
            </div>
            <div className="self-center">
              <Link>
                <h4 className="text-primary">Check</h4>
              </Link>
            </div>
          </div>

          <div className="flex justify-between px-5 mt-6 border-2 border-primary p-7">
            <div>
              <div className="flex w-96 gap-4">
                <p className="capitalize font-semibold">subject code</p>
                <p className="capitalize font-semibold">-</p>
                <p className="capitalize font-semibold">subject name</p>
              </div>
              <div className="mt-4 font-medium">
                <span className="capitalize">Date of Held:</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  <span className="text-[#009BD6]">Total Students - 50</span> |{" "}
                  <span className="text-[#359613]">
                    Attended Studnts - 45 (90%)
                  </span>{" "}
                </span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  Single line short description about exam:
                </span>
              </div>
            </div>
            <div className="self-center">
              <Link>
                <h4 className="text-primary">Check</h4>
              </Link>
            </div>
          </div>

          <div className="flex justify-between px-5 mt-6 border-2 border-primary p-7">
            <div>
              <div className="flex w-96 gap-4">
                <p className="capitalize font-semibold">subject code</p>
                <p className="capitalize font-semibold">-</p>
                <p className="capitalize font-semibold">subject name</p>
              </div>
              <div className="mt-4 font-medium">
                <span className="capitalize">Date of Held:</span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  <span className="text-[#009BD6]">Total Students - 50</span> |{" "}
                  <span className="text-[#359613]">
                    Attended Studnts - 45 (90%)
                  </span>{" "}
                </span>
              </div>
              <div className="mt-2 font-medium">
                <span className="capitalize">
                  Single line short description about exam:
                </span>
              </div>
            </div>
            <div className="self-center">
              <Link>
                <h4 className="text-primary">Check</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default quizHistory;
