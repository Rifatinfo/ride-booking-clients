import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,

    FormMessage,
} from "@/components/ui/form"
import { useRiderRequestMutation, useSingleRiderRequestQuery } from "@/redux/features/ride/ride.api";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import MapTracking from "./MapTracking";
const RideRequest = () => {
    const [rideRequest] = useRiderRequestMutation();
    const { data } = useSingleRiderRequestQuery(undefined, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    })
    console.log(data);
    const navigate = useNavigate();
    const rideRequestSchema = z.object({
        pickupLocation: z.string(),
        destinationLocation: z.string(),
    })

    const form = useForm<z.infer<typeof rideRequestSchema>>({
        resolver: zodResolver(rideRequestSchema),
        defaultValues: {
            pickupLocation: "",
            destinationLocation: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof rideRequestSchema>) => {
        const userInfo = {
            pickupLocation: data.pickupLocation,
            destinationLocation: data.destinationLocation,

        }
           
        try {

            // Send request
            const result = await rideRequest(userInfo).unwrap();
            console.log(result);

            if (result.success) {
                // Update loading toast to success
                toast.success("Ride Request Sent Successfully");
                navigate("/tracking");
            } else {
                // If API returns success: false
                toast.error("Ride Request Failed");
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.status === 403) {
                toast.error("No Available drives");
            }
            if (error.status === 404) {
                toast.error("No Available drives");
            }
            if (error.data.message === "No Token Received") {
                toast.error("You Are Not LoggedIn");
            }
            if (error.status === 400) {
                toast.error("Something Went Wrong");
            }

            console.log(error);
        }
        console.log(data);
    }
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left: Map */}
            <div className="lg:w-2/3 w-full h-96 lg:h-auto bg-gray-200">
                {/* Replace this div with your actual map component (Google Maps / Leaflet / Mapbox) */}
                {/* <div className="h-full w-full flex items-center justify-center text-gray-500">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187913899!2d90.33728828261802!3d23.780975727977594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1756492630267!5m2!1sen!2sbd" className="w-full min-h-screen" loading="lazy"></iframe>
                </div> */}
                <MapTracking />
            </div>

            {/* Right: Ride Request Form */}
            <div className="lg:w-1/3 w-full bg-white p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Book a Ride</h2>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="pickupLocation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                type="text"
                                                {...field}
                                                placeholder="Enter pickup location"
                                                className="w-full border border-gray-200 bg-gray-200 rounded-md px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="destinationLocation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <input
                                                type="text"
                                                {...field}
                                                placeholder="Enter destination"
                                                className="w-full border border-gray-200 bg-gray-200 rounded-md px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />



                        </div>

                        <div className="flex gap-4 mt-6">
                            <button type="submit" className="flex-1 bg-red-500 text-white py-3 rounded-md cursor-pointer transition">
                                Request now
                            </button>
                            <button className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-md hover:bg-gray-300 transition">
                                Schedule for later
                            </button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default RideRequest;
