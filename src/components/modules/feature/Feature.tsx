import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import admin from "../../../assets/images/admin_feature.jpg"
import rider from "../../../assets/images/Driver_feature.jpg"
import driver from "../../../assets/images/Rider_features.jpg"
const Feature = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div>
            <div className="max-w-7xl mx-auto md:p-0 px-2 mt-30">
                {/* Rider */}
                <div className="flex flex-col md:flex-row items-center justify-between  py-12 ">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-lg"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#ce2d2d] to-red-600 text-transparent 
                   bg-clip-text"
                        >
                            Rider Features
                        </motion.h2>
                        <p className="mt-4 text-gray-700">
                            Riders enjoy a seamless travel experience with <span className="font-semibold text-[#C73450]">XRider</span>.
                            From booking rides to ensuring safety, our platform makes commuting smarter and more reliable.
                        </p>

                        {/* Learn More Button */}
                        <Link to="/feature/rider-feature"> <button className="mt-6 text-red-500 font-semibold text-lg relative group">
                            View More
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                        </button></Link>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src={rider}
                            alt="Why Choose Us"
                            className="w-full md:w-[400px] rounded-lg"
                        />
                    </motion.div>
                </div>
                {/* Driver */}
                <div className="flex flex-col md:flex-row items-center justify-between  py-12">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src={driver}
                            alt="Our Team"
                            className="w-full md:w-[400px] rounded-lg"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-lg"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#ce2d2d] to-red-600 text-transparent 
                   bg-clip-text"
                        >
                            Driver Features
                        </motion.h2>
                        <p className="mt-4 text-gray-700">
                            Our driver-first approach at <span className="font-semibold text-[#C73450]">XRider</span> empowers drivers
                            with tools to maximize earnings while delivering excellent service.
                        </p>

                        {/* Learn More Button */}
                        <Link to="/feature/driver-feature">
                            <button className="mt-6 text-[#DD0429] font-semibold text-lg relative group">
                                View More
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C73450] transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        </Link>
                    </motion.div>
                </div>
                {/*Admin */}
                <div className="flex flex-col md:flex-row items-center justify-between  py-12 ">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-lg"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-2xl font-extrabold md:text-5xl lg:text-4xl 
                   bg-gradient-to-r from-[#ce2d2d] to-red-600 text-transparent 
                   bg-clip-text"
                        >
                            Admin Features
                        </motion.h2>
                        <p className="mt-4 text-gray-700">
                            With <span className="font-semibold text-[#C73450]">XRider</span>, admins can manage the entire ecosystem
                            effectively, ensuring smooth operations and user satisfaction.
                        </p>

                        {/* Learn More Button */}
                        <Link to="/feature/admin-feature">
                            <button className="mt-6 text-red-500 font-semibold text-lg relative group">
                                View More
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src={admin}
                            alt="Why Choose Us"
                            className="w-full md:w-[400px] rounded-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Feature;