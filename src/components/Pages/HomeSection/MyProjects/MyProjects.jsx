import { BsFillArrowRightCircleFill, BsFillMenuButtonWideFill, } from "react-icons/bs";
import { GrServer } from "react-icons/gr";
import school from '../../../../../src/assets/images/marketien_School/Banner-s.png'
import erp from '../../../../../src/assets/images/orchid_erp/orchid_pic_1.jpg'
import chef from '../../../../../src/assets/images/chef-mania/chef_mania_ss.png'
import restaurant from '../../../../../src/assets/images/marketien_restaurant/Banner.png'
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


const MyProjects = () => {

  Aos.init();

  return (
    <div className="py-20 ">
      <h2 className="font-bold text-3xl uppercase flex justify-center mb-5">My Projects</h2>
      <hr className="border-[#5BCCF6]"/>
      <div className='flex justify-center mt-10 '>
        <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/*---------------- my projects card --------------- */}

        {/* Erp */}
          <div data-aos="flip-down" data-aos-duration="700" className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-300">
            <figure><img className='p-2 rounded-xl' src={erp} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                Orchid Architecture(ERP)
                <a href="https://handy-toy.web.app/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2" /></a>

              </h2>
              <p className="font-semibold mb-5">
                <span >• Html, Css, JavaScript, </span> <br />
                <span >• Nodejs, MySql, Bootstrap</span> <br />
                <span >• Vue, php, Laravel, </span> <br />
                <span >• jquery, bulksmsbd, etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/erp">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2" /></div>
                  </Link>
                </div>
                <div>
                  <a href="https://github.com/AdnanKrim/Orchid_ERP/tree/master" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">Client_Site <GrServer /></a>
                  <a href="https://github.com/AdnanKrim/Orchid_ERP/tree/master" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">Server_Site <GrServer /></a>
                </div>
              </div>
            </div>
          </div>

        {/* restaurant  */}
          <div data-aos="flip-down" data-aos-duration="900" className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-300">
            <figure><img className='p-2 rounded-xl' src={restaurant} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                Marketien Restaurant
                <a href="https://azahar-mia-family.netlify.app/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2" /></a>

              </h2>
              <p className="font-semibold mb-5">
                <span >• Html, Css, JavaScript,</span> <br />
                <span >• Nodejs, tailwind</span> <br />
                <span >• React, Vite, Mysql, PHP </span> <br />
                <span >• Netlify,Laravel, etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/restaurant">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2" /></div>
                  </Link>
                </div>
                <div>
                  <a href="https://github.com/tamzid620/Frest_Meal" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">Client_Site <GrServer /></a>
                  <a href="https://github.com/AdnanKrim/marketien_restaurant_mgt" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">Server_Site <GrServer /></a>
                </div>
              </div>
            </div>
          </div>

        {/* School  */}
        <div data-aos="flip-down" data-aos-duration="1100" className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-300">
            <figure><img className='p-2 rounded-xl' src={school} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                marketien_School
                <a href="https://azraelle-language-camp.web.app/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2" /></a>

              </h2>
              <p className="font-semibold mb-5">
                <span >• Html, Css, JavaScript,</span> <br />
                <span >• Nodejs, Mysql, Stripe, tailwind</span> <br />
                <span >• React, Vite, JWT token, PHP, Laravel </span> <br />
                <span >• Firebase,Vue,websocket etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/school">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2" /></div>
                  </Link>
                </div>
                <div>
                  <a href="https://github.com/tamzid620/school_management" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">Client_Site <GrServer /></a>
                  <a href="https://github.com/AdnanKrim/School-Mgt" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">Server_Site <GrServer /></a>
                </div>
              </div>
            </div>
          </div>

        {/* Chef Mania  */}
        <div data-aos="flip-down" data-aos-duration="1400" className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-300">
            <figure><img className='p-2 rounded-xl' src={chef} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                chef_mania
                <a href="https://chef-mania-3ef19.web.app/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2" /></a>

              </h2>
              <p className="font-semibold mb-5">
                <span >• Html, Css, JavaScript,</span> <br />
                <span >• Nodejs, Mongodb, tailwind</span> <br />
                <span >• React, Vite, expressjs, </span> <br />
                <span >• Firebase, ReactIcons, Reacttoast, etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/chef">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2" /></div>
                  </Link>
                </div>
                <div>
                  <a href="https://github.com/tamzid620/chef_mania_client" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">Client_Site <GrServer /></a>
                  <a href="https://github.com/tamzid620/chef_manis_server" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">Server_Site <GrServer /></a>
                </div>
              </div>
            </div>
          </div>    

        </div>
      </div>
    </div>
  );
};

export default MyProjects;