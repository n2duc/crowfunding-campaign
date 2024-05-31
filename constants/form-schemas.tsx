import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

export const signUpFormSchema = z.object({
  fullname: z.string().min(3, { message: "Fullname must be at least 3 characters" }),
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

export const otpCodeSchema = z.object({
  otp: z.string().min(4, {
    message: "OTP must be at least 4 characters.",
  }),
})

export const createNewPasswordFormSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords do not match.",
      path: ["confirmPassword"],
    });
  }
})

export type SingInFormValue = z.infer<typeof signInFormSchema>;
export type SingUpFormValue = z.infer<typeof signUpFormSchema>;
export type OTPCodeFormValue = z.infer<typeof otpCodeSchema>;
export type CreateNewPasswordFormValue = z.infer<typeof createNewPasswordFormSchema>;