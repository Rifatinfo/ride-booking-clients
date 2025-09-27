import { FormControl, FormField, FormItem, FormLabel, Form } from "@/components/ui/form";
import Call_Police from "../../../assets/sos_button/Call Police.png"
import Emergency_Contact from "../../../assets/sos_button/Emergency Contact.png"
import hare_Live_Location from "../../../assets/sos_button/Share Live Location.png"
import ambulance from "../../../assets/sos_button/ambulance.png"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditProfileMutation,  useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
const Emergency = () => {
    const { data , refetch } = useUserInfoQuery(undefined, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    });
        const [editProfile] = useEditProfileMutation();
    
    const handleShareLocation = () => {
        let mapsLink = "https://www.google.com/maps?q=23.8103,90.4125";

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
                    window.open(mapsLink, "_blank"); // open in new tab
                }
            );
        } else {
            alert("Geolocation is not supported, opening default location.");
            window.open(mapsLink, "_blank"); // fallback link
        }
    };
    const phoneRegex = /^01[3-9]\d{8}$/;

    const registerSchema = z.object({
        emergency_phone: z.string()
            .regex(phoneRegex, { message: "Provide a valid 11-digit Bangladeshi number" }),
    })


    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            emergency_phone: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof registerSchema>) => {
        const userInfo = {
            emergency_phone: data.emergency_phone,
        }
        await editProfile(userInfo);
        toast.success("Emergency number updated");
        refetch();
        console.log(data, userInfo);
    }




    return (
        <div className="mt-[200px] ">
            <div className="flex md:flex-row flex-col justify-around text-center space-y-2">
                <div onClick={() => window.location.href = "tel:999"}>
                    <img className="w-20 h-20 cursor-pointer mx-auto" src={Call_Police} />
                    <p className=" text-xl font-semibold text-red-500 mt-4">Call Police</p>
                </div>
                <div onClick={() => {
                    
                    const phone = data?.data?.emergency_phone;
                    if (!phone) {
                        alert("Emergency number not available");
                        return;
                    }

                    
                    const cleanPhone = phone.toString().replace(/\D/g, "");

                    
                    if (cleanPhone.length !== 11) {
                        alert("Invalid emergency number");
                        return;
                    }

                    // Initiate call
                    window.location.href = `tel:${cleanPhone}`;
                }}
                    className="cursor-pointer text-center">
                    <img className="w-20 h-20 cursor-pointer mx-auto" src={Emergency_Contact} />
                    <p className="text-xl font-semibold text-red-500 mt-4">Emergency Contact</p>
                </div>
                <div
                    onClick={handleShareLocation}
                    className="cursor-pointer text-center"
                >
                    <img
                        className="w-20 h-20 mx-auto"
                        src={hare_Live_Location}
                        alt="Share Live Location"
                    />
                    <p className="text-xl font-semibold text-red-500 mt-4">
                        Share Live Location
                    </p>
                </div>
                <div onClick={() => window.location.href = "tel:999"}
                    className="cursor-pointer text-center">
                    <img className="w-20 h-20 cursor-pointer mx-auto" src={ambulance} />
                    <p className="text-xl font-semibold text-red-500 mt-4">Ambulance Call</p>
                </div>
            </div>

            <div className="max-w-lg mt-20  mb-20 mx-auto flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-2xl p-6 items-center">
                {/* Left: Form */}
                <div className="flex-1 w-full">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col gap-4"
                        >
                            <FormField
                                control={form.control}
                                name="emergency_phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 font-semibold">
                                            Emergency Phone
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter emergency number"
                                                {...field}
                                                className="rounded-xl border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-400"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full bg-red-600 cursor-pointer hover:bg-red-700 text-white rounded-xl py-2"
                            >
                                Update
                            </Button>
                        </form>
                    </Form>
                </div>

                {/* Right: Current Number */}
                <div className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-4 shadow-inner w-full md:w-1/3">
                    <p className="text-sm text-gray-500">Emergency Number</p>
                    <p className="text-lg font-bold text-red-600 mt-1">{data?.data?.emergency_phone}</p>
                </div>
            </div>

        </div>
    );
};

export default Emergency;