
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { useEditProfileMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { Link } from "react-router"
const EditProfile = () => {
    const { data, isLoading } = useUserInfoQuery(undefined, {
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
        refetchOnFocus: true,
    });
    const [editProfile] = useEditProfileMutation();

    const editProfileSchema = z.object({
        username: z.string().min(3, { error: "Confirm username is too short" }),
        phone: z.string().min(11, { error: "Confirm phone is too short" }),
    })

    const form = useForm({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            username: "",
            phone: ""
        },
    })
    const { reset } = form;
    if (isLoading) {
        return <p>Loading...</p>;
    }
    const onSubmit = async (data: z.infer<typeof editProfileSchema>) => {
        const userInfo = {
            name: data.username,  
            phone: data.phone,
        };
        try {
            const result = await editProfile(userInfo).unwrap();
            console.log(result);
            toast.success("Successfully Update User");
            reset();
        } catch (err) {
            console.log(err);
        }

        console.log(data, userInfo);
    }

    return (

        <div>
            <h1 className="text-xl text-gray-500 ">Profile Management</h1>

            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-10 mt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                    Profile Information
                </h2>

                <div className="space-y-5">
                    {/* Name */}
                    <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="text-base font-medium text-gray-900">
                            {data?.data?.name || "Unknown"}
                        </p>
                    </div>

                    {/* Phone */}
                    <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2 8.5A6.5 6.5 0 018.5 2H10a2 2 0 012 2v1.5A6.5 6.5 0 0120.5 12V14a2 2 0 01-2 2H17.5A6.5 6.5 0 0111 22.5V21a2 2 0 00-2-2H7.5A6.5 6.5 0 012 12V8.5z"
                                />
                            </svg>
                            <p className="text-sm font-medium text-gray-800">
                                {data?.data?.phone || "N/A"}
                            </p>
                        </div>
                    </div>

                    {/* Emergency Phone */}
                    <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500">Emergency Phone</p>
                        <p className="text-sm font-medium text-red-600">
                            {data?.data?.emergency_phone || "Not set"}
                        </p>

                        <div className="mt-3">
                            <Link
                                to="/rider-emergency-way"
                                id="changeEmergency"
                                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:underline"
                            >
                                Change emergency phone
                                <svg
                                    className="ml-2 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Form {...form} >
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className={cn("flex flex-col gap-6 w-full max-w-md space-y-4 mt-16")}
                    >
                        <div className="grid gap-6">


                            {/* name  */}
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* phone */}
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Phone</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <Button type="submit" className="w-full cursor-pointer">Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default EditProfile;