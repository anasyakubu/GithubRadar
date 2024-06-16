// import React from 'react'
import Nav from "../../Components/Nav";
import ProfileCard from "../../Components/ProfileCard";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <Nav />
      <div className="p-24">
        <div className="">
          <div className="">
            <h2 className="text-4xl text-[#ece383]">Github Rader.</h2>
            <p className="mt-3">
              Search more than 51M users on Github. A database that contain all
              the Github Profiles <br />
            </p>
          </div>
          <div className="mt-5">
            <form>
              <input
                className="w-[70%] p-4 rounded-full outline-none border border-black text-black"
                type="text"
                name=""
                id=""
                placeholder="Search for User."
              />
              <div className="mt-5">
                <button
                  type="submit"
                  className="p-3 w-36 pr-6 pl-6 rounded-full bg-[#f8f8f8] text-black text-sm hover:bg-transparent border border-[#f8f8f8] hover:text-[#f8f8f8] hover:border-[#f8f8f8]"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="mt-16">
            <div className="p-1 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
