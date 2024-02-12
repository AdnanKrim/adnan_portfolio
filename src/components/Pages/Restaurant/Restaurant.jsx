import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import ss1 from '../../../../src/assets/images/marketien_restaurant/resturantProject-1.png'
import ss2 from '../../../../src/assets/images/marketien_restaurant/resturantProject-2.png'
import ss3 from '../../../../src/assets/images/marketien_restaurant/resturantProject-3.png'
import ss4 from '../../../../src/assets/images/marketien_restaurant/resturantProject-4.png'
import ss5 from '../../../../src/assets/images/marketien_restaurant/resturantProject-5.png'
import ss6 from '../../../../src/assets/images/marketien_restaurant/resturantProject-6.png'
import ss7 from '../../../../src/assets/images/marketien_restaurant/resturantProject-7.png'
import ss8 from '../../../../src/assets/images/marketien_restaurant/resturantProject-8.png'
import ss9 from '../../../../src/assets/images/marketien_restaurant/resturantProject-9.png'
import ss10 from '../../../../src/assets/images/marketien_restaurant/resturantProject-10.png'
import ss11 from '../../../../src/assets/images/marketien_restaurant/resturantProject-11.png'
import ss12 from '../../../../src/assets/images/marketien_restaurant/resturantProject-12.png'
import ss13 from '../../../../src/assets/images/marketien_restaurant/resturantProject-13.png'
import ss14 from '../../../../src/assets/images/marketien_restaurant/resturantProject-14.png'
import ss15 from '../../../../src/assets/images/marketien_restaurant/resturantProject-15.png'
import ss16 from '../../../../src/assets/images/marketien_restaurant/resturantProject-16.png'
import ss17 from '../../../../src/assets/images/marketien_restaurant/resturantProject-17.png'
import ss18 from '../../../../src/assets/images/marketien_restaurant/resturantProject-18.png'
import ss19 from '../../../../src/assets/images/marketien_restaurant/resturantProject-19.png'
import ss20 from '../../../../src/assets/images/marketien_restaurant/resturantProject-20.png'
import ss21 from '../../../../src/assets/images/marketien_restaurant/resturantProject-21.png'


const Restaurant = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl uppercase flex justify-center pt-20 mb-5">Projects_2</h2>
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
                            <div className="w-[350px]">
                                <img src={ss12} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss13} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss14} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss15} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss16} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss17} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss18} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss19} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss20} />
                            </div>
                            <div className="w-[350px]">
                                <img src={ss21} />
                            </div>
                        </Carousel>
                    </div>
                    <div className="mt-20 w-full font-semibold lg:-ms-10 sm: ms-3">
                    <p>
• Laravel rest API, Auth with sanctum, json Web Token.<br /> <br />
•Restaurant Admin Panel which consists menu Management, order management,account management, employee management, kitchen management etc.<br /> <br />
• Pusher Notification, payment gateway (Bkash), SMS notification,
graph API, Mail authentication, <br /> <br />

•Client side is built with react and server side is built with Laravel/PHP.
<br /> <br />
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

export default Restaurant;