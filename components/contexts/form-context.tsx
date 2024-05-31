'use client';

import React, { createContext, useContext, useState } from "react";

interface IFormContext {
  nextStep: () => void;
  prevStep: () => void;
  step: number;
}

const FormContext = createContext<IFormContext>({
  nextStep: () => {},
  prevStep: () => {},
  step: 1,
});

interface IProps {
  children: React.ReactNode;
}

export function FormProvider({ children }: IProps) {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({});

  function nextStep() {
    setStep((prev) => prev + 1);
  }

  function prevStep() {
    setStep((prev) => prev - 1);
  }

  return (
    <FormContext.Provider value={{ nextStep, prevStep, step }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}