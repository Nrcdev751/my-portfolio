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
                                    <div className="badge bg-red-100">PHP</div> 
                                    <div className="badge ">Bootstrap</div>
                                </div>
                                <div className="card-btn flex  mt-2">
                                    <a href="https://nrc-dev.com/teamnew/index.php" target="_blank" className="btn btn-block  bg-gradient-to-r from-cyan-500 to-blue-500 text-white ">
                                    <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                                   
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
                                    <div className="badge bg-red-100">React</div> 
                                </div>
                                <div className="card-btn flex  mt-2">
                                    <a href="https://complete-to-do-list-app.vercel.app/" target="_blank" className="btn btn-block  bg-gradient-to-r from-cyan-500 to-blue-500 text-white ">
                                    <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
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
                                    <div className="badge bg-red-100">PHP</div> 
                                    <div className="badge ">Bootstrap</div>
                                </div>
                                <div className="card-btn flex  mt-2">
                                    <a href="https://nrc-dev.com/faq.php" target="_blank" className="btn btn-block  bg-gradient-to-r from-cyan-500 to-blue-500 text-white ">
                                    <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
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