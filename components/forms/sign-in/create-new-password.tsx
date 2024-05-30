import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
  createNewPasswordFormSchema,
  CreateNewPasswordFormValue,
} from "@/constants/form-schemas";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CreateNewPasswordForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<CreateNewPasswordFormValue>({
    resolver: zodResolver(createNewPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: CreateNewPasswordFormValue) => {
    console.log(data);
    setIsSuccess(true);
  };

  return (
    <div className="w-full max-w-[476px] flex flex-col items-start lg:gap-4 gap-[15px] px-5 py-[30px] lg:px-[60px] lg:py-[50px] rounded-[10px] bg-whitish-pure dark:bg-dark-secondary z-20 shadow-sm">
      {!isSuccess ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="w-full space-y-[10px]">
              <h1 className="text-[20px] lg:text-2xl font-bold text-text-text1">
                Create New Password
              </h1>
              <p className="text-text-text4 text-xs lg:text-sm max-w-[300px]">
                Your new password must be different from previous used
                passwords.
              </p>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password*</FormLabel>
                    <FormControl>
                      <Input placeholder="New Password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password*</FormLabel>
                    <FormControl>
                      <Input placeholder="Confirm Password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full text-base font-semibold mt-[30px]"
            >
              Confirm
            </Button>
          </form>
        </Form>
      ) : (
        <>
          <div className="w-full flex flex-col items-center gap-4">
            <Image src="/clap.svg" alt="clap icon" width={46} height={46} className="w-10 h-10 lg:w-11 lg:h-11" />
            <h1 className="text-xl lg:text-2xl font-bold text-center text-text-text1">Password reset successful</h1>
            <p className="text-xs text-text-text4 text-center">You can now use your new password to log in to your account</p>
          </div>
          <Link href="/" className="w-full lg:mt-4 mt-3 bg-primary-500 text-white text-base font-semibold text-center p-[13px] rounded-[10px]">Go to homepage</Link>
        </>
      )}
    </div>
  );
};

export default CreateNewPasswordForm;
