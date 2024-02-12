import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import ss1 from '../../../../src/assets/images/orchid_erp/orchid_pic_1.jpg'
import ss2 from '../../../../src/assets/images/orchid_erp/orchid_pic_2.jpg'
import ss3 from '../../../../src/assets/images/orchid_erp/orchid_pic_3.jpg'
import ss4 from '../../../../src/assets/images/orchid_erp/orchid_pic_4.jpg'
import ss5 from '../../../../src/assets/images/orchid_erp/orchid_pic_5.jpg'
import ss6 from '../../../../src/assets/images/orchid_erp/orchid_pic_6.jpg'
import ss7 from '../../../../src/assets/images/orchid_erp/orchid_pic_7.jpg'
import ss8 from '../../../../src/assets/images/orchid_erp/orchid_pic_8.jpg'
import ss9 from '../../../../src/assets/images/orchid_erp/orchid_pic_9.jpg'
import ss10 from '../../../../src/assets/images/orchid_erp/orchid_pic_10.jpg'


const Erp = () => {
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
                        </Carousel>
                    </div>
                    <div className="mt-20 w-full font-semibold lg:-ms-10 sm: ms-3">
                    <p>
• Here I worked and completed several modules as they are
Purchase Module, Labor Management, Product Management,
Supplier Module, Inventory Management, User Authentication.<br /> <br />

• I finished this project with Laravel and Vue.js <br /> <br />

• I completed fully crud services, dynamic form-handlig with
vue.js, Mail services with Mail trap, SMS Integration with
bulkSMSbd, User Authentication, creating API, Stock
Management, random Invoice No. generatiing and many more
logical operations.<br /> <br />
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

export default Erp;