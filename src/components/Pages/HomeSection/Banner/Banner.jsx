import bannerimg from "../../../../../src/assets/images/passport_pic_without_backgr.png";
import Typewriter from "react-ts-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  Aos.init();

  return (
    <div
      style={{ justifyItems: "center" ,alignItems:"center" }}
      className="grid sm:grid-cols-1 lg:grid-cols-2 items-center  pb-14 "
    >
      {/* Heading section  */}
      <div className=" sm: ms-3 lg:ms-20 lg:mt-[150px] md:mt-[150px] sm: mt-[120px]">
        <p className="font-semibold ">
          <span
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="font-bold text-1xl uppercase text-purple-800"
          >
            Assalamualikum,{" "}
          </span>{" "}
          <br />
          <span className="font-bold text-3xl uppercase">
            I am
            <span
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="text-purple-800"
            >
              <Typewriter text=" Md.Adnan Ul Karim ," />
            </span>
          </span>{" "}
          <br />
          <span
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {" "}
            I am a highly ambitious and self-motivated person preparing myself all
along for the competitive world through 4 years of B.Sc. in CSE and 1.5
years of M.Engg in CSE courses along with practical work experience. I
believe good communication skill and technical skill are the keys to
developing a smooth career path and now with honesty and hard work, I
am ready to serve any organization with my best.
          </span>
        </p>
        <a
          href="https://drive.google.com/file/d/1QFRiRvOCioPTLkMsAbQJU-vNZ04_Su82/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="btn text-white mt-3
            bg-purple-800 hover:text-black shadow-2xl"
          >
            Resume
          </button>
        </a>
      </div>
      {/* banner picture section  */}
      <div>
          <img className="w-[350px] lg:mt-[100px] md:mt-0 sm:mt-0 rounded-full " src={bannerimg} alt="" />
     
      </div>
    </div>
  );
};

export default Banner;
