// import React from 'react'
import UserImage from "../assets/102716454.jpeg";
import { FaUsers } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="ProfileCard bg-[#f8f8f8] text-[#1b1b1b] p-5 rounded-lg shadow-lg">
      <div className="">
        <div className="flex gap-3">
          <img className="w-16 rounded-full" src={UserImage} alt="Userimage" />
          <h6 className="py-1">
            <span className="text-lg font-semibold">Anas Yakubu</span>
            <br /> <span className="text-sm font-light">anasyakubu</span>
          </h6>
        </div>
        <div className="mt-5">
          <p className="">Software Engineer || Web Developer</p>
        </div>
        <div className="mt-5">
          <p className="text-sm flex gap-2">
            <span className="py-1">
              <FaUsers />
            </span>
            <span>
              <small className="text-black">3</small> Followers
            </span>
            <span>| 2 Following</span>
          </p>
          <p className="mt-5">
            Type: <span>User</span>
          </p>
          <div className="mt-5">
            <button
              type="submit"
              className="p-2 w-30 pr-5 pl-5 rounded-full bg-black text-[#f8f8f8] text-sm hover:bg-transparent border border-black hover:text-[black] hover:border-[black] flex gap-3"
              style={{ fontSize: "11px" }}
            >
              <span>Visit Profile</span>
              <span className="py-1">
                <FaExternalLinkAlt />{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
