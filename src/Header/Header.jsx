import profile from '../assets/header_pic.jpg'
function Header(){
    return(
        <>
            <section className="header h-screen flex justify-center items-center ">
                <div className="max-w-screen-xl  mx-auto p-4 ">
                    <div className="flex  flex-col-reverse md:flex-row">
                        <div className="title ">
                            <h1 className="text-2xl md:text-3xl lg:text-5xl  text-start  font-bold mt-5"><span className="font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ">สวัสดีครับ</span> ผมแมวน้อย</h1>
                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aliquid numquam cupiditate, exercitationem accusantium nobis ut vero, consectetur repellendus tempore sunt itaque incidunt libero rerum.</p>
                            <div className="flex mt-5">
                                <button className=" btn  text-2xl  md:btn-lg  xl:text-3xl lg:text-3xl w-full md:w-1/2   bg-gradient-to-r from-cyan-500 to-blue-500 transition  text-white ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                ติดต่อ
                                </button>
                            
                            </div>
                            <div className="group-button mt-5 ">
                                <button className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                                <button className="btn btn-circle mx-4 btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                                <button className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className="title-img ">
                            <img src={profile} alt="" />
                        </div>
                    </div>
                        <div className="title-stack mt-5">
                            <p className="text-3xl font-bold">Tech-stack |</p>
                        </div>
                </div>
            </section>
        </>
    )
}
export default Header