
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
import { useEditProfileMutation } from "@/redux/features/auth/auth.api"
const EditProfile = () => {
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

    const onSubmit = async (data: z.infer<typeof editProfileSchema>) => {
        const userInfo = {
            name: data.username,  // must match backend field
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
            <h1 className="text-xl text-gray-500">Profile Management</h1>
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