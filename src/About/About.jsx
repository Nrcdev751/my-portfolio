import profile from '../assets/about-profile.jpeg'
function About (){
    return(
        <>
            <section className="about bg-neutral-100 p-10">
                <div className="max-w-screen-xl  mx-auto object-fit">
                    <div className="grid grid-cols-1 reversed md:grid-cols-2 -order-2 " >
                        <div className="about-describe p-10 bg-white">
                            <h2 className="text-5xl font-bold">เกี่ยวกับผม</h2>
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eligendi ab vel rerum esse enim, fugit, distinctio hic, temporibus nisi odit repellendus ducimus! Iste mollitia asperiores provident? Consequatur, delectus rem?</p>
                        </div>
                        <img src={profile} className="w-full aspect-[5/3] -order-1 md:order-last " alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default About