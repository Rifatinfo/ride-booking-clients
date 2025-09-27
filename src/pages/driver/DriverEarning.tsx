import { useDriverEarningQuery } from "@/redux/features/driver/driver.api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import d_1 from "../../assets/images/d-1.jpeg"
import d_2 from "../../assets/images/d-2.jpg"
import d_3 from "../../assets/images/d-3.webp"
import d_4 from "../../assets/images/d-4.png"
import d_5 from "../../assets/images/d-5.jpg"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
const DriverEarning = () => {
    const { data } = useDriverEarningQuery(undefined, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    });
    console.log(data?.data);
    const data_graph = [
        { name: 'Total Rides', total: data?.data?.totalRides },
        { name: 'Total Earning', total: data?.data?.totalEarnings },
        { name: 'Daily Earning', total: data?.data?.daily },
        { name: 'Weekly Earning', total: data?.data?.weekly },
        { name: 'Monthly Earning', total: data?.data?.monthly },
    ];


    return (
        <div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-5 ">
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={d_1} />
                    <p className="text-3xl font-semibold text-center">Total Rides: <span className="text-red-500"> {data?.data?.totalRides}</span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={d_2} />
                    <p className="text-3xl font-semibold text-center">Earnings: <span className="text-red-500">{data?.data?.totalEarnings}</span> </p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={d_3} />
                    <p className="text-center text-3xl font-semibold ">Daily: <span className="text-red-500">{data?.data?.daily}</span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={d_4} />
                    <p className="text-3xl text-center font-semibold">Weekly: <span className="text-red-500">{data?.data?.weekly}</span></p>
                </div>
                <div className="bg-white shadow-xl py-4 ease-in-out transition aspect-video rounded-xl flex-col items-center justify-center">
                    <img className="w-auto h-30 mx-auto" src={d_5} />
                    <p className="text-3xl font-semibold text-center">Monthly: <span className="text-red-500">{data?.data?.monthly}</span></p>
                </div>
            </div>

            <div className="flex items-center justify-center mt-30">
                <BarChart width={600} height={300} data={data_graph}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="total" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>

            {/* rider history  */}
            <div>
                <div className="w-full max-w-7xl mx-auto px-5">
                    <div className="flex justify-between my-8">
                        <h1 className="text-xl font-semibold text-red-500">Driver History</h1>
                    </div>
                    <div className="border border-muted rounded-lg overflow-hidden">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gray-50 dark:bg-gray-900">
                                    <TableHead className="px-4 py-2 text-left w-1/4">fare</TableHead>
                                    <TableHead className="px-4 py-2 text-left w-1/4">driverEarning</TableHead>
                                    <TableHead className="px-4 py-2 text-left w-1/4">Picked</TableHead>
                                    <TableHead className="px-4 py-2 text-left w-1/6">Destination</TableHead>
                                    <TableHead className="px-4 py-2 text-left w-1/6">Status</TableHead>
                                    
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data?.data?.rides.map(
                                    (item: { _id: string;   riderId: { _id: string; name: string; email: string };  driverEarning: string; fare: string; status: string, pickupLocation: string, destinationLocation: string }) => (
                                        <TableRow
                                            key={item._id}
                                            className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            <TableCell className="px-4 py-2">{item.fare}</TableCell>
                                            <TableCell className="px-4 py-2 font-medium">{item.driverEarning}</TableCell>
                                            <TableCell className="px-4 py-2 font-medium">{item.pickupLocation}</TableCell>
                                            <TableCell className="px-4 py-2">{item.destinationLocation}</TableCell>
                                            <TableCell className="px-4 py-2 bg-green-700 rounded-4xl text-white font-semibold">{item.status}</TableCell>
                                            
                                        </TableRow>
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DriverEarning;