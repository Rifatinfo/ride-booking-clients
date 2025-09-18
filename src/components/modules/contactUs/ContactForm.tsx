import { Mail, MapPin, Phone } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useContactRequestMutation } from "@/redux/features/contact/contact.api";

const ContactForm = () => {
  const [contactRequest] = useContactRequestMutation();

  const contactFormSchema = z.object({
    name: z.string().min(3, {
      message: "Username must be at least 2 characters.",
    }),
    description: z.string().min(10, {
      message: "description must be at least 10 characters.",
    }),
    email: z.string({ message: "Invalid email address." }),
    phone: z.string().min(11, {
      message: "Must be 11 character"
    })
      .regex(/^\d+$/, { message: "Phone must contain only numbers." }),
    comName: z.string().min(3, {
      message: "Company name must be at least 3 characters.",
    }),
  })

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
      comName: ""
    },
  })
    const {reset} = form;


  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      description: data.description,
      comName: data.comName,
    }
    try {
      const result = await contactRequest(userInfo).unwrap();
      console.log(result);
      toast.success("Form Create Successfully");
      reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
        toast.error("Something Error")
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center mt-10 px-4 py-6">
      {/* heading */}
      <div className="text-center mb-10"></div>

      {/* contact Info */}
      <div className="grid md:grid-cols-3 gap-6 mb-10 w-full max-w-4xl">
        <div className="bg-white shadow rounded-lg flex flex-col items-center justify-center p-6">
          <Phone className="h-8 w-8 text-gray-600 mb-2" />
          <p className="font-medium">+1-316-555-0116</p>
          <p className="font-medium">+1-446-526-0117</p>
        </div>
        <div className="bg-white shadow rounded-lg flex flex-col items-center justify-center p-6">
          <Mail className="h-8 w-8 text-gray-600 mb-2" />
          <p className="font-medium">contact@example.com</p>
          <p className="font-medium">hr@example.com</p>
        </div>
        <div className="bg-white shadow rounded-lg flex flex-col items-center justify-center p-6">
          <MapPin className="h-8 w-8 text-gray-600 mb-2" />
          <p className="font-medium text-center">
            8502 Preston Rd. Ingle, Maine <br /> 98380, USA
          </p>
        </div>
      </div>



      {/* Form */}
      <Form {...form}>
        <div className="bg-white shadow rounded-lg w-full max-w-4xl p-8">
          <h2 className="text-xl font-semibold text-center mb-6">
            Send us a message
          </h2>
          <form onSubmit={form.handleSubmit(onSubmit)} >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium mb-1">Your name</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full border rounded-md p-2 focus:ring-2 focus:ring-red-500 outline-none"
                      />
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
                    <FormLabel className="block text-sm font-medium mb-1">Email address</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border rounded-md p-2 focus:ring-2 focus:ring-red-500 outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium mb-1"> Phone number</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="number"
                        placeholder="Enter your phone number"
                        className="w-full border rounded-md p-2 focus:ring-2 focus:ring-red-500 outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium mb-1"> Company name</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        placeholder="Enter your company name"
                        className="w-full border rounded-md p-2 focus:ring-2 focus:ring-red-500 outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full mb-6">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="block text-sm font-medium mb-1">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Write your message..."
                        className="w-full border rounded-md p-2 h-28 focus:ring-2 focus:ring-red-500 outline-none"
                      ></Textarea>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-medium py-2 rounded-md hover:bg-red-700 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </Form>

    </div>
  );
};

export default ContactForm;
