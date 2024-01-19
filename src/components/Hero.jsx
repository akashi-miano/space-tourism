import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="flex items-center min-h-screen bg-center bg-no-repeat bg-cover hero lg:bg-heroDesktop bg-heroTablet bg-heroMobile md:bg-heroTablet">
      <div className="container grid gap-4 text-center md:grid-cols-2 md:text-left md:gap-0">
        <header
          className="flow-content--m"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <span className="text-2xl tracking-wider text-neutral special">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <h1 className="text-white text-8xl">SPACE</h1>
          <p className="text-neutral max-w-[450px] mx-auto md:mx-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </header>
        <div className="btn-wrapper translate-y-[25%] md:translate-x-[10%] flex justify-center md:static">
          <Link
            to="/destination"
            className="explore h-[274px] w-[274px] rounded-full bg-white text-[#0B0D17] flex justify-center items-center uppercase text-5xl font-medium duration-300 hover:scale-105 hover:cursor-pointer"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
