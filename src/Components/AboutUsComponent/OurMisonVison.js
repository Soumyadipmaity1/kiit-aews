import React from "react";

const image1 =
  "https://assets.terrapass.com/wp-content/uploads/2024/02/pollution-4796858_1920.jpg";
const image2 =
  "https://assets.terrapass.com/wp-content/uploads/2021/07/tree.png";
const OurMissonVison = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-[48%] ">
<div>
<img src={image1} alt="Factory" className="w-full   h-auto" />

</div>
        <div className="p-10 bg-teal-500 text-white ">
          <h2 className="text-4xl font-bold mb-4 ">Our Mission</h2>
          <ul class="list-disc text-[17px] font-semibold pl-5">
            <li>

              To create a compassionate and informed student community dedicated
              to the welfare of animals.
            </li>
            <li>
              To inspire and empower students to become advocates for animal
              rights and conservation.
            </li>
            <li>
              To foster a sustainable and humane relationship between humans and
              animals.
            </li>
            <li>
              To be a leading voice in promoting ethical treatment of animals
              within the academic community.
            </li>
            <li>
              To establish a network of students committed to making a positive
              impact on animal welfare globally.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-[53%]  flex flex-col">
        <div className="p-10">
          <h2 className="text-4xl text-[#a78044] pt-5 font-bold mb-4">Our Vision</h2>

          <ul class="list-disc pl-5 text-[#34240d] font-semibold text-[17px]">
            <li>
              To promote awareness and appreciation of animal welfare and
              conservation.
            </li>
            <li>
              To engage students in activities and events that support animal
              rights and protection.
            </li>
            <li>
              To provide educational resources and opportunities for students
              interested in animal-related fields.
            </li>
            <li>
              To collaborate with local and national organizations to further
              animal advocacy and conservation efforts.
            </li>
            <li>
              To foster a community of like-minded individuals dedicated to the
              well-being of animals.
            </li>
          </ul>
        </div>
        <div className="mt-4 ">
        <img src={image2} alt="Tree" className="w-full h-auto mt-auto" />

        </div>
      </div>
    </div>
  );
};

export default OurMissonVison;
