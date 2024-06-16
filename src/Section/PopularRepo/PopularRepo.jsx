// import React from "react";
import "./PopularRepo.scss";
import PopularRepoCard from "../../Components/PopularRepoCard";

const PopularRepo = () => {
  return (
    <div className="PopularRepo">
      <div className="p-24">
        <div className="">
          <div className="">
            <h2 className="text-4xl text-[#ece383]">Top Github Accounts.</h2>
            <p className="mt-3">
              Here are GitHub accounts that are widely recognized for their
              contributions and influence in the developer community <br />
            </p>
          </div>
          <div className="mt-16">
            <div className="p-1 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <PopularRepoCard
                userImage="https://avatars.githubusercontent.com/u/1024025?v=4"
                name="Linus Torvalds"
                username="torvalds"
                details="Known for: Creator of Linux and Git."
                link="https://github.com/torvalds"
                followers="210K"
                following="0"
              />
              <PopularRepoCard
                userImage="https://avatars.githubusercontent.com/u/810438?v=4"
                name="Dan Abramov"
                username="gaearon"
                details="Known for: Co-author of Redux and Create React App, member of the React core team."
                link="https://github.com/gaearon"
                followers="87K"
                following="173"
              />
              <PopularRepoCard
                userImage="https://avatars.githubusercontent.com/u/170270?v=4"
                name="Sindre Sorhus"
                username="sindresorhus"
                details="Known for: Prolific open-source developer with numerous popular Node.js and JavaScript projects."
                link="https://github.com/sindresorhus"
                followers="67.2k"
                following="30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRepo;
