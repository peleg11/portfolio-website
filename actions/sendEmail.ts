'use server';
import { getErrorMsg, validateString } from '@/lib/utils';
import { FormikValues } from 'formik';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (values: FormikValues) => {
  const { senderEmail, message } = values;

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'invalid sender email',
    };
  }

  if (!validateString(message, 5000)) {
    return { error: 'invalid message' };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Portfolio Contact me form <onboarding@resend.dev>',
      to: 'shay.peleg11@gmail.com',
      subject: 'Message from portfolio contact me',
      reply_to: senderEmail as string,
      text: `Message from ${senderEmail}: ${message}`,
    });
  } catch (e) {
    return {
      error: getErrorMsg(e),
    };
  }

  return {
    data,
  };
};
