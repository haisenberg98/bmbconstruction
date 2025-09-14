"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/app/(frontend)/components/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/(frontend)/components/ui/form";
import { Input } from "@/app/(frontend)/components/ui/input";
import { Textarea } from "@/app/(frontend)/components/ui/textarea";

import { toast } from "react-toastify";
import { handleContactUsFormSubmit } from "@/lib/actions";
import { contactFormSchema } from "@/lib/schema";
import type { FieldName, FormFieldType } from "@/lib/types";

export type ContactFormFields = z.infer<typeof contactFormSchema>;

const formFields: FormFieldType = [
  { label: "Name", type: "text", placeholder: "Enter your name", name: "name" as FieldName },
  { label: "Email", type: "email", placeholder: "Enter your email", name: "email" as FieldName },
  { label: "Phone", type: "tel", placeholder: "Enter your phone number", name: "phone" as FieldName },
  { label: "Message", type: "textarea", placeholder: "Enter your message", name: "message" as FieldName },
];

export default function ContactForm() {
  const form = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data: ContactFormFields) => {
    const { message, status } = await handleContactUsFormSubmit(data);

    if (status === "error") {
      if (typeof message === "string") toast.error(message);
      else toast.error("An unexpected error occurred");
      
        return;
    }

    if (typeof message === "string") toast.success(message);
    else toast.success("Your message has been sent successfully");

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6 p-4 md:p-6 lg:p-8">
        {formFields.map((item, index) => (
          <FormField
            key={index}
            control={form.control}
            name={item.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-formText text-xs">{item.label}</FormLabel>
                <FormControl>
                  {item.type === "textarea" ? (
                    <Textarea placeholder={item.placeholder} {...field} />
                  ) : (
                    <Input placeholder={item.placeholder} {...field} />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <div className="flex justify-between pt-2">
          <Button variant="primary" type="submit" text="Submit" />
        </div>
      </form>
    </Form>
  );
}
