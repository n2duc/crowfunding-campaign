import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { useFormState } from "../../contexts/form-context";

import { ChevronLeft } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { OTPCodeFormValue, otpCodeSchema } from "@/constants/form-schemas";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const VerificationForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { prevStep, nextStep } = useFormState();

  const form = useForm<OTPCodeFormValue>({
    resolver: zodResolver(otpCodeSchema),
    defaultValues: {
      otp: "",
    },
  })

  const onSubmit = (data: OTPCodeFormValue) => {
    console.log(data)
    setIsSuccess(true);
  }
  return (
    <div className="w-full max-w-[455px] flex flex-col items-start lg:gap-4 gap-5 px-5 py-[30px] lg:px-[60px] lg:py-[50px] rounded-[10px] bg-whitish-pure dark:bg-dark-secondary z-20 shadow-sm">
      {isSuccess ? (
        <>
          <div className="w-full flex flex-col items-center gap-4">
            <Image src="/award.svg" alt="clap icon" width={46} height={46} className="w-10 h-10 lg:w-11 lg:h-11" />
            <h1 className="text-xl lg:text-2xl font-bold text-center text-text-text1 dark:text-white">Congratulations!</h1>
            <p className="text-xs text-text-text4 dark:text-text-text3 text-center">Congratulations!  You have successfully completed all of the steps for this verification process.</p>
          </div>
          <Link href="/" className="w-full lg:mt-4 mt-3 bg-primary-500 text-white text-base font-semibold text-center p-[13px] rounded-[10px]">Go to homepage</Link>
        </>
      ) : (
        <Form {...form}>
          <div className="">
            <h1 className="text-2xl font-bold text-text-text1 dark:text-white">Email Verification</h1>
            <div className="mt-[10px] lg:mt-5">
              <p className="text-sm text-text-text4 dark:text-text-text3">Please Enter the OTP you receive to</p>
              <p className="text-sm text-text-text2 font-medium dark:text-white">hellouihut@gmail.com</p>
            </div>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-[30px] lg:space-y-5">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={4} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm text-secondary-300 font-semibold cursor-pointer">Resent OTP</p>
            <Button type="submit" className="w-full text-base font-semibold">Confirm</Button>
            <div className="flex items-center gap-[10px] text-secondary-300 font-semibold text-sm p-2 cursor-pointer" onClick={prevStep}>
              <ChevronLeft className="h-5 w-5" /> Back to register
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}

export default VerificationForm;