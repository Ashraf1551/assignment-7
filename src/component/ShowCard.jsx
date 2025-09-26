import React from "react";
import Container from "./Container";
import bgImg from "../assets/vector1.png";

const SHowCard = ({ inProgress, resolve }) => {
  return (
    <div className="bg-[#f5f5f5]">
      <Container>
        <div className="lg:flex justify-between py-5 gap-16 space-y-5">
          <div
            className="rounded-[8px] lg:w-[700px] h-[200px] flex flex-col justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImg}), linear-gradient(90deg,rgba(84,207,103.68,1),rgba(0,130,122.2,1) 100%)`,
            }}
          >
            <span className=" text-3xl text-white">In-Progress</span>
            <span className=" text-3xl text-white mt-2">{inProgress}</span>
          </div>

          <div
            className="rounded-[8px] lg:w-[700px] h-[200px] flex flex-col justify-center items-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImg}), linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)`,
            }}
          >
            <span className="text-3xl text-white">Resolve</span>
            <span className="text-3xl text-white mt-2">{resolve} </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SHowCard;
