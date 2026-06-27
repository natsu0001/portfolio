"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(20, "Message should be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const inputClass = `
w-full
bg-bg
border
border-border

px-4
py-3

text-sm
text-text

placeholder:text-text-3

outline-none

transition-all
duration-300

focus:border-accent
focus:bg-bg-3
`;

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({
  label,
  error,
  children,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="
        text-[11px]
        uppercase
        tracking-[0.25em]
        text-text-3
      "
      >
        {label}
      </label>

      {children}

      {error && (
        <span className="text-red-400 text-xs">
          {error}
        </span>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    console.log(data);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setSubmitted(true);

    reset();
  }

  if (submitted) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
          flex
          flex-col
          items-center
          justify-center

          py-20
          text-center
        "
        >
          <CheckCircle2
            className="text-accent mb-6"
            size={56}
          />

          <h3 className="text-3xl font-semibold mb-3">
            Message Sent
          </h3>

          <p className="text-text-2 max-w-sm">
            Thanks for reaching out.
            I'll get back to you as soon as possible.
          </p>

          <Button
            variant="outline"
            className="mt-10"
            onClick={() => setSubmitted(false)}
          >
            Send Another
          </Button>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field
          label="First Name"
          error={errors.firstName?.message}
        >
          <input
            {...register("firstName")}
            placeholder="John"
            className={cn(
              inputClass,
              errors.firstName &&
                "border-red-400"
            )}
          />
        </Field>

        <Field
          label="Last Name"
          error={errors.lastName?.message}
        >
          <input
            {...register("lastName")}
            placeholder="Doe"
            className={cn(
              inputClass,
              errors.lastName &&
                "border-red-400"
            )}
          />
        </Field>
      </div>

      <Field
        label="Email"
        error={errors.email?.message}
      >
        <input
          type="email"
          {...register("email")}
          placeholder="john@example.com"
          className={cn(
            inputClass,
            errors.email &&
              "border-red-400"
          )}
        />
      </Field>

      <Field
        label="Subject"
        error={errors.subject?.message}
      >
        <input
          {...register("subject")}
          placeholder="Let's build something"
          className={cn(
            inputClass,
            errors.subject &&
              "border-red-400"
          )}
        />
      </Field>

      <Field
        label="Message"
        error={errors.message?.message}
      >
        <textarea
          rows={6}
          {...register("message")}
          placeholder="Tell me about your project..."
          className={cn(
            inputClass,
            "resize-none",
            errors.message &&
              "border-red-400"
          )}
        />
      </Field>

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="
        group
        mt-2
      "
      >
        {isSubmitting
          ? "Sending..."
          : "Send Message"}

        <ArrowUpRight
          size={18}
          className="
          ml-2

          transition-transform

          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
        />
      </Button>
    </form>
  );
}