import { useState } from "react";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router";
import { Button } from "../button";
import UserMenu from "@/components/user-menu";
import Logo from "@/assets/icon/Logo";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
// import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
// import { useAppDispatch } from "@/redux/hook";
// import { toast } from "sonner";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
    const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
    const { data, isLoading } = useUserInfoQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });
    console.log(data);
    
    //   const [logout] = useLogoutMutation();
    //   const dispatch = useAppDispatch();
    const services = [
        { name: "Bike", desc: "Become a Rider", img: "https://pathao.com/wp-content/themes/webpathao/assets/images/menu/rides.png?v=26.4.20" },
        { name: "Car", desc: "Travel in Comfort", img: "https://pathao.com/wp-content/themes/webpathao/assets/images/menu/cars.png?v=26.4.20" },
        { name: "Food", desc: "Fastest Food ", img: "https://pathao.com/wp-content/themes/webpathao/assets/images/menu/courier.png?v=26.4.20" },
        { name: "Courier", desc: "Save Rental", img: "https://pathao.com/wp-content/themes/webpathao/assets/images/rental-min.png?v=28.4.20" },
        { name: "Parcel", desc: "Delivery On Time", img: "https://pathao.com/wp-content/themes/webpathao/assets/images/menu/parcel.png?v=26.4.20" },
        { name: "Shopping", desc: "Mordan Shop style", img: "https://pathao.com/wp-content/themes/webpathao/assets/images/menu/shop.png?v=26.4.20" },
    ];

    const moreMenu = [
        "About Us",
        "Rentals NEW",
        "Press Releases",
        "Press Coverage",
        "Press Kit",
        "for Business",
        "Pay Later",
    ];

    if (isLoading) return <p>Loading.........</p>;
    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
            <div className="flex items-center justify-between py-4 md:px-10 px-7">
                {/* Logo */}
                <div className="font-bold text-2xl cursor-pointer text-red-600">
                    <Logo />
                </div>

                {/* Desktop & Mobile Links */}
                <ul
                    className={`md:flex md:items-center absolute md:static bg-white w-full   md:w-auto left-0 md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? "top-16" : "top-[-100vh]"
                        }`}
                >
                    <Link
                        to="/"
                        className="text-gray-800 hover:text-red-600 font-medium duration-300 text-lg"
                    >
                        HOME
                    </Link>
                    
                    
                    {/* Services Mega Menu (Desktop) */}
                    <li className="md:ml-10 text-lg md:my-0 my-4 relative group hidden md:block">

                        <Link
                            to="#"
                            className="flex items-center text-gray-800 hover:text-red-600 font-medium duration-300"
                        >
                            SERVICES
                            <RiArrowDropDownLine className="text-3xl" />
                        </Link>

                        <div className="absolute left-0 top-full hidden group-hover:grid grid-cols-3 gap-6 w-[720px] bg-white shadow-lg rounded-xl p-6">
                            {services.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-red-50 cursor-pointer transition"
                                >
                                    <img src={item.img} alt={item.name} className="w-10 h-10" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 hover:text-red-600">
                                            {item.name}
                                        </h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </li>

                    {/* Services (Mobile Collapsible) */}
                    <li className="md:hidden my-3 ">
                        <button
                            onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                            className="w-full py-2  text-lg text-gray-800 font-medium flex justify-start items-center"
                        >
                            <span>Services</span>
                            <RiArrowDropDownLine className="text-2xl" />
                        </button>

                        {mobileServiceOpen && (
                            <div className="pl-4 mt-2 space-y-3">
                                {services.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <img src={item.img} alt={item.name} className="w-6 h-6" />
                                        <span className="text-gray-700">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>

                    {/* More Dropdown (Desktop) */}
                    <li className="md:ml-10 text-lg md:my-0 my-4 relative group hidden md:block">
                        <Link
                            to="#"
                            className="text-gray-800 flex items-center hover:text-red-600 font-medium duration-300 text-lg"
                        >
                            MORE  <RiArrowDropDownLine className="text-3xl" />
                        </Link>
                        <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white shadow-lg rounded-lg p-3">
                            {moreMenu.map((item, i) => (
                                <Link
                                    key={i}
                                    to="#"
                                    className="block px-3 py-2 font-medium rounded-md text-gray-700 hover:bg-red-50 hover:text-red-600"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </li>

                    {/* More (Mobile Collapsible) */}
                    <li className="md:hidden my-3">
                        <button
                            onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                            className="w-full  text-lg text-left text-gray-800 font-medium flex justify-start items-center"
                        >
                            MORE <RiArrowDropDownLine className="text-3xl" />
                        </button>
                        {mobileMoreOpen && (
                            <div className="pl-4 mt-2 space-y-2">
                                {moreMenu.map((item, i) => (
                                    <Link
                                        key={i}
                                        to="#"
                                        className="block text-gray-700 hover:text-red-600"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>

                    {/* Help & Contact */}
                    <li className="md:ml-10 text-lg md:my-0 my-4">
                        <a href="/ride" className="text-gray-800 font-medium hover:text-red-600 duration-300 text-lg">
                        FIND RIDE
                        </a>
                    </li>
                    <li className="md:ml-10 text-lg md:my-0 my-4">
                        <Link to="/contact" className="text-gray-800 font-medium hover:text-red-600 duration-300 text-lg">
                            CONTACT
                        </Link>
                    </li>
                    <li className="md:ml-10 text-lg md:my-0 my-4">
                        <Link to="/faq" className="text-gray-800 font-medium hover:text-red-600 duration-300 text-lg">
                            FAQ
                        </Link>
                    </li>
                    <li className="md:ml-10 text-lg md:my-0 my-4">
                        <Link to="/feature" className="text-gray-800 font-medium hover:text-red-600 duration-300 text-lg">
                            FEATURES
                        </Link>
                    </li>
                    {/* <li className="md:ml-10 text-lg md:my-0 my-4">
                        <Link to="/Tracking" className="text-gray-800 font-medium hover:text-red-600 duration-300 text-lg">
                            TRACKING
                        </Link>
                    </li> */}

                    {/* Mobile button only */}
                    <Link to="/register"><Button className="md:hidden mt-3 mb-40 bg-red-600 hover:bg-red-700">
                       SIGN UP
                    </Button></Link>
                </ul>

                {/* Right side controls */}
                <div className="flex items-center gap-4">
                    {/* Desktop button */}




                    {/* Profile Avatar */}
                    {
                        data?.data?.email ? <UserMenu  /> : <Link to="/register"><Button className="cursor-pointer hidden md:block bg-red-600 hover:bg-red-700">
                            Sign Up
                        </Button></Link>
                    }

                    {/* Mobile menu toggle */}
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-3xl cursor-pointer md:hidden text-red-600 relative"
                    >
                        {open ? <IoClose /> : <IoMenuSharp />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
