'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { useActiveInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SubmitButton from './submit-button';
import { Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { sendEmail } from '@/actions/sendEmail';
import toast, { Toaster } from 'react-hot-toast';

const INITIAL_VALUES = { senderEmail: '', message: '' };

type ContactFormValues = { senderEmail: string; message: string };

export default function Contact() {
  const { ref } = useActiveInView('Contact');

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:example@gmail.com'>
          shay.peleg11@gmail.com
        </a>{' '}
        , or through this form:
      </p>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={async (
          values: ContactFormValues,
          { resetForm }: FormikHelpers<ContactFormValues>
        ) => {
          const { error } = await sendEmail(values);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email Sent Successfully');

          resetForm();
        }}
      >
        <Form className='mt-10 flex flex-col items-center dark:text-black'>
          <Field
            name='senderEmail'
            type='email'
            required
            maxLength={5000}
            className='h-14 rounded-lg borderBlack px-4 w-full dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
            placeholder='Your Email'
          />
          <Field
            as='textarea'
            name='message'
            required
            maxLength={500}
            className='h-52 my-3 rounded-lg borderBlack p-4 w-full dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
            placeholder='Your Message'
          />
          <SubmitButton />
        </Form>
      </Formik>
    </motion.section>
  );
}
