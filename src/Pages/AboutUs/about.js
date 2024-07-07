import AboutUsStart from "../../Components/AboutUsComponent/AboutUsStart";
import OurMissonVison from "../../Components/AboutUsComponent/OurMisonVison";
export default function About() {
  return (
    <div>
      <section>
        <div className=" AboutStartBg text justify-center flex items-center">
          {" "}
            {/* <h1 className=" font-bold text pt-[23vh] text-yellow-400 font-serif text-center">
                About Us </h1> */}
          <h1 className="text-white text-6xl font-bold text font-serif text-center">Who We Are</h1>
        </div>

        <AboutUsStart />
        <OurMissonVison />

      </section>
    </div>
  );
}
