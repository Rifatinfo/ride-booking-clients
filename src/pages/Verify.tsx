import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useSendOtpMutation, useVerifyOtpMutation } from "@/redux/features/auth/auth.api";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

const Verify = () => {
    const [sendOtp] = useSendOtpMutation();
    const [verifyOtp] = useVerifyOtpMutation();
    const location = useLocation();
    const navigate = useNavigate();
    const [email] = useState(location.state);
    const [confirmed, setConfirmed] = useState(false);

    const [timer, setTimer] = useState(5);
    console.log(location.pathname);
    
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    });

    const handleSendOtp = async () => {
        const toastId = toast.loading("Sending OTP...");
        try {
            console.log("Sending OTP:", { email, name });
            console.log(location.state);
            
            const res = await sendOtp({email : email}).unwrap();
            if (res.success) {
                toast.success("OTP Sent", { id: toastId });
                setConfirmed(true);
                setTimer(120);
            } else {
                toast.error(res.message || "Failed to send OTP", { id: toastId });
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.log(err);
            toast.error(err?.data?.message || "Something went wrong", { id: toastId });
        }
    };

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const toastId = toast.loading("Verifying OTP");
        const userInfo = {
            email,
            otp: data.pin,
        };

        try {
            const res = await verifyOtp(userInfo).unwrap();
            if (res.success) {
                toast.success("OTP Verified 🎉", { id: toastId });
                setConfirmed(true);
                navigate("/");
            } else {
                toast.error(res.message || "Invalid OTP", { id: toastId });
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.log(err);
            toast.error(err?.data?.message || "Verification failed", { id: toastId });
        }
    };


      useEffect(() => {
        if (!email) {
          navigate("/");
        }
      }, [email]);

    useEffect(() => {
        if (!email || !confirmed) {
            return;
        }

        const timerId = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
            console.log("Tick");
        }, 1000);

        return () => clearInterval(timerId);
    }, [email, confirmed]);
    return (
        <div>
            {confirmed ? (<Card>
                <CardHeader>
                    <CardTitle>Verify you email address</CardTitle>
                    <CardDescription>Please enter the 6-digit code we sent to <br /> {email}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>One-Time Password</FormLabel>
                                        <FormControl>
                                            <InputOTP maxLength={6} {...field}>
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormDescription>
                                            <Button
                                                onClick={handleSendOtp}
                                                type="button"
                                                variant="link"
                                                disabled={timer !== 0}
                                                className={cn("p-0 m-0", {
                                                    "cursor-pointer": timer === 0,
                                                    "text-gray-500": timer !== 0
                                                })}
                                            >
                                                Resent OTP : {" "}
                                            </Button>{" "}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full" type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>) : (<Card>
                <CardHeader>
                    <CardTitle className="text-xl">Verify you email address</CardTitle>
                    <CardDescription>Please enter the 6-digit code we sent to <br /> {email}</CardDescription>
                </CardHeader>

                <CardFooter>
                    <Button onClick={handleSendOtp} className="w-full">
                        Confirm
                    </Button>
                </CardFooter>
            </Card>)}

        </div>
    )
};

export default Verify;