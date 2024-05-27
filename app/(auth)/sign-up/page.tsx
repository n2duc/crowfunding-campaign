'use client';

import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { signUpFormSchema, SingUpFormValue } from "@/constants/form-schemas";


export default function SignUpPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const form = useForm<SingUpFormValue>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: SingUpFormValue) => {
    console.log(data);
  }

  return (
    <div className="my-[60px] w-full max-w-[556px] flex flex-col lg:gap-[10px] gap-5 px-5 py-[30px] lg:px-[60px] lg:py-[50px] rounded-[10px] bg-whitish-pure dark:bg-dark-secondary z-20 shadow-sm">
      <div>
        <h1 className="text-text-text1 text-center text-lg lg:text-xl font-semibold leading-normal dark:text-whitish-pure mb-6 lg:mb-[10px]">
          Sign Up
        </h1>
        <p className="text-center text-xs text-text-200 lg:text-sm dark:text-text-200 lg:pb-[10px] mb-6 lg:mb-[10px]">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-primary-500 underline"
          >
            Sign in
          </Link>
        </p>
        <Button variant="outline" className="w-full h-auto py-3 flex items-center gap-[10px] text-base font-semibold text-text-text2">
          <Image src="/Google.svg" alt="logo google" width={24} height={24} className="h-6 w-6" /> Sign in with Google
        </Button>
      </div>
      <Form {...form}>
        <form className="flex flex-col gap-[5px] lg:gap-[10px]" onSubmit={form.handleSubmit(onSubmit)}>
          <p className="lg:p-[10px] text-center text-xs lg:text-sm text-text-text2 dark:text-whitish-pure">Or sign up with email</p>
          <FormField 
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="inline-block text-text-text3 text-sm dark:text-text-text2 font-medium pt-2 lg:pt-[10px]">Email *</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="Jhon Doe" className="px-6 py-3 h-auto placeholder:text-text-text4 font-medium text-text-text1" />
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
                <FormLabel className="inline-block text-text-text3 text-sm dark:text-text-text2 font-medium pt-2 lg:pt-[10px]">Email *</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="example@gmail.com" className="px-6 py-3 h-auto placeholder:text-text-text4 font-medium text-text-text1" />
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
                <FormLabel className="inline-block text-text-text3 text-sm dark:text-text-text2 font-medium pt-2 lg:pt-[10px]">Password *</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="Enter password" className="px-6 py-3 h-auto placeholder:text-text-text4 font-medium text-text-text1" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-start space-x-5 my-3">
            <Checkbox id="terms1" className="mt-1" />
            <label
              htmlFor="terms1"
              className="lg:text-sm text-xs font-normal leading-normal text-text-text2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the <Link href="/tearms" className="text-secondary-400 underline">Tearms of Use</Link> and have read and understand the <Link href="/policy" className="text-secondary-400 underline">Privacy policy</Link>.
            </label>
          </div>
          <Button type="submit" className="w-full lg:h-auto text-base font-semibold py-3">Sign in</Button>
        </form>
      </Form>
    </div>
  )
}