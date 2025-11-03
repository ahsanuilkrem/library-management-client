/* eslint-disable @typescript-eslint/no-explicit-any */


import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBookMutation } from "@/redux/features/Book/book.api";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { bookFormSchema } from "@/types";

// ✅ Define schema with Zod
// const bookFormSchema = z.object({
//   title: z.string().min(1),
//   author: z.string().min(1),
//   isbn: z.string().min(5),
//   genre: z.enum(["FICTION", "NON_FICTION", "SCIENCE", "HISTORY"]),
//   description:z.string(),
//   copies: z.string(),
//   available: z.boolean(),
// });


const AddBook = () => {

  const [createBook] = useCreateBookMutation()

  const form = useForm<z.infer<typeof bookFormSchema>>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: {
      title: "",
      author: "",
      isbn: "",
      genre: "FICTION",
      description: "",
      copies: "",
      available: true,
    },
  });

  const onSubmit = async (values: z.infer<typeof bookFormSchema>) => {
      console.log("Submitted Book:", values);

    const payload = {
      ...values,
      //  isbn: String(values.isbn),
       copies: Number(values.copies),
    };
    console.log("Submitted Book:", payload);

    try {
      const result = await createBook(payload).unwrap();
      if (result.success) {
        toast.success("Book created successfully");
        form.reset();
        //  navigate("/booksPage");
      }
      console.log(result)
    } catch (err: any) {
      toast.error(err.data?.message || "Book Alrader Exist");
      console.error(err)
    }
  


};

return (
  <div className="max-w-xl mx-auto p-6 border rounded-lg bg-white shadow">
    <h2 className="text-2xl font-bold mb-4 text-center">Add New Book</h2>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Book title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Author */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Author name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ISBN */}
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="ISBN number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Genre */}
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="FICTION">Fiction</SelectItem>
                  <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                  <SelectItem value="SCIENCE">Science</SelectItem>
                  <SelectItem value="HISTORY">History</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

         {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Optional description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Copies */}
        <FormField
          control={form.control}
          name="copies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Copies</FormLabel>
              <FormControl>
                <Input placeholder="copies number" type="number"  min={1} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Availability */}
        <FormField
          control={form.control}
          name="available"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(!!checked)}
                />
              </FormControl>
              <FormLabel className="mb-0">Available</FormLabel>
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button type="submit" className="w-full">
          Add Book
        </Button>
      </form>
    </Form>
  </div>
);
}




export default AddBook;