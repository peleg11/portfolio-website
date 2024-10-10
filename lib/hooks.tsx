import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import type { SectionName } from '@/lib/type';

export const useActiveInView = (activeName: SectionName) => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(activeName);
  }, [inView, timeOfLastClick]);

  return { ref };
};
