import React from 'react';
import clsx from 'clsx';

import './index.css';

export const FullView: React.FC<React.PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return <div className={clsx('full-view', className)}>{children}</div>;
};
