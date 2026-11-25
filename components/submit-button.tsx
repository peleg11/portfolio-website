'use client';
import { useFormikContext } from 'formik';
import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export default function SubmitButton() {
  const { isSubmitting } = useFormikContext();

  return (
    <button
      type='submit'
      className='btn btn-primary w-full sm:w-auto'
      aria-disabled={isSubmitting}
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending…' : 'Send a message'}
      {!isSubmitting && <LuArrowRight aria-hidden className='arrow h-4 w-4' />}
    </button>
  );
}
