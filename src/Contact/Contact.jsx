function Contact(){
    return(
        <>
             <section className="contact about bg-neutral-100 md:p-10">
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
                        
                     
                        <button type="submit" class="btn btn-block  bg-gradient-to-r from-cyan-500 to-blue-500 text-white "><svg className="h-5 w-5 fill-white" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg> ส่งข้อความ</button>
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