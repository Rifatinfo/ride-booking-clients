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
import Password from "@/components/Password"
import { useChangePasswordMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"
const ProfileManagement = () => {
    const [changePassword] = useChangePasswordMutation();
    const changePasswordSchema = z.object({
        oldPassword: z.string().min(8, { error: "Password is too short" }),
        newPassword: z.string().min(8, { error: "Confirm Password is too short" }),
        confirmPassword: z.string().min(8, { error: "Confirm Password is too short" }),

    })
        .refine((data) => data.newPassword === data.confirmPassword, {
            message: "Password do not match",
            path: ["confirmPassword"],
        })

    const form = useForm({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        },
    })
    const {reset} = form;

    const onSubmit = async (data: z.infer<typeof changePasswordSchema>) => {
        const userInfo = {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        }
        try {
            const result = changePassword(userInfo).unwrap();
            console.log(result);
            toast.success("Successfully Change Password");
            reset();
        } catch (err) {
            console.log(err);
        }

        console.log(data, userInfo);
    }

    return (

        <div>
            <h1 className="text-xl text-gray-500">Change Password</h1>
            <div>
                <Form {...form} >
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className={cn("flex flex-col gap-6 w-full max-w-md space-y-4 mt-16")}
                    >
                        <div className="grid gap-6">
                            <FormField
                                control={form.control}
                                name="oldPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>oldPassword</FormLabel>
                                        <FormControl>
                                            <Password {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>newPassword</FormLabel>
                                        <FormControl>
                                            <Password {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Password {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <Button type="submit" className="w-full">Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default ProfileManagement;