import blogimg from '../../../../../src/assets/images/passport.jpg'
import { FaFilePdf } from "react-icons/fa6";
import Typewriter from 'react-ts-typewriter';
import Aos from "aos";
import "aos/dist/aos.css";

const Blog = () => {
    Aos.init();

    return (
        <div className="py-20">
            <h2 className="font-bold text-3xl uppercase flex justify-center mb-5">About Me</h2>
            <hr className="border-[#5BCCF6]" />

            <div data-aos="zoom-in" className='ms-5 me-5 flex justify-center items-center mt-10 rounded-3xl  sm:relative shadow-xl'>
                <div style={{ alignItems: "center", justifyContent: "center" }} className='grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className=''>
                        <img className='w-[350px] lg:ms-20 sm:ms-3' src={blogimg} alt="" />
                    </div>
                    <div className='lg:w-[550px] sm:w-[350px] lg:-ms-10 sm:ms-3 font-semibold'>
                        <p className='pb-[50px]'>
                            <span className='text-purple-800 pt-[20px]'><Typewriter text='Welcome to my portfolio website!' /></span>
                            <br /> I have experience building Full-Stack Web Applications and Restful API’s using languages and frameworks including Laravel/PHP and VUE/JS. I am seeking a challenging but rewarding field that would make my career growth on the highest peak.<br />
                            I created several projects using PHP / Laravel and uploaded in Git-hub. You can check out my git-hub link- github.com/AdnanKrim.<br /><br />
                            As a junior programmer at the Rangamati Science and Technology University I have acquired skills in MYSQL and DBMS. I am good at data structure and algorithms.<br />
                            In my previous jobs, I experienced about back-end development, building APIs, building server-side logic and many more logical operations.
                            I could offer you services in the following areas:<br />
                            •	Developing and maintaining web applications using PHP/Laravel frameworks.<br />
                            •	Database operation with SQL queries.<br />
                            •	Using version control system such as git<br />
                            •	Basic front-end design<br />
                            Curious by nature, passionate, and looking for a collaborative environment where I can feel the impact of my work every day.<br />

                        </p>
                    </div>
                </div>
            </div>
                    {/* tablesection */}
                    <div>
                        <div className="overflow-x-auto mt-[100px] ">
                            <h2 className="font-bold text-3xl uppercase flex justify-center mb-5">Education</h2>
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Degree</th>
                                        <th>Institution</th>
                                        <th>document</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>M.engg in CSE</td>
                                        <td>Rangamati Science and Technology University</td>
                                        <td><a href="https://drive.google.com/file/d/1Xy0JHci0Qrc72SyoxR2iChKjbw5-IXgg/view?usp=drive_link" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">pdf <FaFilePdf /></a></td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td>B.Sc. in CSE</td>
                                        <td>Rangamati Science and Technology University</td>
                                        <td><a href="https://drive.google.com/file/d/1B105JIEYsW1lSwvpYkIKa7M4dhvswepz/view?usp=sharing" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">pdf <FaFilePdf /></a></td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>3</th>
                                        <td>HSC</td>
                                        <td>Govt. Haji Mohammad Mohsin College </td>
                                        <td><a href="https://drive.google.com/file/d/1KBnh3btSBZryGknyA34NeXGIoWHoK4No/view?usp=sharing" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">pdf <FaFilePdf /></a></td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>SSC</td>
                                        <td>Govt. Muslim High School </td>
                                        <td><a href="https://drive.google.com/file/d/1TUgzkP32CttSMAL1MEm3FfTa6gLWP3MC/view?usp=sharing" target="_blank" rel="noreferrer" className="badge badge-info font-semibold border-gray-500 hover:bg-slate-400">pdf <FaFilePdf /></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

        </div>
    );
};

export default Blog;