import { useAdminAnalyticsQuery } from "@/redux/features/ride/ride.api";
type Driver = {
  _id: string;
  driverName: string;
  rides: number;
};
import admin_1 from '../../assets/images/A-1.jpg'
import admin_2 from '../../assets/images/admin_feature.jpg'
import admin_3 from '../../assets/images/d-1.jpeg'

const Analytics = () => {
    const { data } = useAdminAnalyticsQuery(undefined, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    })
    
    return (
        <div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-6">
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={admin_1} />
                    <p className="text-xl font-semibold text-center">Completed Rides: <span className="text-red-500"> {data?.data?.completedRides}</span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src="https://img.freepik.com/premium-psd/financial-growth-success_968957-15914.jpg" />
                    <p className="text-xl font-semibold text-center">Total Revenue: <span className="text-red-500"></span> {data?.data?.totalRevenue}</p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src="https://img.freepik.com/free-vector/red-bar-chart-with-red-arrow-going-up_1308-110053.jpg?t=st=1757154439~exp=1757158039~hmac=11e6dacd8d1d275c597f9902bb7d7d4190adab2b0a88cde39301c52396a2db5e" />
                    <p className="text-center text-xl font-semibold ">Average Fare: <span className="text-red-500"> {data?.data?.averageFare}</span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={admin_2} />
                    <p className="text-xl text-center font-semibold">Total Rides: <span className="text-red-500"> {data?.data?.totalRides}</span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={admin_3} />
                    <p className="text-xl font-semibold text-center">Ongoing Rides: <span className="text-red-500"> {data?.data?.ongoingRides}</span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src="https://img.freepik.com/premium-photo/3d-customer-review-concepts-reviews-stars-with-good-bad-rate-online-feedback-survey-review-concept-trendy-modern-vector-3d-style_839035-1737718.jpg?w=1060" />
                    <p className="text-xl font-semibold text-center">AvgDriver Rating: <span className="text-red-500"> {data?.data?.avgDriverRating}</span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={admin_3} />
                    <p className="text-xl font-semibold text-center">canceled Rides: <span className="text-red-500"> {data?.data?.canceledRides}</span></p>
                </div>

            </div>


            {/* driver info */}
            <div className="bg-white  p-6 rounded-xl overflow-x-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Top Drivers</h2>
                <table className="w-full table-auto border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-200 px-4 py-2 text-left">No</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Driver Name</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Rides</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.topDrivers?.map((driver : Driver, index : number) => (
                            <tr key={index} className="hover:bg-gray-50 transition">
                                <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-200 px-4 py-2 font-semibold text-red-500">
                                    {driver.driverName}
                                </td>
                                <td className="border border-gray-200 px-4 py-2 font-medium text-blue-600">
                                    {driver.rides}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Analytics;