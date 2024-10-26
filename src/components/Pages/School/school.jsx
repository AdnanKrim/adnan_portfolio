import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import ss1 from '../../../../src/assets/images/marketien_School/schoolProject-1.png'
import ss2 from '../../../../src/assets/images/marketien_School/schoolProject-2.png'
import ss3 from '../../../../src/assets/images/marketien_School/schoolProject-3.png'
import ss4 from '../../../../src/assets/images/marketien_School/schoolProject-4.png'
import ss5 from '../../../../src/assets/images/marketien_School/schoolProject-5.png'
import ss6 from '../../../../src/assets/images/marketien_School/schoolProject-6.png'
import ss7 from '../../../../src/assets/images/marketien_School/schoolProject-7.png'
import ss8 from '../../../../src/assets/images/marketien_School/schoolProject-8.png'
import ss9 from '../../../../src/assets/images/marketien_School/schoolProject-9.png'
import ss10 from '../../../../src/assets/images/marketien_School/schoolProject-10.png'
import ss11 from '../../../../src/assets/images/marketien_School/Banner-s.png'
// import ss12 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp12.png'
// import ss13 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp13.png'
// import ss14 from '../../../../src/assets/images/azraelle-language-camp/azraelle-language-camp14.png'
import { Link } from "react-router-dom";

const School = () => {



    return (
        <div>
            <h2 className="font-bold text-3xl uppercase flex justify-center pt-20 mb-5">School Management</h2>
            <hr />
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
                            <div className="w-[350px]">
                                <img src={ss6} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss7} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss8} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss9} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss10} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss11} />
                            </div>
                            {/* <div className="w-[350px]">
                                <img src={ss12} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss13} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss14} />
                            </div> */}
                        </Carousel>
                    </div>
                    <div className="mt-20 w-full font-semibold lg:-ms-10 sm: ms-3">
                        <p>
                            •  email:admin@test.com Password:1234567 <br /> <br />
                            • Laravel rest API, Auth with sanctum, json Web Token, Web socket, Payment Gateway,vonage sms <br /> <br />
                            • School Admin Panel which consists Student Management, Payment management,account management, Teacher management, Result management, Notice, Routine etc.<br /> <br />
                            • Pusher Notification, payment gateway (Bkash), SMS notification,
                            graph API, Mail authentication, <br /> <br />

                            •Client side is built with react and server side is built with Laravel/PHP.
                        </p>
                        <Link to="/">
                            <button className="btn  text-white bg-gradient-to-r from-stone-300 via-slate-500 to-zinc-300 hover:from-slate-200 hover:to-stone-400 mt-3">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default School;