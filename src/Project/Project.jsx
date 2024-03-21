import portfolio_1 from '../assets/portfolio1.jpg'
import portfolio_2 from '../assets/portfolio2.jpg'
import portfolio_3 from '../assets/portfolio3.jpg'
import portfolio_5 from '../assets/portfolio5.jpg'
import portfolio_6 from '../assets/portfolio6.png'
import portfolio_7 from '../assets/portfolio7.png'
import portfolio_8 from '../assets/portfolio8.png'
import portfolio_9 from '../assets/portfolio9.png'
function Project (){
    return(
        <>
        <section className="bg-white shadow md:p-5">
           <div className="max-w-screen-xl  mx-auto md:p-4 justify-center" id="project">
                <h1 className="text-4xl font-bold text-center mt-5 mb-5">ผลงานต่าง ๆ</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center ">
                    <div className="w-100 md:w-96 bg-base-100 shadow-md  m-5">  
                        <figure><img src={portfolio_9} alt="Happy_Senior_website" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                เว็บแอพพลิเคชั่นเพื่อผู้สูงอายุ
                                <div className="badge bg-red-400 text-white">ใหม่</div>
                                </h2>
                                <p>เว็บแอพพลิเคชั่นกระทู้สำหรับผู้สูงอายุที่มีความเหงาและมีที่ปรึกษาคอยให้คำปรึกษาตลอดเวลา ๆ </p>
                                <div className="card-actions justify-end">
                                    <div className="badge bg-red-100">Fashion</div> 
                                    <div className="badge ">Products</div>
                                </div>
                                <div className="card-btn flex  mt-2">
                                    <a href="https://nrc-dev.com/teamnew/index.php" target="_blank" className="btn btn-block  bg-gradient-to-r from-cyan-500 to-blue-500 text-white ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    เข้าชม
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div className="w-100 md:w-96 bg-base-100 shadow-md  m-5">  
                        <figure><img src={portfolio_6} alt="Happy_Senior_website" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                EZ Note โน๊ตง่าย ๆ 
                               
                                </h2>
                                <p>เว็บแอพลิเคชั่นสำหรับสร้างสิ่งที่ต้องทำภายในวันนั้นโดยผ่านการออกแบบในธีม borntodev พัฒนาโดย React JS framework</p>
                                <div className="card-actions justify-end">
                                    <div className="badge bg-red-100">Fashion</div> 
                                    <div className="badge ">Products</div>
                                </div>
                                <div className="card-btn flex  mt-2">
                                    <a href="https://nrc-dev.com/teamnew/index.php" target="_blank" className="btn btn-block  bg-gradient-to-r from-cyan-500 to-blue-500 text-white ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    เข้าชม
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div className="w-100 md:w-96 bg-base-100 shadow-md  m-5">  
                        <figure><img src={portfolio_8} alt="Happy_Senior_website" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                เว็บแอพพลิเคชั่นเพื่อผู้สูงอายุ
                         
                                </h2>
                                <p>ระบบรับฟังความคิดเห็นจากน้อง ๆ ภายในแผนกวิชาเพื่อนำความคิดเห็นต่าง ๆ ส่งไปยังคุณครูภายในแผนกโดยใช้ระบบ Php + Line Notify</p>
                                <div className="card-actions justify-end">
                                    <div className="badge bg-red-100">Fashion</div> 
                                    <div className="badge ">Products</div>
                                </div>
                                <div className="card-btn flex  mt-2">
                                    <a href="https://nrc-dev.com/teamnew/index.php" target="_blank" className="btn btn-block  bg-gradient-to-r from-cyan-500 to-blue-500 text-white ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    เข้าชม
                                    </a>
                                </div>
                            </div>
                    </div>
                   
                  
                </div>
            </div>
        </section>
        </>
    )
}
export default Project