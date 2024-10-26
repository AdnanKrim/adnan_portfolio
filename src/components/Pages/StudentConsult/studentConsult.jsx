import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import ss1 from '../../../../src/assets/images/student_consult/student_consult-1.png'
import ss2 from '../../../../src/assets/images/student_consult/student_consult-2.png'
import ss3 from '../../../../src/assets/images/student_consult/student_consult-3.png'
import ss4 from '../../../../src/assets/images/student_consult/student_consult-4.png'
import ss5 from '../../../../src/assets/images/student_consult/student_consult-5.png'

const StudentConsult = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl uppercase flex justify-center pt-20 mb-5">Projects_3</h2>
            <div className="flex justify-center items-center">
                <div className="mt-20 grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
                    <div className="flex justify-center">
                        <Carousel className="w-[350px]">
                            <div className="w-[350px]">
                                <img src={ss1} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss2} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss3} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss4} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss5} />
                            </div>
                        </Carousel>
                    </div>
                    <div className="mt-20 w-full font-semibold lg:-ms-10 sm: ms-3">
                        <p>
                            • email:student@test.com Password:12345 <br /> <br />
                            • Laravel rest API, Auth with sanctum, json Web Token.<br /> <br />
                            •Restaurant Admin Panel which consists leed Management, finance management,ticket management, consult functionalities, etc.<br /> <br />
                            • Pusher Notification, payment gateway (Nagad), SMS notification,
                            graph API, Mail authentication, <br /> <br />

                            •Client side is built with react and server side is built with Laravel/PHP.
                        </p>
                        <Link to="/">
                            <button className="btn  text-white bg-gradient-to-r from-stone-300 via-slate-500 to-zinc-300 hover:from-slate-200 hover:to-stone-400 mt-3">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default StudentConsult;