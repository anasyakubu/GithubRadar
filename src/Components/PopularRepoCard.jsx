// import React from 'react'
// import UserImage from "../assets/102716454.jpeg";
import { FaUsers } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularRepoCard = ({
  userImage,
  name,
  username,
  details,
  followers,
  following,
  link,
}) => {
  return (
    <div className="PopularRepoCard  bg-[#ece383] text-[#1b1b1b] p-5 rounded-lg shadow-lg">
      <div className="">
        <div className="flex gap-3">
          <img className="w-16 rounded-full" src={userImage} alt="Userimage" />
          <h6 className="py-1">
            <span className="text-lg font-semibold">{name}</span>
            <br /> <span className="text-sm font-light">{username}</span>
          </h6>
        </div>
        <div className="mt-5">
          <p className="">{details}</p>
        </div>
        <div className="mt-5">
          <p className="text-sm flex gap-2">
            <span className="py-1">
              <FaUsers />
            </span>
            <span>
              <small className="text-black">{followers}</small> Followers
            </span>
            <span>| {following} Following</span>
          </p>
          <p className="mt-5">
            Type: <span>User</span>
          </p>
          <div className="mt-5">
            <button
              className="p-2 w-32 pr-5 pl-5 rounded-full bg-black text-[#f8f8f8] text-sm hover:bg-transparent border border-black hover:text-[black] hover:border-[black] "
              style={{ fontSize: "11px" }}
            >
              <Link to={link} className="flex gap-3">
                <span>Visit Profile</span>
                <span className="py-1">
                  <FaExternalLinkAlt />{" "}
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRepoCard;
