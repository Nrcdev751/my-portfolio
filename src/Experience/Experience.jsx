import styles from './Experience.module.css'
import activity_1 from '../assets/activity_1.jpg'
import activity_2 from '../assets/activity_2.jpg'
import activity_3 from '../assets/activity_3.jpg'
import activity_4 from '../assets/activity_4.jpg'
import activity_5 from '../assets/activity_5.jpg'
function Experience() {
    return(
        <>
            <section id="education" className="education about bg-neutral-100 md:p-10">
                <div className="max-w-screen-xl  mx-auto">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
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
                        <div className="about-describe p-10 order-last bg-white shadow-xl  ">
                            <h2 className="text-5xl font-bold">ประสบการณ์ทำงาน</h2>
                            <div className="activity-group mt-5 grid grid-cols-4 ">
                                <img src={activity_1} className="w-100 rounded shadow-xl" alt="" />
                                <div className="title-flex flex flex-col col-span-3 ms-4">
                                    <h2 className="text-2xl font-bold">รางวัลรองชนะเลิศระดับชาติ</h2>
                                    <p className="mt-2">การแข่งขันทักษะการพัฒนานวัตกรรมธุรกิจดิจิทัลระดับชาติ ณ จังหวัดระยอง วันที่ 30 มกราคม - 3 กุมภาพันธ์ 2566</p>
                                </div>
                            </div>
                            <div className="activity-group mt-5 grid grid-cols-4 ">
                                <img src={activity_2} className="w-100 rounded shadow-xl" alt="" />
                                <div className="title-flex flex flex-col col-span-3 ms-4">
                                    <h2 className="text-2xl font-bold">รางวัลชนะเลิศระดับภาค</h2>
                                    <p className="mt-2">การแข่งขันทักษะการพัฒนานวัตกรรมธุรกิจดิจิทัลระดับภาค ณ จังหวัดพัทลุง วันที่ 4 ธันวาคม - 8 ธันวาคม 2566</p>
                                </div>
                            </div>
                            <div className="activity-group mt-5 grid grid-cols-4 ">
                                <img src={activity_3} className="w-100 rounded shadow-xl" alt="" />
                                <div className="title-flex flex flex-col col-span-3 ms-4">
                                    <h2 className="text-2xl font-bold">รางวัลชนะเลิศระดับภาค</h2>
                                    <p className="mt-2">การแข่งขันทักษะการพัฒนานวัตกรรมธุรกิจดิจิทัลระดับภาค ณ จังหวัดชุมพร วันที่ 12 ธันวาคม - 16 ธันวาคม 2565</p>
                                </div>
                            </div>
                            <div className="activity-group mt-5 grid grid-cols-4 ">
                                <img src={activity_4} className="w-100 rounded shadow-xl" alt="" />
                                <div className="title-flex flex flex-col col-span-3 ms-4">
                                    <h2 className="text-2xl font-bold">รางวัลชนะเลิศระดับภาค</h2>
                                    <p className="mt-2">การแข่งขันทักษะการพัฒนาระบบพาณิชย์อิเล็กทรอนิกส์ ณ จังหวัดตรัง วันที่ 1 กุมภาพันธ์ - 5 กุมภาพันธ์ 2565</p>
                                </div>
                            </div>
                            <div className="activity-group mt-5 grid grid-cols-4 ">
                                <img src={activity_5} className="w-100 rounded shadow-xl" alt="" />
                                <div className="title-flex flex flex-col col-span-3 ms-4">
                                    <h2 className="text-2xl font-bold">เจ้าหน้าที่กรอกคะแนน</h2>
                                    <p className="mt-2">ปฏิบัติหน้าที่รายงานผลคะแนนขึ้นเว็บไซต์กีฬาเยาวชนแห่งชาติในระดับชาติ</p>
                                </div>
                            </div>
                        </div>
                      
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Experience