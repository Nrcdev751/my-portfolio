function Skill(){
    return(
        <>
      
        <section id="skill" className="skill bg-[url('./assets/bg-skill.jpg')] object-cover p-5 relative w-full">
           <div className="max-w-screen-xl  mx-auto md:p-4 justify-center z-20" id="project">
                <h1 className="text-4xl font-bold text-center mb-5 text-white">ทักษะและความสามารถ</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center place-items-center  mt-10 ">
                    <div className="shadow w-full m-3 md:w-96 bg-white">
                        <div className="card-body ">
                            <h2 className="card-title">สร้างเว็บไซต์ตามดีไซน์</h2>
                            <p>สามารถนำเอาดีไซน์ต่าง ๆ ใน Figma หรือ Adobe XD มาทำให้อยู่ในรูปแบบของเว็บไซต์และรองรับการแสดงผลจอมือถือ</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    
                    <div className="shadow w-full m-3 md:w-96 bg-white">
                        <div className="card-body ">
                            <h2 className="card-title">สร้างเว็บไซต์มีระบบหลังบ้านพร้อมอัพขึ้นเซิร์ฟเวอร์</h2>
                            <p>มีบริการระบบการจองห้องพัก ระบบยืมอุปกรณ์ ระบบเช็คชื่อ พร้อม Admin ที่สามารถจัดการส่วนหน้าบ้านและหลังบ้านด้วย PHP + MySQL</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    
                    <div className="shadow w-full m-3 md:w-96 bg-white">
                        <div className="card-body">
                            <h2 className="card-title">ออกแบบ Ui/Ux</h2>
                            <p>ช่วยออกแบบหน้าตาของระบบตามบลีฟที่ลูกค้าต้องการเพื่อให้เกิดความง่ายต่อการนำมาใช้งานจริง</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 justify-center place-items-center  mt-10 ">
                        <div className="shadow w-full m-3 md:w-96  bg-white">
                            <div className="card-body ">
                                <h2 className="card-title">งานออกแบบสื่อสิ่งพิมพ์</h2>
                                <p>รับออกแบบงานกราฟิก เช่น โปสเตอร์ หนังสือ หรือแผ่นพับรวมถึงเกียรติบัตรต่าง ๆ </p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                        <div className="shadow w-full m-3 md:w-96  bg-white">
                            <div className="card-body ">
                                <h2 className="card-title">ตัดต่อวิดีโอ</h2>
                                <p>รับงานตัดต่อคลิปวิดีโอโปรโมท สารคดี และอื่น ๆ </p>
                                <div className="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Skill