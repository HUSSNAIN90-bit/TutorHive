import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";

const Home = () => {
  const list = [
    "Graphic Design",
    "UI/UX Design",
    "IT Software",
    "Development",
    "Graphic Design",
    "UI/UX Design",
    "IT Software",
    "Development",
    "IT Software",
    "Development",
  ];
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
          <h1 className="big-heading">
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
            <div
              className="w-[650px] bg-white rounded-2xl flex p-2"
              style={{
                boxShadow: " rgb(218, 218, 218) 0px 4px 5px 2px",
              }}
            >
              <div className="h-full p-4">
                <div className="p-8 bg-[#FAC43C] rounded-2xl">
                  <img src="/images/Vector.png" alt="" className="w-40" />
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
            <div
              className="w-[650px] bg-white rounded-2xl flex p-2"
              style={{
                boxShadow: " rgb(218, 218, 218) 0px 4px 5px 2px",
              }}
            >
              <div className="h-full p-4">
                <div className="p-8 bg-[#FF8345] rounded-2xl">
                  <img src="/images/Vector.png" alt="" className="w-40" />
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
            <div
              className="w-[650px] bg-white rounded-2xl flex p-2"
              style={{
                boxShadow: " rgb(218, 218, 218) 0px 4px 5px 2px",
              }}
            >
              <div className="h-full p-4">
                <div className="p-8 bg-[#0066B4] rounded-2xl">
                  <img src="/images/Vector.png" alt="" className="w-40" />
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
            <div
              className="w-[650px] bg-white rounded-2xl flex p-2"
              style={{
                boxShadow: " rgb(218, 218, 218) 0px 4px 5px 2px",
              }}
            >
              <div className="h-full p-4">
                <div className="p-8 bg-[#48B774] rounded-2xl">
                  <img src="/images/Vector.png" alt="" className="w-40" />
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
      <section className="bg-[#fff] flex p-4">
        <div className="w-[40%] h-screen flex justify-center items-center p-5">
          <img
            src="/images/image.png"
            alt=""
            className="border-[20px] border-white rounded-4xl object-cover w-full"
            style={{
              boxShadow: " rgb(218, 218, 218) 0px 4px 5px 2px",
            }}
          />
        </div>
        <div className="w-[60%] flex flex-col gap-10 justify-center px-[70px]">
          <div className="w-fit  px-10 py-2 bg-[#FAC43C99] rounded-4xl">
            <p className="text">ENHANCE YOUR CAREER</p>
          </div>
          <h3 className="big-heading-2">
            Boost your skillset with our online learning courses
          </h3>
          <p className="text">
            Unlock your full potential with TutorHiv – your gateway to the
            world’s most effective and engaging learning experience. Whether
            you're a student, professional, or lifelong learner, TutorHiv offers
            expertly designed courses tailored to your goals.
          </p>
          <div className="w-full h-[1px] bg-[#A1A1A1]"></div>
          <div className="w-full flex flex-wrap gap-5">
            {list.map((value, index) => (
              <div
                key={index}
                className="p-3 px-8 bg-[#F6F6F6] rounded-lg"
                style={{
                  boxShadow: "0px 1px 10px 2px #0000001A",
                }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 p-10 items-center py-20">
        <div className=" px-10 py-2 bg-[#FAC43C99] rounded-4xl w-fit">
          <p className="text-2">OUR BEST COURSES</p>
        </div>
        <h3 className="big-heading-2">Discover a most popular Online Course</h3>
        <div className="w-full flex gap-20 gap-y-20 justify-center mt-10 flex-wrap">
          {[...Array(6)].map((_, i) => (
            <CourseCard key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
