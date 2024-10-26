import { BsFillArrowRightCircleFill, BsFillMenuButtonWideFill, } from "react-icons/bs";
import { GrServer } from "react-icons/gr";
import school from '../../../../../src/assets/images/marketien_School/Banner-s.png'
import erp from '../../../../../src/assets/images/orchid_erp/orchid_pic_1.jpg'
import student from '../../../../../src/assets/images/student_consult/student_consult-2.png'
import restaurant from '../../../../../src/assets/images/marketien_restaurant/Banner.png'
import account from '../../../../../src/assets/images/QAK_Account/Untitled.png'
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

        

        {/* restaurant  */}
          <div data-aos="flip-down" data-aos-duration="900" className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-300">
            <figure><img className='p-2 rounded-xl' src={restaurant} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                Marketien Restaurant
                <a href="https://restaurant.softplatoon.com/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit(client) <BsFillArrowRightCircleFill className="ms-2" /></a>

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
                  <a href="https://github.com/AdnanKrim/marketien_restaurant_mgt" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">Github<GrServer /></a>
                  <a href="https://restaurant.softplatoon.com/dp" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">Admin Panel <GrServer /></a>
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
                <a href="https://school.softplatoon.com/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit(Client) <BsFillArrowRightCircleFill className="ms-2" /></a>

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
                  <a href="https://github.com/AdnanKrim/School-Mgt" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">Github<GrServer /></a>
                  <a href="https://school.softplatoon.com/dp" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">Admin Panel <GrServer /></a>
                </div>
              </div>
            </div>
          </div>
          {/* Account  */}
        <div data-aos="flip-down" data-aos-duration="1100" className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-300">
            <figure><img className='p-2 rounded-xl' src={account} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                QAK Account Software
                <a href="https://account.softplatoon.com" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2" /></a>

              </h2>
              <p className="font-semibold mb-5">
                <span >• Desktop App and Webapp</span> <br />
                <span >• electronjs for desktop version</span> <br />
                <span >• Html, Css, JavaScript,</span> <br />
                <span >• Nodejs, Mysql, Stripe, tailwind</span> <br />
                <span >• Vite, JWT token, PHP, Laravel </span> <br />
                <span >• J-query,Vonage,Spatie,Sqlite </span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/account">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2" /></div>
                  </Link>
                </div>
                <div>
                  <a href="https://github.com/AdnanKrim/accountMGT" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">Github<GrServer /></a>
                  <a href="https://drive.google.com/drive/folders/1VEZZWa8Znf4QRMLHM2vFAN-zACCsg6vP?usp=drive_link" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">desktop_app<GrServer /></a>
                </div>
              </div>
            </div>
          </div>
          {/* Erp */}
          <div data-aos="flip-down" data-aos-duration="700" className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-300">
            <figure><img className='p-2 rounded-xl' src={erp} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                Orchid Architecture(ERP)
                <a href="https://orchidarchitect.com/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2" /></a>

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

        {/* Student Consultancy */}
        <div data-aos="flip-down" data-aos-duration="1400" className="card lg:w-[385px] md:w-[380px] sm: w-[350px] shadow-xl   bg-transparent border-t-2 border-slate-300">
            <figure><img className='p-2 rounded-xl' src={student} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title text-purple-700">
                Student_Consultancy
                <a href="https://consultant.softplatoon.com/" target="_blank" className="badge badge-warning border-gray-500  hover:bg-slate-400" rel="noreferrer">Visit <BsFillArrowRightCircleFill className="ms-2" /></a>

              </h2>
              <p className="font-semibold mb-5">
                <span >• Html, Css, JavaScript,</span> <br />
                <span >• Nodejs, Mysql, tailwind</span> <br />
                <span >• React, Vite, PHP </span> <br />
                <span >• Vonage, Laravel, Websocket etc...</span> <br />
              </p>
              <div className="card-actions justify-between">
                <div>
                  <Link to="/student">
                    <div className="badge badge-success border-gray-500 font-semibold hover:bg-slate-400">Details <BsFillMenuButtonWideFill className="ms-2" /></div>
                  </Link>
                </div>
                <div>
                  <a href="https://github.com/AdnanKrim/marketien_student_consultency" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">GitHub <GrServer /></a>
                  <a href="https://consultant.softplatoon.com/userLogin" target="_blank" rel="noreferrer" className="badge badge-error font-semibold ms-2 border-gray-500 hover:bg-slate-400">StudentPanel<GrServer /></a>
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