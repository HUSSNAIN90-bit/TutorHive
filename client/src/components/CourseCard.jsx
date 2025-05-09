import React from "react";

export default function CourseCard() {
  return (
    <div
      className="w-[375px] h-[496px] p-5 bg-white rounded-3xl gap-5 flex flex-col items-center justify-between"
      style={{
        boxShadow: " rgb(218, 218, 218) 0px 4px 5px 2px",
      }}
    >
      <p className="text-[18px] text-[#00000080] text-left w-full tracking-widest">Graphic design</p>
      <div className="w-full rounded-2xl h-[200px] bg-[#00000024] overflow-hidden">
        <img
          src="/images/image2.png"
          alt=""
          className="w-full h-full scale-[1.2] object-cover object-center"
        />
      </div>
      <p className=" text-left w-full text-[24px] font-[400]">
        The Complete Graphic Design Theory for Beginners Course
      </p>
      <div className="w-full justify-between items-center flex">
        <div className="flex gap-2 items-center">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden bg-[#00000024]"></div>
          <p className="text-[12px] font-light">Zahid shah</p>
        </div>
        <p className="text-[12px] font-light text-[#00000080]">
          <span>10</span> Sessions
        </p>
      </div>
      <div className="w-full justify-between items-center flex">
        <p className="text-[12px] font-light ">
          <span className="text-[#0BA347] font-[600]">$20.00</span>{" "}
          <span className="text-[8px] text-[#00000080]">$20.00</span>
        </p>
        <p className="text-[12px] font-light text-[#00000080] flex gap-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              style={{fill: "rgba(250, 196, 60, 1)"}}
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
          </span>
          5.0(50,000)
        </p>
      </div>
      <button className="bg-[#DADADA] hover:bg-[#FAC43C]  rounded-3xl w-full p-2 cursor-pointer text-[14px] tracking-wide font-[600]" style={{
        transition: "all ease 0.4s",
      }}>
      Enroll now
      </button>
    </div>
  );
}
