import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import ss1 from '../../../../src/assets/images/QAK_Account/Untitled.png'
import ss2 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_account-master-table.png'
import ss3 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_account-table.png'
import ss4 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_attendance-form.png'
import ss5 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_dashboard.png'
import ss6 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_employee-detail_1.png'
import ss7 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_employee-location.png'
import ss8 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_master-detail_7.png'
import ss9 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_payslip_tarek%20vai.png'
import ss10 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_preview-account.png'
import ss11 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_quotation (1).png'
import ss12 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_quotation-detail_6.png'
import ss13 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_quotation-list.png'
import ss14 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_user-list.png'
import ss16 from '../../../../src/assets/images/QAK_Account/127.0.0.1_8000_account-master-form (1).png'
import ss15 from '../../../../src/assets/images/QAK_Account/Untitled1.png'



const Restaurant = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl uppercase flex justify-center pt-20 mb-5">QAK_Account</h2>
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
                            {/* <div className="w-[350px]">
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
                            </div> */}
                        </Carousel>
                    </div>
                    <div className="mt-20 w-full font-semibold lg:-ms-10 sm: ms-3">
                    <p>
• email:admin@test.com Password:12345<br /> <br />
• Laravel rest API, Auth with sanctum, json Web Token.<br /> <br />
•QAk Account webapp and desktop app which consists account management,worker management,attendance management, employee management, balance sheet management etc.<br /> <br />
• Pusher Notification, payment gateway (Bkash), SMS notification,
graph API, Mail authentication, <br /> <br />

•Client side is built with blade engine and server side is built with Laravel/PHP.
<br /> <br />
•Desktop software is developed with electron js and sqlite database.
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