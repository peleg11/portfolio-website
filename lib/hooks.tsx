import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import type { SectionName } from '@/lib/type';

// A section is active while it crosses the middle of the screen, whatever its height.
export const useActiveInView = (activeName: SectionName) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ rootMargin: '-50% 0px -50% 0px' });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(activeName);
  }, [inView, timeOfLastClick, activeName, setActiveSection]);

  return { ref };
};
