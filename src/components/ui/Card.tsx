import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  id?: string;
}

export default function Card({ children, className = '', interactive = true, onClick, id }: CardProps) {
  const classes = `card ${interactive ? 'card-interactive' : ''} ${className}`.trim();
  return (
    <div
      id={id}
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
