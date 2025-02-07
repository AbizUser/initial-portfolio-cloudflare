"use client"

import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormField,
  FormMessage
} from "../ui/form";
import React, { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import useMailForm from "@/app/hooks/useMailForm";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function MailForm() {
 const {form, onSubmit} = useMailForm();

 useEffect(() => {
  if (form.formState.isSubmitSuccessful) {
    toast.success("メール送信に成功しました。");
  }
 }, [form.formState.isSubmitSuccessful]);

  return (
    <Form {...form}>
      <ToastContainer/>
      <form
      onSubmit={form.handleSubmit(onSubmit)} 
        className="container flex-col gap-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="UserName" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>MailAddress</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Content" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field: { value, onChange, ...fieldProps } }) => (
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
            <FormItem>
              <FormLabel>Profile Picture</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  {...fieldProps}
                  accept="image/*"
                  onChange={(event) => {
                    onChange(event.target.files && event.target.files);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? <ClipLoader/>: "Submit"}
          {/*送信中に表示をLoadingにする。 */}
        </Button>
      </form>
    </Form>
  );
}