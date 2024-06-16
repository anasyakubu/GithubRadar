// import React from 'react';
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProfileCard = ({
  userImage,
  name,
  username,
  details,
  followers,
  following,
  link,
  userType,
}) => {
  return (
    <div className="ProfileCard bg-[#f8f8f8] text-[#1b1b1b] p-5 rounded-lg shadow-lg">
      <div className="">
        <div className="flex gap-3">
          <img className="w-16 rounded-full" src={userImage} alt="Userimage" />
          <h6 className="py-1">
            <span className="text-lg font-semibold">{name}</span>
            <br /> <span className="text-sm font-light">{username}</span>
          </h6>
        </div>
        <div className="mt-5">
          <p className="break-words">{details}</p>
        </div>
        <div className="mt-5">
          <p className="text-sm flex gap-2 items-center">
            <FaUsers />
            <span>
              <small className="text-black">{followers}</small> Followers
            </span>
            <span>| {following} Following</span>
          </p>
          <p className="mt-5">
            Type: <span>{userType}</span>
          </p>
          <div className="mt-5">
            <button
              className="p-2 w-32 pr-5 pl-5 rounded-full bg-black text-[#f8f8f8] text-sm hover:bg-transparent border border-black hover:text-[black] hover:border-[black]"
              style={{ fontSize: "11px" }}
            >
              <Link
                to={link}
                className="flex gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Visit Profile</span>
                <FaExternalLinkAlt />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
