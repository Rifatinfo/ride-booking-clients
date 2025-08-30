
const AdminFeature = () => {
    const adminData = [
        {
            "id": 1,
            "title": "User Management",
            "description": "Manage rider and driver accounts, approvals, and verifications to maintain a secure and verified platform.",
            "icon": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        },
        {
            "id": 2,
            "title": "Ride Management",
            "description": "Monitor active, completed, canceled, or scheduled rides to ensure smooth operations.",
            "icon": "https://cdn-icons-png.flaticon.com/512/2910/2910757.png"
        },
        {
            "id": 3,
            "title": "Pricing & Fare Control",
            "description": "Set dynamic pricing, surge rules, and fare policies to manage platform revenue effectively.",
            "icon": "https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
        },
        {
            "id": 4,
            "title": "Payment & Commission Tracking",
            "description": "Oversee all transactions, track commissions, and manage payouts for drivers and the platform.",
            "icon": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        },
        {
            "id": 5,
            "title": "Analytics Dashboard",
            "description": "Access real-time analytics for rides, revenue, and user activity to make data-driven decisions.",
            "icon": "https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
        },
        {
            "id": 6,
            "title": "Dispute & Complaint Handling",
            "description": "Manage conflicts between drivers and riders and resolve complaints efficiently.",
            "icon": "https://cdn-icons-png.flaticon.com/512/565/565547.png"
        },
        {
            "id": 7,
            "title": "Promotions & Discounts",
            "description": "Create promo codes, referral rewards, and loyalty programs to boost user engagement.",
            "icon": "https://cdn-icons-png.flaticon.com/512/1484/1484853.png"
        },
        {
            "id": 8,
            "title": "Safety & Security Oversight",
            "description": "Monitor SOS alerts, track incidents, and ensure compliance with platform safety standards.",
            "icon": "https://cdn-icons-png.flaticon.com/512/747/747310.png"
        },
        {
            "id": 9,
            "title": "Content & Notification Management",
            "description": "Send announcements, push notifications, and updates to users to keep them informed.",
            "icon": "https://cdn-icons-png.flaticon.com/512/561/561127.png"
        },
        {
            "id": 10,
            "title": "System Settings",
            "description": "Control platform configurations, service regions, and app policies to manage the ecosystem efficiently.",
            "icon": "https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
        }
    ]


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-30 md:px-10 px-7 mb-10 ">
                {adminData.map((service) => (
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

export default AdminFeature;