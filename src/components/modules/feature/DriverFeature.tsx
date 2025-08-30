
const DriverFeature = () => {
    const driverData = [

        {
            "id": 1,
            "title": "Driver Onboarding & Verification",
            "description": "Register with required documents, vehicle details, and background checks to ensure a secure and verified driver profile.",
            "icon": "https://cdn-icons-png.flaticon.com/512/847/847969.png"
        },
        {
            "id": 2,
            "title": "Ride Requests",
            "description": "Receive and accept or reject ride requests in real time from nearby riders.",
            "icon": "https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
        },
        {
            "id": 3,
            "title": "Navigation & Directions",
            "description": "Integrated GPS navigation to reach riders efficiently and optimize routes.",
            "icon": "https://cdn-icons-png.flaticon.com/512/684/684908.png"
        },
        {
            "id": 4,
            "title": "Earnings Dashboard",
            "description": "Track daily, weekly, and monthly earnings, including completed trips and total revenue.",
            "icon": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        },
        {
            "id": 5,
            "title": "Ride History",
            "description": "Access detailed information about all completed trips for reference and record-keeping.",
            "icon": "https://cdn-icons-png.flaticon.com/512/2910/2910757.png"
        },
        {
            "id": 6,
            "title": "Driver Ratings",
            "description": "View feedback from riders and maintain service quality based on ratings and reviews.",
            "icon": "https://cdn-icons-png.flaticon.com/512/616/616408.png"
        },
        {
            "id": 7,
            "title": "Availability Toggle",
            "description": "Go online or offline according to your schedule to manage when you accept rides.",
            "icon": "https://cdn-icons-png.flaticon.com/512/992/992700.png"
        },
        {
            "id": 8,
            "title": "In-App Support",
            "description": "Report issues and get assistance from the support team directly through the app.",
            "icon": "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
        },
        {
            "id": 9,
            "title": "Incentives & Bonuses",
            "description": "Track special offers, peak-hour earnings, and bonus incentives to maximize your revenue.",
            "icon": "https://cdn-icons-png.flaticon.com/512/1484/1484853.png"
        },
        {
            "id": 10,
            "title": "Safety Tools",
            "description": "Use emergency contact, route tracking, and rider verification features for a secure driving experience.",
            "icon": "https://cdn-icons-png.flaticon.com/512/747/747310.png"
        }
    ]


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-30 md:px-10 px-7 mb-10 ">
                {driverData.map((service) => (
                    <div>
                        {/* slider */}
                        <div
                            className="max-w-lg bg-white rounded-2xl shadow-xl p-6 
                                cursor-pointer border-2 border-transparent 
                                hover:border-red-700 hover:border-2 
                                transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <img
                                    src={service.icon}
                                    alt="Web Dev Icon"
                                    className="w-10 h-10"
                                />
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                                {service.title}
                            </h2>

                            {/* Description */}
                            <p className="text-gray-500  mb-4">
                                {service.description}
                            </p>

                            {/* Read More */}
                            <div className="text-orange-500 font-semibold text-sm cursor-pointer inline-flex items-center group">
                                Read More
                                <span className="ml-1 transition-transform group-hover:translate-x-1 duration-200">
                                    ▢
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DriverFeature;