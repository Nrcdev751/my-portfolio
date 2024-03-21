function Contact(){
    return(
        <>
             <section className="about bg-neutral-100 md:p-10">
                <div className="max-w-screen-xl  mx-auto">
                    <div className="grid grid-cols-1 reversed md:grid-cols-2 -order-2 " >
                        <div className="about-describe p-10 bg-white shadow-xl flex justify-center flex-col">
                            <h2 className="text-3xl font-bold mb-5">ติดต่อเรา</h2>
                        <form class="">
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เมลล์ของคุณ</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="เมลล์ของคุณ@email.com" required />
                        </div>
                        <div class="mb-5">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ข้อความของคุณ</label>
                            <textarea cols="10" type="name" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        
                     
                        <button type="submit" class="btn btn-block  bg-gradient-to-r from-cyan-500 to-blue-500 text-white ">ส่งข้อความ</button>
                        </form>

                        </div>
                        <div className="about-pic flex flex-col justify-center bg-[url('./assets/bg-contact.jpg')]  p-10">
                            <h2 className="text-4xl font-bold mb-5 text-white">ติดต่อเรา</h2>
                            <p className="text-2xl text-white">โทร 097-979-8321</p>
                            <p className="text-2xl text-white">อีเมลล์ bem255541@gmail.com</p>
                        </div>
                    </div>
               
                </div>
            </section>
        </>
    )
}
export default Contact 