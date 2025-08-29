import { CheckCircle, Lock, Mail } from "lucide-react";
import { Form, FormField } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const Subscription = () => {
  const subscribeFormSchema = z.object({
    email: z.email(),
  });

  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof subscribeFormSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Get Full Access to Smart Ride Booking
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-center mt-4 max-w-xl mx-auto">
        Experience hassle-free commuting with our all-in-one ride booking
        platform. From quick bike rides to comfortable car trips and secure
        parcel delivery — everything you need is just a tap away.
      </p>

      {/* Features */}
      <div className="flex flex-col md:flex-row gap-6 mt-8 justify-center">
        <div className="flex items-center gap-2">
          <CheckCircle className="text-orange-500" />
          <div>
            <p className="font-semibold">1000+ Rides</p>
            <p className="text-gray-500 text-sm">Completed daily</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle className="text-orange-500" />
          <div>
            <p className="font-semibold">24/7 Service</p>
            <p className="text-gray-500 text-sm">Anytime, anywhere</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle className="text-orange-500" />
          <div>
            <p className="font-semibold">Safe & Secure</p>
            <p className="text-gray-500 text-sm">Trusted drivers</p>
          </div>
        </div>
      </div>

      {/* Email Form */}
      <Form {...form}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-center bg-white rounded-full shadow-md mt-10 p-1 w-full max-w-lg"
            >
              <Mail className="text-gray-400 ml-4" />
              <input
                type="email"
                {...field}
                placeholder="Enter email address"
                className="flex-1 px-4 py-3 rounded-full outline-none"
                required
              />
              <button
                type="submit"
                className="hidden md:block bg-red-600 text-white font-medium px-6 py-3 rounded-full  transition"
              >
                Submit
              </button>
              <Button className="md:hidden lg:hidden absolute ml-50 rounded-3xl">
                submit
              </Button>
            </form>
          )}
        />
      </Form>

      {/* Footer note */}
      <div className="flex items-center gap-2 mt-4 text-sm text-gray-500 mb-10">
        <Lock size={16} />
        <span>
          Your data is complely secured with us. We don’t share with anyone.
        </span>
      </div>
    </div>
  );
};

export default Subscription;
