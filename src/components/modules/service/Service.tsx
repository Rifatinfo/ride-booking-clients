import ServiceCard from './ServiceCard';
// import Service_1 from '../../Components/Service/service_1';

const Service = () => {
    const serviceImag = [
        {
            id: 1,
            image: 'https://designingmedia.com/blazin/wp-content/uploads/2023/02/what-we-do-section-overlay.png'
        }
    ];

    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-10 ">
            {/* Left Banner + Card */}
            <div className="relative md:w-1/3 w-full md:px-0 px-7">
                <img className='grayscale contrast-125 rounded-2xl' src="https://img.freepik.com/free-vector/taxi-app-concept_23-2148476451.jpg?ga=GA1.1.13688208.1744212073&semt=ais_hybrid&w=740&q=80" alt="" />
                <div className='md:absolute md:-mt-140 md:ml-70 -mt-24'>
                    <div className='relative w-full max-w-sm h-[500px] text-white overflow-hidden rounded-4xl shadow-lg  '>
                        {/* backgroundImage with red overlay */}
                        <div className='absolute inset-0'>
                            <img src="https://img.freepik.com/premium-photo/bridges-city_1048944-26474601.jpg" className='w-full h-full object-cover ' alt="" />
                            <div className='absolute inset-0 bg-black opacity-60   transition-opacity duration-300'></div>
                        </div>

                        {/* content */}
                        <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                            <div>
                                <p className="uppercase  tracking-wide mb-2">What We Do</p>
                                <h1 className="text-5xl font-bold leading-tight">
                                    Services <br />
                                    <span className="font-normal">We offer</span>
                                </h1>
                                <hr className="my-4 border-1 border-white/50 w-20" />
                                <p className="text-lg text-white/90">
                                    Our ride-sharing services are designed to connect riders and drivers in real time, ensuring affordable and reliable transportation for everyone.
                                </p>
                            </div>

                            {/* <!-- Button --> */}
                            <div className="mt-4">
                                <a href="#" className="bg-red-600 text-white  text-lg font-semibold py-4 px-6 rounded-full shadow  transition-all inline-block">
                                    Get Started →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Swiper Section */}
            <div className="md:w-2/3 w-full min-h-[500px]">
                <div
                    className="w-full h-full py-10 px-4"
                    style={{
                        backgroundImage: `url(${serviceImag[0].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className=''>
                        <ServiceCard/>
                    </div>
                   
                </div>
                
            </div>
        </div>
    );
};

export default Service;