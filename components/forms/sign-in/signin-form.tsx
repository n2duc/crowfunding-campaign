'use client';

import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

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
import { signInFormSchema, SingInFormValue } from "@/constants/form-schemas";
import { useFormState } from "../../contexts/form-context";

const SignInForm = () => {
  const router = useRouter();
  const { nextStep } = useFormState();

  const form = useForm<SingInFormValue>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: SingInFormValue) => {
    console.log(data);
    if (data) {
      router.push('/');
    }
  }

  return (
    <div className="w-full max-w-[556px] flex flex-col lg:gap-[10px] gap-5 px-5 py-[30px] lg:px-[60px] lg:py-[50px] rounded-[10px] bg-whitish-pure dark:bg-dark-secondary z-20 shadow-sm">
      <div>
        <h1 className="text-text-text1 text-center text-lg lg:text-xl font-semibold leading-normal dark:text-whitish-pure mb-6 lg:mb-[10px]">
          Welcome Back!
        </h1>
        <p className="text-center text-xs text-text-text3 lg:text-sm lg:pb-[10px] mb-6 lg:mb-[10px]">
          Dont have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-primary-500 underline"
          >
            Sign up
          </Link>
        </p>
        <Button variant="outline" className="w-full h-auto bg-transparent py-3 flex items-center gap-[10px] text-base font-semibold text-text-text2 dark:border-dark-stroke dark:text-white">
          <Image src="/Google.svg" alt="logo google" width={24} height={24} className="h-6 w-6" /> Sign in with Google
        </Button>
      </div>
      <Form {...form}>
        <form className="flex flex-col gap-[5px] lg:gap-[10px]" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="inline-block text-sm font-medium pt-2 lg:pt-[10px]">Email *</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="example@gmail.com" className="px-6 py-3 h-auto font-medium" />
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
                <FormLabel className="inline-block text-sm font-medium pt-2 lg:pt-[10px]">Password *</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="Enter password" className="px-6 py-3 h-auto font-medium" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Forgot password */}
          <p onClick={nextStep} className="text-sm font-medium text-primary-500 self-end mb-5 mt-[10px] lg:my-[10px] cursor-pointer">
            Forgot password
          </p>
          <Button type="submit" className="w-full lg:h-auto text-base font-semibold py-3">Sign in</Button>
        </form>
      </Form>
    </div>
  )
}

export default SignInForm;