import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text' | 'ghost';
  as?: 'button' | 'a';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
  id?: string;
}

export default function Button({
  children, variant = 'primary', as = 'button', href,
  onClick, disabled = false, loading = false,
  type = 'button', className = '', ariaLabel, id,
}: ButtonProps) {
  const combinedClasses = `btn btn-${variant} ${className}`.trim();
  const isDisabled = disabled || loading;

  const spinner = <span className="btn-spinner" data-testid="button-spinner" aria-hidden="true" />;

  if (as === 'a') {
    return (
      <a
        id={id}
        href={isDisabled ? undefined : href}
        className={combinedClasses}
        onClick={(e) => { if (isDisabled) { e.preventDefault(); return; } onClick?.(e); }}
        aria-label={ariaLabel}
        aria-disabled={isDisabled ? 'true' : undefined}
        role="button"
        tabIndex={isDisabled ? -1 : 0}
      >
        {loading && spinner}
        {children}
      </a>
    );
  }

  return (
    <button
      id={id} type={type} className={combinedClasses}
      onClick={onClick} disabled={isDisabled}
      aria-label={ariaLabel} aria-busy={loading ? 'true' : undefined}
    >
      {loading && spinner}
      {children}
    </button>
  );
}
