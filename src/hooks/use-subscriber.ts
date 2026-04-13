import { useFormik } from "formik";
import { useState } from "react";

interface SubscribeFormValues {
  email: string;
}

type SubscribeStatus =
  | "duplicate"
  | "success"
  | null;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function validateEmail(email: string) {
  const normalizedEmail = normalizeEmail(email);
  return normalizedEmail.length > 0 && EMAIL_REGEX.test(normalizedEmail);
}

export function useSubscriber() {
  const [subscribers, setSubscribers] = useState<string[]>([]);
  const [submitStatus, setSubmitStatus] = useState<SubscribeStatus>(null);

  const formik = useFormik<SubscribeFormValues>({
    initialValues: {
      email: "",
    },
    onSubmit: (values, helpers) => {
      const normalizedEmail = normalizeEmail(values.email);

      if (subscribers.includes(normalizedEmail)) {
        setSubmitStatus("duplicate");
        return;
      }

      setSubscribers((current) => [...current, normalizedEmail]);
      setSubmitStatus("success");
      helpers.resetForm();
    },
  });

  const canSubmit = validateEmail(formik.values.email);

  const clearSubmitStatus = () => {
    setSubmitStatus(null);
  };

  return {
    formik,
    canSubmit,
    submitStatus,
    clearSubmitStatus,
  };
}
