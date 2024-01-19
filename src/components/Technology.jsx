import { useState, useEffect } from "react";
import img1 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import img2 from "../assets/technology/image-space-capsule-landscape.jpg";
import img3 from "../assets/technology/image-spaceport-landscape.jpg";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Technology = () => {
  useEffect(() => {
    AOS.init();
  });
  const [selected, setSelected] = useState(1);
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-techMobile md:bg-techTablet lg:bg-techDesktop bg-center bg-no-repeat bg-cover">
        <div className="container !pt-44 mx-0">
          <header
            className="text-white"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="flex items-center gap-4 text-3xl tracking-wider text-white uppercase mb-16 justify-center md:justify-start">
              {" "}
              <span className="text-gray-700">03</span>SPACE LAUNCH 101
            </span>
          </header>
          <div
            className="tech__contents grid--1x3"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="btns-wrapper flex md:flex-col gap-4 md:gap-6 items-center justify-center">
              {[1, 2, 3].map((item) => (
                <button
                  className="w-[60px] h-[60px] rounded-full text-2xl text-neutral border-2 border-neutral bg-transparent hover:bg-white hover:text-primary duration-300 focus:bg-white focus:text-primary"
                  key={item}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="main-content w-full flow-content--m text-center md:text-left">
              <span className="text-md text-neutral">THE TERMINOLOGY…</span>
              <h1 className="text-5xl uppercase  text-white">
                {selected === 1
                  ? "LAUNCH VEHICLE"
                  : selected === 2
                  ? "SPACEPORT"
                  : "SPACE CAPSULE"}
              </h1>
              <p className="max-w-[450px] text-neutral mx-auto md:mx-0">
                {selected === 1
                  ? "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                  : selected === 2
                  ? "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
                  : "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}
              </p>
            </div>
            <div
              className="img-wrapper order-[-1] md:order-[0]"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <img
                src={selected === 1 ? img1 : selected === 2 ? img2 : img3}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
