
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useAllRiderRequestQuery, useUpdateRideStatusMutation } from "@/redux/features/ride/ride.api";
const DriverAcceptRequest = () => {
    const { data } = useAllRiderRequestQuery(undefined);
    console.log(data);
    const [updateRidesStatus] = useUpdateRideStatusMutation();

    return (
        <div>
            <div className="w-full max-w-7xl mx-auto px-5">
                <div className="flex justify-between my-8">
                    <h1 className="text-xl font-semibold">Rider Request Accept</h1>
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
                                <TableHead className="px-4 py-2 text-right w-1/6">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data?.data?.map(
                                (item: { _id: string; driverEarning: string; fare: string; status: string, pickupLocation: string, destinationLocation: string }) => (
                                    <TableRow
                                        key={item._id}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <TableCell className="px-4 py-2">{item.fare}</TableCell>
                                        <TableCell className="px-4 py-2 font-medium">{item.driverEarning}</TableCell>
                                        <TableCell className="px-4 py-2 font-medium">{item.pickupLocation}</TableCell>
                                        <TableCell className="px-4 py-2">{item.destinationLocation}</TableCell>
                                        <TableCell className="px-4 py-2">
                                            <span
                                                className={`px-2 py-1 text-xs font-semibold rounded-full
                                            ${item.status === "APPROVED"
                                                        ? "bg-green-100 text-green-700"
                                                        : item.status === "ACCEPTED"
                                                            ? "bg-blue-100 text-blue-700"
                                                            : item.status === "PICKED"
                                                                ? "bg-purple-100 text-purple-700"
                                                                : item.status === "IN_TRANSIT"
                                                                    ? "bg-yellow-100 text-yellow-700"
                                                                    : item.status === "COMPLETED"
                                                                        ? "bg-green-200 text-green-900"
                                                                        : item.status === "CANCEL_BY_DRIVER"
                                                                            ? "bg-red-200 text-red-800"
                                                                            : "bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </TableCell>


                                        <TableCell className="px-4 py-2 text-right">

                                            <Select
                                                defaultValue={item.status}
                                                onValueChange={(value) => {
                                                    updateRidesStatus({ id: item._id, status: value })
                                                        .unwrap()
                                                        .then((res) => {
                                                            console.log("✅ Updated:", res);
                                                        })
                                                        .catch((err) => {
                                                            console.error("❌ Error:", err);
                                                        });
                                                }}

                                            >
                                                <SelectTrigger
                                                    className="w-[150px]">
                                                    <SelectValue placeholder={item.status} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ACCEPTED">ACCEPTED</SelectItem>
                                                    <SelectItem value="PICKED">PICKED</SelectItem>
                                                    <SelectItem value="IN_TRANSIT">IN_TRANSIT</SelectItem>
                                                    <SelectItem value="COMPLETED">COMPLETED</SelectItem>
                                                    <SelectItem value="CANCEL_BY_DRIVER">CANCEL_BY_DRIVER</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </div>

            </div>
        </div>
    );
};

export default DriverAcceptRequest;
