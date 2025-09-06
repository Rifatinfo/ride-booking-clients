import { useAllUsersQuery, useSetBlockAndUnBlockMutation } from "@/redux/features/auth/auth.api";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
const AllUsers = () => {
    const { data } = useAllUsersQuery(undefined, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    });
    console.log(data);
    const [updateUser] = useSetBlockAndUnBlockMutation()

    return (
        <div>
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
                                <TableHead className="px-4 py-2 text-left w-1/6">Role</TableHead>
                                <TableHead className="px-4 py-2 text-left w-1/6">Status</TableHead>
                                <TableHead className="px-4 py-2 text-right w-1/6">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data?.data?.map(
                                (item: { userId: string, _id: string; name: string; email: string; status: string, isBlocked: boolean, role: string }) => (
                                    <TableRow
                                        key={item._id}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <TableCell className="px-4 py-2 font-medium">{item.name}</TableCell>
                                        <TableCell className="px-4 py-2">{item.email}</TableCell>
                                        <TableCell className="px-4 py-2">{item.role}</TableCell>
                                        <TableCell className="px-4 py-2">
                                            <span
                                                className={`px-2 py-1 text-xs font-semibold rounded-full
                                                           ${item.isBlocked
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {item.isBlocked ? "Blocked" : "Unblocked"}
                                            </span>

                                        </TableCell>

                                        <TableCell className="px-4 py-2 text-right">


                                            <Button
                                                onClick={() => {
                                                    updateUser({
                                                        userId: item._id,
                                                        isBlocked: !item.isBlocked,
                                                    });
                                                }}
                                                className={item.isBlocked ? "bg-green-500 text-white" : "bg-red-500 text-white"}
                                            >
                                                {item.isBlocked ? "Unblock" : "Block"}
                                            </Button>
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

export default AllUsers;