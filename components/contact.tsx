"use client";
import React, { useEffect, useState } from "react";
import { Field, Form, Formik, FormikErrors, useFormikContext } from "formik";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { LuArrowUpRight, LuDownload, LuMail } from "react-icons/lu";
import { useActiveInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { contact } from "@/lib/data";
import SubmitButton from "./submit-button";

type ContactFormValues = { senderEmail: string; message: string };
const INITIAL_VALUES: ContactFormValues = { senderEmail: "", message: "" };

const validate = (v: ContactFormValues) => {
  const errors: FormikErrors<ContactFormValues> = {};
  if (!/^\S+@\S+\.\S+$/.test(v.senderEmail.trim()))
    errors.senderEmail = "Write an email address with an @, so I can reply.";
  if (!v.message.trim()) errors.message = "Write a message before sending.";
  return errors;
};

const channels = [
  { label: contact.email, href: `mailto:${contact.email}`, icon: LuMail },
  { label: "LinkedIn", href: contact.linkedin, icon: BsLinkedin, external: true },
  { label: "GitHub", href: contact.github, icon: BsGithub, external: true },
  { label: "Download CV", href: contact.cv, icon: LuDownload, download: true },
];

const fieldClass =
  "mt-2 w-full rounded-sm border border-ink/25 bg-bg px-4 text-base transition-colors hover:border-ink/45 aria-[invalid=true]:border-red-600 dark:aria-[invalid=true]:border-red-400";

// After a submit that fails validation, move focus to the first field with an error.
function FocusFirstError() {
  const { submitCount, isValid, isSubmitting } = useFormikContext();
  useEffect(() => {
    if (submitCount > 0 && !isValid && !isSubmitting)
      document.querySelector<HTMLElement>("#contact [aria-invalid=true]")?.focus();
  }, [submitCount, isValid, isSubmitting]);
  return null;
}

export default function Contact() {
  const { ref } = useActiveInView("Contact");
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(
    null
  );

  return (
    <section ref={ref} id="contact" className="pt-[var(--padt)]">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <h2 className="t-h2">
            Contact.{" "}
            <span className="text-muted">Messages go straight to my inbox.</span>
          </h2>
          <ul className="mt-10 border-t border-ink/[0.12]">
            {channels.map(({ label, href, icon: Icon, external, download }) => (
              <li key={label} className="border-b border-ink/[0.12]">
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  {...(download ? { download: true } : {})}
                  className="group flex h-14 items-center gap-3"
                >
                  <Icon aria-hidden className="h-5 w-5 shrink-0 text-muted" />
                  <span className="link">{label}</span>
                  <LuArrowUpRight
                    aria-hidden
                    className="ml-auto h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Formik
          initialValues={INITIAL_VALUES}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={async (values, { resetForm }) => {
            setStatus(null);
            const { error } = await sendEmail(values);
            if (error) {
              setStatus({
                ok: false,
                text: `Your message was not sent: ${error}. Try again, or email me directly.`,
              });
              return;
            }
            setStatus({ ok: true, text: "Your message is sent. I'll reply by email." });
            resetForm();
          }}
        >
          {({ errors }) => (
              <Form
                noValidate
                className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7"
              >
                <FocusFirstError />
                <div>
                  <label htmlFor="senderEmail" className="text-sm font-medium">
                    Your email
                  </label>
                  <Field
                    id="senderEmail"
                    name="senderEmail"
                    type="email"
                    autoComplete="email"
                    maxLength={500}
                    aria-invalid={!!errors.senderEmail}
                    aria-describedby={
                      errors.senderEmail ? "senderEmail-error" : undefined
                    }
                    className={`${fieldClass} h-12`}
                  />
                  {errors.senderEmail && (
                    <p
                      id="senderEmail-error"
                      className="mt-2 text-sm text-red-700 dark:text-red-300"
                    >
                      {errors.senderEmail}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    maxLength={5000}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={`${fieldClass} h-48 resize-y py-3`}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-2 text-sm text-red-700 dark:text-red-300"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  <SubmitButton />
                  <p
                    role="status"
                    className={`text-sm ${
                      status && !status.ok
                        ? "text-red-700 dark:text-red-300"
                        : "text-muted"
                    }`}
                  >
                    {status?.text}
                  </p>
                </div>
              </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
