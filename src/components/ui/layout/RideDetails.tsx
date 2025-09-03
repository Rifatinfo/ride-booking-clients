import { useSingleRiderRequestQuery } from "@/redux/features/ride/ride.api";

const RideDetails = () => {

    const { data } = useSingleRiderRequestQuery(undefined)
    console.log(data);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 my-4 border border-gray-200 dark:border-gray-700">
                {/* Ride Status */}
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Requested: {new Date(data?.data.requestedAt).toLocaleString()}
                    </span>
                    <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${data?.data.status === "REQUESTED"
                                ? "bg-yellow-200 text-yellow-800"
                                : data?.data.status === "IN_TRANSIT"
                                    ? "bg-blue-200 text-blue-800"
                                    : data?.data.status === "COMPLETED"
                                        ? "bg-green-200 text-green-800"
                                        : "bg-gray-200 text-gray-800"
                            }`}
                    >
                        {data?.data.status}
                    </span>
                </div>

                {/* Pickup & Destination */}
                <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Pickup:</span> {data?.data.pickupLocation}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                        <span className="font-semibold">Destination:</span>{" "}
                        {data?.data.destinationLocation}
                    </p>
                </div>

                {/* Fare Info */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                            Fare: ${data?.data.fare}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Driver earning: ${data?.data.driverEarning}
                        </p>
                    </div>
                </div>

                {/* Driver Info */}
                {data?.data.driver && (
                    <div className="flex items-center space-x-4 mt-4">
                        <img
                            src={data?.data.driver.profileImage || "https://img.freepik.com/premium-vector/print_1309087-169.jpg"}
                            alt={data?.data.driver.name}
                            className="w-12 h-12 rounded-full object-cover "
                        />
                        <div>
                            <p className="text-gray-800 dark:text-gray-200 font-semibold">
                                {data?.data.driver.name}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                {data?.data.driver.email}
                            </p>
                            {data?.data.driver.phone && (
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    {data?.data.driver.phone}
                                </p>
                            )}
                            {data?.data.driver.vehicleNumber && (
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    Vehicle: {data?.data.driver.vehicle}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RideDetails;