import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="flex pt-[120px] px-10 h-screen ">
        <div className="flex flex-col gap-8 justify-center w-[50%] p-2">
          <div className="flex gap-3 items-center w-fit  px-10 py-2 bg-[#FAC43C99] rounded-4xl">
            <div className="max-w-[100px]">
              <img src="/images/Rocket.png" alt="" className="w-auto" />
            </div>
            <p className="text">ENHANCE YOUR CAREER</p>
          </div>
          <h1 className="big-heading ">
            Access The World’s Best Learning Course With TutorHiv
          </h1>
          <p className="text">
            Unlock your full potential with TutorHiv – your gateway to the
            world’s most effective and engaging learning experience. Whether
            you're a student, professional, or lifelong learner, TutorHiv offers
            expertly designed courses tailored to your goals.
          </p>
          <div className="flex gap-10 justify-between w-fit">
            <div className="w-[48px] h-[48px] bg-[#D9D9D9] rounded-lg"></div>
            <div className="w-[48px] h-[48px] bg-[#D9D9D9] rounded-lg"></div>
            <Link className="ml-5 button px-10 py-3 rounded-lg cursor-pointer text">
              Download Now
            </Link>
          </div>
        </div>
        <div className="h-full overflow-hidden flex justify-center w-[50%] items-center">
          <img
            src="/images/Hero-page-Image.png"
            alt=""
            className="w-full object-cover object-center"
          />
        </div>
      </section>
      <section className="flex p-10 flex-col justify-center">
        <div className="flex flex-col gap-5 items-center w-full">
          <div className="bg-[#FAC43C99] px-10 py-3 rounded-4xl">
            <p className="text tracking-wider">WHY CHOOSE US</p>
          </div>
          <h2
            className="big-heading-3 w-[40%] text-center "
            style={{
              lineHeight: "1.2",
            }}
          >
            Dive into online courses on diverse subjects
          </h2>
        </div>
        <div className="w-full flex justify-center gap-[50px] p-10 flex-wrap">
          <div className="flex flex-col gap-[50px]">
            <div className="w-[650px] bg-white rounded-2xl flex p-2" style={{
              boxShadow:" rgb(218, 218, 218) 0px 4px 5px 2px"
            }}>
              <div className="h-full p-4">
                <div className="p-8 bg-[#FAC43C] rounded-2xl">
                  <img src="/images/Vector.png" alt=""className="w-40"  />
                </div>
              </div>
              <div className="flex flex-col gap-3 p-4">
                <p className="normal-heading font-[600]">
                  Progress Tracking and Certifications
                </p>
                <p className="text-2">
                  Progress tracking and certifications provide learners with
                  clear milestones and recognition of their achievements. By
                  monitoring progress, students can stay motivated.
                </p>
              </div>
            </div>
            <div className="w-[650px] bg-white rounded-2xl flex p-2" style={{
              boxShadow:" rgb(218, 218, 218) 0px 4px 5px 2px"
            }}>
              <div className="h-full p-4">
                <div className="p-8 bg-[#FF8345] rounded-2xl">
                  <img src="/images/Vector.png" alt=""className="w-40"  />
                </div>
              </div>
              <div className="flex flex-col gap-3 p-4">
                <p className="normal-heading font-[600]">
                  Progress Tracking and Certifications
                </p>
                <p className="text-2">
                  Progress tracking and certifications provide learners with
                  clear milestones and recognition of their achievements. By
                  monitoring progress, students can stay motivated.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[50px]">
            <div className="w-[650px] bg-white rounded-2xl flex p-2" style={{
              boxShadow:" rgb(218, 218, 218) 0px 4px 5px 2px"
            }}>
              <div className="h-full p-4">
                <div className="p-8 bg-[#0066B4] rounded-2xl">
                  <img src="/images/Vector.png" alt=""className="w-40"  />
                </div>
              </div>
              <div className="flex flex-col gap-3 p-4">
                <p className="normal-heading font-[600]">
                  Progress Tracking and Certifications
                </p>
                <p className="text-2">
                  Progress tracking and certifications provide learners with
                  clear milestones and recognition of their achievements. By
                  monitoring progress, students can stay motivated.
                </p>
              </div>
            </div>
            <div className="w-[650px] bg-white rounded-2xl flex p-2" style={{
              boxShadow:" rgb(218, 218, 218) 0px 4px 5px 2px"
            }}>
              <div className="h-full p-4">
                <div className="p-8 bg-[#48B774] rounded-2xl">
                  <img src="/images/Vector.png" alt=""className="w-40"  />
                </div>
              </div>
              <div className="flex flex-col gap-3 p-4">
                <p className="normal-heading font-[600]">
                  Progress Tracking and Certifications
                </p>
                <p className="text-2">
                  Progress tracking and certifications provide learners with
                  clear milestones and recognition of their achievements. By
                  monitoring progress, students can stay motivated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
