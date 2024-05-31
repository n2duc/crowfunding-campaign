'use client';

import { useFormState } from "@/components/contexts/form-context";
import SignUpForm from "@/components/forms/sign-up/signup-form";
import VerificationForm from "@/components/forms/sign-up/verification-form";

function FormRender() {
  const { step } = useFormState();
  console.log(step);

  switch (step) {
    case 1:
      return <SignUpForm />;
    case 2:
      return <VerificationForm />;
    case 3:
      return null;
  }
}
export default function SignUpPage() {
  return (
    <>
      <FormRender />
    </>
  )
}