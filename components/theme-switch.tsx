'use client';
import { useTheme } from '@/context/theme-context';
import React from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      className='grid h-11 w-11 place-items-center rounded-sm text-ink transition-colors hover:bg-ink/[0.06]'
    >
      {theme === 'light' ? (
        <LuMoon aria-hidden className='h-5 w-5' />
      ) : (
        <LuSun aria-hidden className='h-5 w-5' />
      )}
    </button>
  );
}
