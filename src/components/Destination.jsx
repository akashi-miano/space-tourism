import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Destination = () => {
  const [planet, setPlanet] = useState("moon");
  const [selected, setSelected] = useState("moon");
  const isDesktop = window.innerWidth >= 768;
  useEffect(() => {
    if (isDesktop) document.body.classList.add("hideScroll");
    AOS.init();
  }),
    [];
  return (
    <>
      <section className="flex items-center min-h-screen pt-32 bg-center bg-no-repeat bg-cover md:pt-16 text-neutral bg-destinationDesktop">
        <div className="container">
          <header className="mt-2" data-aos="zoom-in" data-aos-delay="200">
            <span className="flex items-center gap-4 text-3xl tracking-wider text-white uppercase justify-center md:justify-start">
              {" "}
              <span className="text-gray-700">01</span>Pick your destination
            </span>
          </header>
          <div className="grid items-center gap-4 mt-8 content-wrapper md:grid-cols-2">
            <div
              className="mx-auto img-wrapper md:mx-0"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <img
                src={
                  planet === "moon"
                    ? moonImg
                    : planet === "mars"
                    ? marsImg
                    : planet === "europa"
                    ? europaImg
                    : titanImg
                }
                alt="moon image"
                className="w-[85%] md:w-[75%] spin mx-auto"
              />
            </div>
            <div
              className="text-content flow-content--m py-8 md:py-4"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="flex items-center justify-center gap-4 planets md:justify-start">
                <span
                  className={
                    selected === "moon"
                      ? "selected uppercase"
                      : "uppercase cursor-pointer"
                  }
                  onClick={() => {
                    setPlanet("moon");
                    setSelected("moon");
                  }}
                >
                  moon
                </span>
                <span
                  className={
                    selected === "mars"
                      ? "uppercase selected"
                      : "uppercase cursor-pointer"
                  }
                  onClick={() => {
                    setPlanet("mars");
                    setSelected("mars");
                  }}
                >
                  mars
                </span>
                <span
                  className={
                    selected === "europa"
                      ? "uppercase cursor-pointer selected"
                      : "uppercase cursor-pointer"
                  }
                  onClick={() => {
                    setPlanet("europa");
                    setSelected("europa");
                  }}
                >
                  europa
                </span>
                <span
                  className={
                    selected === "titan"
                      ? "uppercase cursor-pointer selected"
                      : "uppercase cursor-pointer"
                  }
                  onClick={() => {
                    setPlanet("titan");
                    setSelected("titan");
                  }}
                >
                  titan
                </span>
              </div>
              <header className="text-center md:text-left">
                <h2 className="my-6 text-6xl font-medium text-white">
                  {planet === "moon"
                    ? "MOON"
                    : planet === "mars"
                    ? "MARS"
                    : planet === "europa"
                    ? "EUROPA"
                    : "TITAN"}
                </h2>
                <p className="max-w-[450px] mb-8 mx-auto md:mx-0">
                  {planet === "mooon"
                    ? "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
                    : planet === "mars"
                    ? "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
                    : planet === "europa"
                    ? "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
                    : "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."}
                </p>
              </header>
              <hr className="border-b-1 border-[#383B4B]" />
              <div className="flex items-center justify-center gap-4 info md:justify-start">
                <div className="flex flex-col flow-content--m">
                  <span className="">AVG. DISTANCE</span>
                  <span className="info-content">
                    {planet === "moon"
                      ? "384,400 km"
                      : planet === "mars"
                      ? "225 MIL. km"
                      : planet === "europa"
                      ? "628 MIL. km"
                      : "1.6 BIL. km"}
                  </span>
                </div>
                <div className="flex flex-col flow-content--m">
                  <span>Est. travel time</span>
                  <span className="info-content">
                    {planet === "moon"
                      ? "3 days"
                      : planet === "mars"
                      ? "9 months"
                      : planet === "europa"
                      ? "3 years"
                      : "7 years"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
