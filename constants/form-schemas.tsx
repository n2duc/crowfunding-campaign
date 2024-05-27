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

export type SingInFormValue = z.infer<typeof signInFormSchema>;
export type SingUpFormValue = z.infer<typeof signUpFormSchema>;