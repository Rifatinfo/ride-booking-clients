import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SingleImageUploader from "@/components/ui/SingleImageUploader";


import { Textarea } from "@/components/ui/textarea";

import { useForm,   type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";


const AddTestimonial = () => {

  
 
  const form = useForm({
    defaultValues: {
      name: "",
      division: "",
      description: "",
      profession : ""
    },
  });
  const handleSubmit : SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    toast.success("Add Review Successfully")
  };
  return (
    <div className="w-full max-w-4xl mx-auto px-5 mt-16  mb-10">
          <h1 className="text-xl md:text-3xl lg:text-4xl text-red-500  text-center font-semibold mt-6 mb-6">Add Your Review</h1>
      <Card>
        <CardHeader>
          <CardTitle>Add Testimonial</CardTitle>
          <CardDescription>Add a new Testimonial to the system</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="add-tour-form"
              className="space-y-5"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profession</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />



              <div className="md:flex md:flex-row  flex-col gap-5 items-stretch">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="md:flex-1">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="h-[205px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="md:flex-1 mt-5">
                  <SingleImageUploader/>
                </div>
              </div>
              <div className="border-t border-muted w-full "></div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" form="add-tour-form">
            Create Review
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddTestimonial;
