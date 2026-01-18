
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Link, useNavigate } from "react-router"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form"
// import Password from "./Password"
// import { useRiderLoginMutation } from "@/redux/features/auth/auth.api"
// import { toast } from "sonner"
// export function RiderLoginForm({
//     className,
//     ...props
// }: React.ComponentProps<"form">) {
//     const navigate = useNavigate();
//     const [riderLogin] = useRiderLoginMutation();
//     const registerSchema = z.object({
//         email: z.email(),
//         password: z.string().min(8, { error: "Password is too short" }),
//         role: z.string()
//     })

//     const form = useForm<z.infer<typeof registerSchema>>({
//         resolver: zodResolver(registerSchema),
//         defaultValues: {
//             email: "",
//             password: "",
//             role: ""
//         },
//     })

//     const onSubmit = async (data: z.infer<typeof registerSchema>) => {
//         try {
//             const res = await riderLogin(data).unwrap();

//             if (res.success) {
//                 toast.error("User Login Successfully");
//                 navigate("/");
//             }
//             console.log(res);


//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         } catch (err : any) {
//             console.log(err);
           
//             if (err?.data?.message === "Incorrect Password") {
//                 toast.error("Incorrect Password");
//                 return;
//             }
//             if (err.status === 400) {
//                 toast.error("Your account is not verified");
//                 navigate("/verify", { state: data.email });
//             }
//             if (err.status === 403) {
//                 toast.error("Your account is Blocked");
//                 navigate("/verify", { state: data.email });
//             }
//         }
//         console.log(data.email);
//     }

//     return (
//         <Form {...form}>
//             <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className={cn("flex flex-col gap-6", className)}
//                 {...props}
//             >
//                 <div className="flex flex-col items-center gap-2 text-center">
//                     <h1 className="text-2xl font-bold">Login to your Rider</h1>
//                     <p className="text-muted-foreground text-sm text-balance">
//                         Enter your email below to Login to your account
//                     </p>
//                 </div>

//                 <div className="grid gap-6">
//                     <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Email</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Email" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />


//                     <div className="flex flex-col gap-2">
//                         <FormLabel>Role</FormLabel>
//                         <Input value="RIDER" readOnly />
//                     </div>

//                     <FormField
//                         control={form.control}
//                         name="password"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Password</FormLabel>
//                                 <FormControl>
//                                     {/* <Input placeholder="Password" {...field} /> */}
//                                     <Password {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />




//                     <Button type="submit" className="w-full">Submit</Button>

//                     <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
//                         <span className="bg-background text-muted-foreground relative z-10 px-2">
//                             Or continue with
//                         </span>
//                     </div>

//                     <Button variant="outline" className="w-full">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                             <path
//                                 d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
//                                 fill="currentColor"
//                             />
//                         </svg>
//                         Login with Google
//                     </Button>
//                 </div>

//                 <div className="text-center text-sm">
//                     Don&apos;t have an account?{" "}
//                     <Link to="/register" className="underline underline-offset-4 cursor-pointer">
//                         Sign Up
//                     </Link>
//                 </div>
//             </form>
//         </Form>
//     )
// }

/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Password from "./Password";
import { useRiderLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

export function RiderLoginForm({ className, ...props }: React.ComponentProps<"form">) {
  const navigate = useNavigate();
  const [riderLogin] = useRiderLoginMutation();

  const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password is too short" }),
    role: z.string(),
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  // Normal submit
  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      const res = await riderLogin(data).unwrap();
      if (res.success) {
        toast.success("User Login Successfully");
        navigate("/");
      }
      console.log(res);
    } catch (err: any) {
      console.log(err);

      if (err?.data?.message === "Incorrect Password") {
        toast.error("Incorrect Password");
        return;
      }
      if (err.status === 400) {
        toast.error("Your account is not verified");
        navigate("/verify", { state: data.email });
      }
      if (err.status === 403) {
        toast.error("Your account is Blocked");
        navigate("/verify", { state: data.email });
      }
    }
    console.log(data.email);
  };

  // Demo login handler
  const handleDemoLogin = async (email: string, password: string, role: "RIDER" | "ADMIN" | "DRIVER") => {
    form.setValue("email", email);
    form.setValue("password", password);
    form.setValue("role", role);

    try {
      const res = await riderLogin({ email, password, role }).unwrap();
      if (res.success) {
        toast.success(`${role} Login Successfully`);
        navigate("/");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Login failed");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to Login to your account
          </p>
        </div>

        <div className="grid gap-6">
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
                  <Input {...field} readOnly />
                </FormControl>
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
                  <Password {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Demo Login Buttons: Admin, Rider, Driver */}
          <div className="grid grid-cols-3 gap-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                handleDemoLogin(
                  "mdrifathossainsinfo@gmail.com",
                  "12345678",
                  "ADMIN"
                )
              }
            >
              Demo Admin
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                handleDemoLogin(
                  "realostyles@gmail.com",
                  "123456789",
                  "RIDER"
                )
              }
            >
              Demo Rider
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={() =>
                handleDemoLogin(
                  "mdrifathossainprogrammingroup@gmail.com",
                  "12345678",
                  "DRIVER"
                )
              }
            >
              Demo Driver
            </Button>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>

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
          <Link to="/register" className="underline underline-offset-4 cursor-pointer">
            Sign Up
          </Link>
        </div>
      </form>
    </Form>
  );
}

