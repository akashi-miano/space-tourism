import crewImg1 from "../assets/crew/image-douglas-hurley.png";
import crewImg2 from "../assets/crew/image-mark-shuttleworth.png";
import crewImg3 from "../assets/crew/image-victor-glover.png";
import crewImg4 from "../assets/crew/image-anousheh-ansari.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Crew = () => {
  const [selected, setSelected] = useState(1);
  const isDesktop = window.innerWidth >= 768;
  useEffect(() => {
    if (isDesktop) document.body.classList.add("hideScroll");
    AOS.init();
  });
  return (
    <>
      <section className="bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop bg-cover bg-no-repeat bg-center min-h-screen">
        <div className="!pt-44 container">
          <header className="" data-aos="zoom-in" data-aos-delay="200">
            <span className="flex items-center gap-4 text-3xl tracking-wider text-white uppercase justify-center md:justify-start">
              {" "}
              <span className="text-gray-700">01</span>Pick your crew
            </span>
          </header>
          <div className="crew__contents grid md:grid-cols-2 mt-8 relative gap-4 justify-center md:justify-start gap-4">
            <header
              className="text-contents text-white flow-content--m text-center md:text-left"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <span className="role text-gray-400 text-3xl">
                {selected === 1
                  ? "Commander"
                  : selected === 2
                  ? "Mission Specialist"
                  : selected === 3
                  ? "PILOT"
                  : "Flight Engineer"}
              </span>
              <h1 className="staff-name text-5xl uppercase whitespace-nowrap">
                {selected === 1
                  ? "Douglas Hurley"
                  : selected === 2
                  ? "MARK SHUTTLEWORTH"
                  : selected === 3
                  ? "Victor Glover"
                  : "Anousheh Ansari"}
              </h1>
              <p className="staff-name max-w-[450px] text-neutral mx-auto md:mx-0">
                {selected === 1
                  ? "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                  : selected === 2
                  ? "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                  : selected === 3
                  ? "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
                  : "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}
              </p>{" "}
              <div className="balls flex items-center gap-4 w-full justify-center md:justify-start">
                {[1, 2, 3, 4].map((item) => (
                  <button
                    key={item}
                    className={
                      selected === item
                        ? "h-[25px] w-[25px] rounded-full bg-[white] hover:cursor-pointer duration-300"
                        : "h-[25px] w-[25px] rounded-full bg-gray-700 hover:cursor-pointer duration-300"
                    }
                    onClick={() => setSelected(item)}
                  ></button>
                ))}
              </div>
            </header>
            <div className="crew-img" data-aos="fade-left" data-aos-delay="600">
              <img
                src={
                  selected === 1
                    ? crewImg1
                    : selected === 2
                    ? crewImg2
                    : selected === 3
                    ? crewImg3
                    : crewImg4
                }
                alt=""
                className="md:translate-y-[-20%] max-h-[550px] mx-auto md:mx-0 translate-y-[0] w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crew;
