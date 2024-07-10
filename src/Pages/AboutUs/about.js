import AboutUsStart from "../../Components/AboutUsComponent/AboutUsStart";
import OurMissonVison from "../../Components/AboutUsComponent/OurMisonVison";
export default function About() {
  return (
    <div>
      <section>
        <div className="hidden AboutStartBg  justify-center lg:flex items-center">
          {" "}
            {/* <h1 className=" font-bold text pt-[23vh] text-yellow-400 font-serif text-center">
                About Us </h1> */}
          <h1 className="text-white lg:text-6xl text-5xl font-bold text font-serif text-center">Who We Are</h1>
        </div>
        <div className="AboutMobile  h-[330px] lg:hidden text justify-center flex items-center">
          {" "}
            {/* <h1 className=" font-bold text pt-[23vh] text-yellow-400 font-serif text-center">
                About Us </h1> */}
          <h1 className="text-white lg:text-6xl text-5xl font-bold text font-serif text-center">Who We Are</h1>
        </div>
        <AboutUsStart />
        <OurMissonVison />

      </section>
    </div>
  );
}
