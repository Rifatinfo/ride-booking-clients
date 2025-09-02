
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { useAllDriverQuery, useUpdateDriverStatusMutation } from "@/redux/features/driver/driver.api";
import { Button } from "@/components/ui/button";

const ValidDriverCheck = () => {
    const { data } = useAllDriverQuery(undefined, {
        refetchOnFocus: true,
        refetchOnReconnect: true,
    });
    const [updateDriverStatus] = useUpdateDriverStatusMutation();
    console.log(data);

    const displayStatus = data?.isBlocked ? "BLOCKED" : data?.status;
    console.log(displayStatus);

    return (
        <div className="w-full max-w-7xl mx-auto px-5">
            <div className="flex justify-between my-8">
                <h1 className="text-xl font-semibold">Driver Management</h1>
            </div>
            <div className="border border-muted rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-50 dark:bg-gray-900">
                            <TableHead className="px-4 py-2 text-left w-1/4">Name</TableHead>
                            <TableHead className="px-4 py-2 text-left w-1/4">Email</TableHead>
                            {/* <TableHead className="px-4 py-2 text-left w-1/6">IsBlocked</TableHead> */}
                            <TableHead className="px-4 py-2 text-left w-1/6">Status</TableHead>
                            <TableHead className="px-4 py-2 text-right w-1/6">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.data?.map(
                            (item: { _id: string; name: string; email: string; status: string }) => (
                                <TableRow
                                    key={item._id}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <TableCell className="px-4 py-2 font-medium">{item.name}</TableCell>
                                    <TableCell className="px-4 py-2">{item.email}</TableCell>
                                    {/* <TableCell className="px-4 py-2">{data?.isBlocked ? "No" : "Yes"}</TableCell> */}
                                    <TableCell className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 text-xs font-semibold rounded-full
                                               ${item.status === "APPROVED"
                                                    ? "bg-green-100 text-green-700"
                                                    : displayStatus === "BLOCKED"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {item.status}
                                        </span>

                                    </TableCell>
                                    {/* <Select
                                            defaultValue={item.status && item.status || isBlockedCheck && "BLOCKED"}
                                            onValueChange={(value) => {
                                                if (value === "BLOCKED") {
                                                    blockUser({ id: item._id, isBlocked: true });
                                                } else {
                                                    updateDriverStatus({ id: item._id, status: value });
                                                }
                                            }}
                                        >
                                            <SelectTrigger className="w-[150px]">
                                                <SelectValue placeholder="Select Status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="APPROVED">APPROVED</SelectItem>
                                            </SelectContent>
                                        </Select> */}
                                    <TableCell className="px-4 py-2 text-right">


                                        <Button
                                            className="w-[150px]"
                                            onClick={() => {
                                                if (item.status === "PENDING") {
                                                    updateDriverStatus({ id: item._id, status: "APPROVED" });
                                                }
                                            }}
                                        >
                                            {item.status}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
};

export default ValidDriverCheck;