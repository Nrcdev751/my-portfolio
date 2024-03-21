
import profile from '../assets/about-profile.jpeg'

function About (){
    return(
        <>
            <section className="about bg-neutral-100 md:p-10">
                <div className="max-w-screen-xl  mx-auto">
                    <div className="grid grid-cols-1 reversed md:grid-cols-2 -order-2 " >
                        <div className="about-describe p-10 bg-white shadow-xl flex justify-center flex-col">
                            <h2 className="text-5xl font-bold">เกี่ยวกับผม</h2>
                            <p className="mt-5">สวัสดีครับ ผมณรงค์ชัย สุราษฎารมย์ หรือเรียกผมสั้น ๆ ว่าเบ็มก็ได้ ตอนนี้อายุ 19 ปี ผมมีความสนใจในการสร้างเว็บไซต์ตั้งแต่ตอนอยู่ ปวช.
                            จนผมได้มีโอกาสมาแข่งขันในรายการของอาชีวศึกษาแล้วได้แชมป์ของภาคใต้ถึง 3 สมัย ซึ่งการแข่งขันเหล่านี้ช่วยพัฒนาพื้นในด้านโครงสร้างของระบบและช่วยฝึกการทำงานเป็นทีม ผมจึงอยากที่จะนำสิ่งเหล่านี้มาต่อยอดกับ React Framework เพื่อช่วยให้ผมสามารถนำพื้นฐานเหล่านี้ไปประยุกต์ในการทำงานจริงครับ 
                            </p>
                        </div>
                        <img src={profile} className="w-full aspect-[5/3] -order-1 md:order-last " alt="" />
                    </div>
               
                </div>
            </section>
        </>
    )
}
export default About