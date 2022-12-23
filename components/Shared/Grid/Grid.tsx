import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Grid = ({ children, className }: Props) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-auto-fill gap-8">{children}</div>
    </div>
  );
};

export default Grid;
