import { Link } from "react-router-dom";
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import kaews_logo from './kaews_logo.png';
import FooterIcons from "../FooterIcons/FooterIcons";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#071607] lg:block hidden pt-6 px-10 pl-16">
        <div className="grid grid-cols-3 xl:px-10 pb-10 ">
          <div className="">
            <p className="font-semibold text-neutral-300 pt-5 text-xl">KIIT Animal & Environment 
            </p>
            <p className="font-semibold text-neutral-300 pt-1 text-xl"> Welfare Society
            </p>
            <div className="w-48 h-1 border-b-2 p-2 border-yellow-300"></div>
            <div className="mt-10">
        <div className="flex my-3 ">
          <MdEmail className="text-slate-400 text-xl  mr-4" />
          <p className="text-slate-300 ">kiitaews@gmail.com</p>
        </div>
        <div className="flex my-3 items-center">
          <MdPhone className="text-slate-400  text-xl mr-4" />
          <p className="text-slate-300">+91 1234567890</p>
        </div>
        <div className="flex mt-3 ">
          <MdLocationOn className="text-slate-400 text-xl  mr-4" />
          <p className="text-slate-300">KSAC, KIIT University, Odisha, India</p>
        </div>
      </div>
            <FooterIcons />
          </div>

          <div className=" md:ml-12 xl:ml-0">
            <h2 className="font-semibold pt-6 text-neutral-300 text-xl">Quick Links</h2>
            <div className="p-2 w-40 h-1 border-b-2 border-amber-300"></div>
            <div className="text-gray-400">
              <p className="pt-4 py-2 cursor-pointer hover:text-white">
                <a target="_blank" rel="noopener noreferrer" href="https://kiit.ac.in/">KIIT</a>
              </p>

              <p className="py-2 cursor-pointer hover:text-white">
                <a target="_blank" rel="noopener noreferrer" href="https://ksac.kiit.ac.in/">KSAC</a>
              </p>
              <p className="py-2 cursor-pointer hover:text-white">
                <a target="_blank" rel="noopener noreferrer" href="https://news.kiit.ac.in/kiit-review/">KIIT review</a>
              </p>
            </div>
          </div>

          <div className=" ">
            <h2 className="font-semibold pt-7 text-neutral-300 text-xl">Location</h2>
            <div className=" h-1 w-40 p-2 border-b-2 border-amber-300"></div>
            <iframe className="mt-5"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14962.547358826554!2d85.818928!3d20.356616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093cc3e1974b%3A0x85a345e1f4fcce86!2sKIIT%20Student%20Activity%20Center%20-%20KSAC!5e0!3m2!1sen!2sin!4v1716546829538!5m2!1sen!2sin"
      width="400"
      height="200"
      margin=""
      style={{ border: 4 }}
      allowFullScreen="true"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
          </div>
        </div>
        <div className="w-full mx-auto py-5 pb-8">
          <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
          <span className="text-sm text-gray-500 flex justify-center text-center dark:text-gray-400">
            © 2024 <a href="index.html" className="hover:underline">KIIT Animal & Environment Welfare Society™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>

      <footer className="block bg-[#020319] lg:hidden p-8 pt-10">
        <div className=" text-center  ">
          <img className="mx-auto" src={kaews_logo} alt="" />
          {/* <h1 className=" font-bold text-yellow-400 p-5 text-xl">"Build Small, Think Big"</h1> */}
        </div>
        <FooterIcons />

        <div>
          <h1>Contact Us</h1>
          <div className=" text-center text-xl font-bold pb-3 text-white ">Contact Us</div>
          <div className="text-center text-gray-400" >
            <p className=" text-sm font">
              <i className="fa-solid fa-address-book pb-2  "></i> Campus 3, KIIT University, Odisha
            </p>

            <p className="  text">
              <i className="fa-solid fa-envelope py-2 pr-1 "></i>
              <a href="mailto:kiitelectricalsociety@gmail.com" className="hover:text-white">kiitelectricalsociety@gmail.com</a>
            </p>
            <p className="  text">
              <i className="fa-solid fa-clock py-2 pr-1"></i> 10am to 8pm
            </p>
          </div>
        </div>

        <div className="text-center text-white">
          <h1 className="text-xl pt-6 p-4 font-bold">Quick Links</h1>

          <div className="text-gray-400  text-center">
            <p className=" cursor-pointer ">
              <a target="_blank" rel="noopener noreferrer" href="https://kiit.ac.in/">KIIT</a>
            </p>

            <p className="cursor-pointer ">
              <a target="_blank" rel="noopener noreferrer" href="https://ksac.kiit.ac.in/">KSAC</a>
            </p>
            <p className="cursor-pointer ">
              <a target="_blank" rel="noopener noreferrer" href="https://news.kiit.ac.in/kiit-review/">KIIT review</a>
            </p>

          </div>
        </div>

        <div className="w-full  mx-auto p-2 md:py-6">
          <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
          <span className="text-sm text-gray-500 flex justify-center text-center dark:text-gray-400">
            ©2024 <Link to="/" className="hover:underline px-1"> KIIT Animal & Environment Welfare Society™</Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
