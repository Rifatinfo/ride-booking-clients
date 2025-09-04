import { Button } from "@/components/ui/button";

import { useSetUserAvailabilityMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
const Availability = () => {
    const { data } = useUserInfoQuery(undefined, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    });
    const isAvailable = data?.data?.isAvailable === true || data?.data?.isAvailable === "true";

    const [setAvailability, { isLoading }] = useSetUserAvailabilityMutation();
    const handleToggle = async () => {

        try {
            const result = await setAvailability({ isAvailable: !isAvailable }).unwrap();
            toast.success(result.message);
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    }
    if (isLoading) {
        <p>Loading .....</p>
    }
    return (
        <div className="min-h-screen flex items-center justify-center">

            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                <h1 className="md:text-3xl text-xl font-bold text-gray-800">
                    Manage Your Availability
                </h1>
                <div className="flex items-center gap-4 justify-center mt-10">
                    <p className="text-gray-700">
                        Status:{" "}
                        <span
                            className={isAvailable ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}
                        >
                            {isAvailable ? "OnLine" : "OffLine"}
                        </span>
                    </p>
                    <Button onClick={handleToggle} disabled={isLoading}>
                        {isAvailable ? "Go Offline" : "Go Online"}
                    </Button>
                </div>
            </div>
        </div>
    );

}

export default Availability;