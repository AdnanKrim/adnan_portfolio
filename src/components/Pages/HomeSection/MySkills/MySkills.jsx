import html from "../../../../../src/assets/icons/html.png";
import css from "../../../../../src/assets/icons/css.png";
import JavaScript from "../../../../../src/assets/icons/js.png";
import react from "../../../../../src/assets/icons/php.png";
import node from "../../../../../src/assets/icons/node.png";
import reactrouter from "../../../../../src/assets/icons/laravel.png";
import tailwind from "../../../../../src/assets/icons/tailwind.png";
import bootstrap from "../../../../../src/assets/icons/bootstrap.png";
import jwt from "../../../../../src/assets/icons/jwt.png";
import stripe from "../../../../../src/assets/icons/git.png";
import mongodb from "../../../../../src/assets/icons/mysql.png";
import expressjs from "../../../../../src/assets/icons/vue.png";
import firebase from "../../../../../src/assets/icons/trello.png";
import vite from "../../../../../src/assets/icons/vite.svg";
import axious from "../../../../../src/assets/icons/jquery.png";
import Aos from "aos";
import "aos/dist/aos.css";

const MySkills = () => {

  Aos.init();

  return (
    <div className="my-20 py-14 ">
      <h2 className="font-bold text-3xl uppercase flex justify-center mb-5">
        My Skills
      </h2>
      <hr className="border-[#5BCCF6]" />
      {/* flex div  */}
      <div data-aos="fade-down" className="flex justify-center mt-10 uppercase font-semibold">
        {/* grid div  */}
        <div className=" grid sm: grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* html logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={html} alt="" /> <br />
              <h1 className="flex justify-center">HTML</h1>
            </div>
          </div>
          {/* css logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={css} alt="" />
              <h1 className="flex justify-center">css</h1>
            </div>
          </div>
          {/* JavaScript logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={JavaScript} alt="" />
              <h1 className="flex justify-center">JavaScript</h1>
            </div>
          </div>
          {/* Node logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={node} alt="" />
              <h1 className="flex justify-center">node.js</h1>
            </div>
          </div>
          {/* React logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={react} alt="" />
              <h1 className="flex justify-center">PHP</h1>
            </div>
          </div>
          {/* vite logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={vite} alt="" />
              <h1 className="flex justify-center">vite</h1>
            </div>
          </div>
          {/* react router  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <br />
              <img className="w-[80px] " src={reactrouter} alt="" /> <br />
              <h1 className="flex justify-center -mt-[15px]">Laravel</h1>
            </div>
          </div>
          {/* tailwind logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              {" "}
              <br />
              <img className="w-[100px]" src={tailwind} alt="" /> <br />
              <h1 className="flex justify-center">tailwind</h1>
            </div>
          </div>
          {/* Bootstrap logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={bootstrap} alt="" /> <br />
              <h1 className="flex justify-center">bootstrap</h1>
            </div>
          </div>
          {/* Jwt Token  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={jwt} alt="" />
              <h1 className="flex justify-center">jwt token</h1>
            </div>
          </div>
          {/* Git logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px] " src={stripe} alt="" /> <br />
              <h1 className="flex justify-center -mt-[20px]">GIT</h1>
            </div>
          </div>
          {/* mySQL logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={mongodb} alt="" />
              <h1 className="flex justify-center">mysql</h1>
            </div>
          </div>
          {/* VUE JS logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              {" "}
              <br />
              <img className="w-[100px] -mt-[15px]" src={expressjs} alt="" /> <br />
              <h1 className="flex justify-center -mt-[15px]">vue.js</h1>
            </div>
          </div>
          {/* Axios logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={axious} alt="" />
              <h1 className="flex justify-center">j-query</h1>
            </div>
          </div>
          {/* firebase logo  */}
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
            className="shadow-2xl bg-transparent border-t-2 border-slate-300 p-2 rounded-lg w-[160px] flex justify-center">
            <div className="inner-element">
              <img className="w-[100px]" src={firebase} alt="" />
              <h1 className="flex justify-center">trello</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
