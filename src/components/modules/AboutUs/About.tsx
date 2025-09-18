import top_banner1 from '../../../assets/images/riderRegister_2.avif'
import MissionVision from './missionVision';
const About = () => {
    return (
        <div>
            <div className="relative mt-[72px]">
                {/* Hero Section */}
                <div className="relative w-full">
                    <div className="relative">
                        <img
                            className="w-full h-[100px] md:h-[200px] object-cover"
                            src={top_banner1}
                            alt="Hero Banner"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                        <h1 className="text-xl md:text-3xl font-extrabold">About Us</h1>
                    </div>
                </div>

                {/* About Section */}
                <div className="md:max-w-7xl md:mx-auto my-20 px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

                        {/* Image Section */}
                        <div className="relative mr-14 md:mr-0 w-full md:w-1/2 flex justify-center">
                            <img
                                className="rounded-lg w-3/4 md:w-full shadow-lg"
                                src="https://static.vecteezy.com/system/resources/previews/005/119/607/non_2x/set-of-businessmen-for-banners-and-presentations-vector.jpg"
                                alt="Victory Day Banner"
                            />

                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2">
                            <section className="py-12">
                                <div className="max-w-3xl">
                                    <h3 className="text-green-600 text-lg font-semibold uppercase">About Us</h3>
                                    <h2 className="text-4xl text-red-500 font-bold text-brown-800 mt-2">
                                        Who We Are – XRide
                                    </h2>

                                    <p className="text-gray-700 mt-4 leading-relaxed text-lg">
                                        Our ride-sharing platform is built on the vision of making transportation safer, smarter, and more accessible for everyone.
                                        We are committed to connecting riders with trusted drivers through a reliable and affordable service that prioritizes both
                                        convenience and safety. With transparent pricing, fair driver earnings, and technology-driven solutions, we aim to reduce
                                        traffic congestion, promote sustainable travel, and improve urban mobility. By focusing on innovation, community, and
                                        responsibility, we work tirelessly to create a transportation system where every journey is efficient, comfortable,
                                        and fair for all.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* mission vision */}
                <MissionVision />
            </div>
        </div>
    );
};

export default About;