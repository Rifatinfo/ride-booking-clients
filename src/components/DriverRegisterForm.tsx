import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"
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
} from "@/components/ui/form"
import Password from "./Password"
import { useDriverRegisterMutation } from "@/redux/features/auth/auth.api"
import { toast } from "sonner"
export function DriverRegisterForm({
    className,
    ...props
}: React.ComponentProps<"form">) {

    const [driverRegister] = useDriverRegisterMutation();

    const registerSchema  = z.object({
          name: z.string().min(2, {error : "Name is too short"}).max(50),
          email : z.email(),
          password : z.string().min(8, {error : "Password is too short"}),
          confirmPassword : z.string().min(8, {error : "Confirm Password is too short"}),
          role : z.string().min(5, {error : "Rider Must Be "})
    })
    .refine((data) => data.password === data.confirmPassword, {
        message : "Password do not match",
        path : ["confirmPassword"],
    })

    const form = useForm({
        resolver: zodResolver(registerSchema ),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword : "",
            role : "DRIVER"
        },
    })

    const onSubmit = async (data : z.infer<typeof registerSchema>) => {
        const userInfo = {
            name : data.name,
            email : data.email,
            password : data.password,
            role : data.role
        }
        try{
            const result = await driverRegister(userInfo).unwrap();
            console.log(result);
            toast.success("Driver Created Successfully");
        }catch(error){
          console.log(error);
          if(error.status === 404){
              toast.error("Invalid Credential");
          }
        }
        console.log(data);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn("flex flex-col gap-6", className)}
                {...props}
            >
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Register to your Rider</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        Enter your email below to Register to your account
                    </p>
                </div>

                <div className="grid gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Role</FormLabel>
                                <FormControl>
                                    <Input readOnly
                                     placeholder="DRIVER" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Password {...field}/>
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
                                    {/* <Input placeholder="confirmPassword" {...field} /> */}
                                     <Password {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    

                    <Button type="submit" className="w-full">Submit</Button>

                    <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                        <span className="bg-background text-muted-foreground relative z-10 px-2">
                            Or continue with
                        </span>
                    </div>

                    <Button variant="outline" className="w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                fill="currentColor"
                            />
                        </svg>
                        Login with Google
                    </Button>
                </div>

                <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link to="/login" className="underline underline-offset-4">
                        Sign Up
                    </Link>
                </div>
            </form>
        </Form>
    )
}
