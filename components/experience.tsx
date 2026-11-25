'use client';

import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';
import { experiencesData } from '@/lib/data';
import { useActiveInView } from '@/lib/hooks';

export default function Experience() {
  const { ref } = useActiveInView('Experience');

  return (
    <section ref={ref} id='experience' className='section min-h-[200svh] bg-surface'>
      <div className='wrap'>
        <h2 className='t-h2'>Experience and education</h2>
        <ol className='mt-12 border-t border-ink/[0.12]'>
          {experiencesData.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.org}
                className='grid gap-3 border-b border-ink/[0.12] py-8 md:py-12 lg:grid-cols-12 lg:gap-6 lg:py-8'
              >
                <p className='flex items-center gap-3 text-sm text-muted lg:col-span-3 lg:items-start lg:pt-1'>
                  <Icon aria-hidden className='h-4 w-4 shrink-0' />
                  {item.date}
                </p>
                <div className='lg:col-span-8'>
                  <h3 className='t-h3'>
                    {item.role}
                    <span className='text-muted'> · {item.org}</span>
                  </h3>
                  <p className='text-sm text-muted'>{item.location}</p>
                  <p className='mt-3 max-w-[68ch] text-ink/80'>
                    {item.description}
                  </p>
                  {'link' in item && item.link && (
                    <a
                      href={item.link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='link mt-3 inline-flex items-center gap-1 py-2 font-medium'
                    >
                      {item.link.label}
                      <LuArrowUpRight aria-hidden className='h-4 w-4' />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
