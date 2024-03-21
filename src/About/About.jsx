import styles from './About.module.css'
import profile from '../assets/about-profile.jpeg'

function About (){
    return(
        <>
            <section className="about bg-neutral-100 md:p-10">
                <div className="max-w-screen-xl  mx-auto">
                    <div className="grid grid-cols-1 reversed md:grid-cols-2 -order-2 " >
                        <div className="about-describe p-10 bg-white shadow-xl flex justify-center flex-col">
                            <h2 className="text-5xl font-bold">เกี่ยวกับผม</h2>
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi ab vel rerum esse enim, fugit, distinctio hic, temporibus nisi odit repellendus ducimus! Iste mollitia asperiores provident? Consequatur, delectus rem?</p>
                        </div>
                        <img src={profile} className="w-full aspect-[5/3] -order-1 md:order-last " alt="" />
                    </div>
                    <div className="  bg-gradient-to-r from-cyan-500 to-blue-500">
                    <div className="grid grid-cols-1 reversed md:grid-cols-2 -order-2 " >
                        
                        <div className="about-describe  p-10 text-white">
                            <h2 className="text-5xl font-bold mb-3">การศึกษา</h2>
                            <div className="school-group">
                                <div className="title-flex flex items-center">
                                    <div class="w-5 h-5 bg-white rounded-full me-2 relative">
                                        <div className={styles.line}></div>
                                    </div>
                                    <h2 className="text-2xl font-bold">ประฐมศึกษา</h2>
                                </div>
                                <p className="mt-2 ms-6">โรงเรียนอนุบาลบ้านเด็ก</p>
                                <p className="mt-2 ms-6">ปีการศึกษา 2553-2559</p>
                            </div>
                            <div className="school-group mt-5">
                                <div className="title-flex flex items-center">
                                    <div class="w-5 h-5 bg-white rounded-full me-2"></div>
                                    <h2 className="text-2xl font-bold">มัธยมศึกษา</h2> 
                                </div>
                                <p className="mt-2 ms-6">โรงเรียนสตรีพัทลุง GPAX 3.00</p>
                                <p className="mt-2 ms-6">ปีการศึกษา 2559-2561</p>
                            </div>
                            <div className="school-group mt-5">
                                <div className="title-flex flex items-center">
                                    <div class="w-5 h-5 bg-white rounded-full me-2"></div>
                                    <h2 className="text-2xl font-bold">ประกาศนียบัตรวิชาชีพ</h2>
                                </div>
                                <p className="mt-2 ms-6">สาขาคอมพิวเตอร์ธุรกิจ GPAX 3.89</p>
                                <p className="mt-2 ms-6">วิทยาลัยเทคนิคพัทลุง 2562-2564</p>
                            </div>
                            <div className="school-group mt-5">
                                <div className="title-flex flex items-center">
                                    <div class="w-5 h-5 bg-white rounded-full me-2"></div>
                                    <h2 className="text-2xl font-bold">ประกาศนียบัตรวิชาชีพชั้นสูง</h2>
                                </div>
                                <p className="mt-2 ms-6">สาขาเทคโนโลยีธุรกิจดิจิทัล GPAX 3.97</p>
                                <p className="mt-2 ms-6">วิทยาลัยเทคนิคพัทลุง 2565-2566</p>
                            </div>
                            <div className="school-group mt-5">
                                <div className="title-flex flex items-center">
                                    <div class="w-5 h-5 bg-white rounded-full me-2"></div>
                                    <h2 className="text-2xl font-bold">ปริญญาตรี</h2>
                                </div>
                                <p className="mt-2 ms-6">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</p>
                            </div>
                        </div>
                        <div className="about-describe p-10 order-first bg-white shadow-xl  ">
                            <h2 className="text-5xl font-bold">ประสบการณ์ทำงาน</h2>
                        </div>
                      
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About