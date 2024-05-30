'use client';

import { FormProvider, useFormState } from "@/components/contexts/form-context";
import CreateNewPasswordForm from "@/components/forms/sign-in/create-new-password";
import ForgotPasswordForm from "@/components/forms/sign-in/forgot-password-form";
import SignInForm from "@/components/forms/sign-in/signin-form";

function FormRender() {
  const { step } = useFormState();
  console.log(step);

  switch (step) {
    case 1:
      return <SignInForm />;
    case 2:
      return <ForgotPasswordForm />;
    case 3:
      return <CreateNewPasswordForm />;
    case 4:
      return null;
  }
}

export default function SignInPage() {

  return (
    <>
      <FormProvider>
        <FormRender />
      </FormProvider>
    </>
  )
}