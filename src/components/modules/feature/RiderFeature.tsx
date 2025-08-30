
const RiderFeature = () => {
    const riderData = [
        {
            "id": 1,
            "title": "User Registration & Profile",
            "description": "Create and manage your account easily, update personal details, and verify your identity for a secure experience.",
            "icon": "https://cdn-icons-png.flaticon.com/512/456/456212.png"
        },
        {
            "id": 2,
            "title": "Ride Booking",
            "description": "Request rides instantly by entering pickup and drop-off locations for a smooth and quick booking process.",
            "icon": "https://cdn-icons-png.flaticon.com/512/854/854878.png"
        },
        {
            "id": 3,
            "title": "Ride Options",
            "description": "Choose from economy, premium, or shared rides to match your budget and comfort level.",
            "icon": "https://cdn-icons-png.flaticon.com/512/3202/3202926.png"
        },
        {
            "id": 4,
            "title": "Fare Estimates",
            "description": "Get upfront fare estimates before confirming your ride so you know exactly what to expect.",
            "icon": "https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
        },
        {
            "id": 5,
            "title": "Real-Time Tracking",
            "description": "Track your driver’s location and estimated arrival time in real-time through the app.",
            "icon": "https://cdn-icons-png.flaticon.com/512/854/854894.png"
        },
        {
            "id": 6,
            "title": "In-App Payments",
            "description": "Pay easily with cash, credit/debit cards, or digital wallets for a hassle-free experience.",
            "icon": "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
        },
        {
            "id": 7,
            "title": "Ride History",
            "description": "Access all your past rides, view receipts, and manage invoices in one place.",
            "icon": "https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
        },
        {
            "id": 8,
            "title": "Ratings & Reviews",
            "description": "Rate drivers and share feedback to improve the overall ride-sharing experience.",
            "icon": "https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
        },
        {
            "id": 9,
            "title": "Safety Features",
            "description": "Stay safe with SOS button, trip sharing with family/friends, and verified driver information.",
            "icon": "https://cdn-icons-png.flaticon.com/512/3143/3143636.png"
        },
        {
            "id": 10,
            "title": "Ride Scheduling",
            "description": "Pre-book rides in advance for your important trips and travel with peace of mind.",
            "icon": "https://cdn-icons-png.flaticon.com/512/3135/3135683.png"
        }
    ]

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-30 md:px-10 px-7 mb-10 ">
                {riderData.map((service) => (
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

export default RiderFeature;