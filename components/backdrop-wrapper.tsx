import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const BackdropWrapper = ({ children }: Props) => (
  <div className='pt-28 sm:pt-36 backdrop-blur-[10rem]'>{children}</div>
);
