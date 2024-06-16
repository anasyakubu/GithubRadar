import React, { useState } from "react";
import Nav from "../../Components/Nav";
import ProfileCard from "../../Components/ProfileCard";
import "./Hero.scss";

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  const [userData, setUserData] = useState(null);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchInput}&per_page=10`
      );
      const data = await response.json();
      if (data.items.length > 0) {
        setUserData(data.items[0]);
        console.log(data);
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="Hero">
      <Nav />
      <div className="p-24">
        <div className="">
          <div className="">
            <h2 className="text-4xl text-[#ece383]">Github Rader.</h2>
            <p className="mt-3">
              Search more than 51M users on Github. A database that contains all
              the Github Profiles <br />
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSearch}>
              <input
                className="w-[70%] p-4 rounded-full outline-none border border-black text-black"
                type="text"
                placeholder="Search for User."
                value={searchInput}
                onChange={handleInputChange}
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
            {userData && (
              <div className="p-1 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <ProfileCard
                  userImage={userData.avatar_url}
                  name={userData.login}
                  username={userData.login}
                  details={userData.url}
                  link={userData.html_url}
                  followers={userData.followers_url.length}
                  following={userData.following_url.length}
                  userType={userData.type}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
