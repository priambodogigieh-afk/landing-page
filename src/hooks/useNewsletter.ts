import { useState } from 'react';
import { subscribeNewsletter } from '../api/api';

export type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export default function useNewsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateEmail = (val: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(val);
  };

  const handleSubscribe = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatus('error');
      setErrorMessage('Please enter an email address.');
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    try {
      const response = await subscribeNewsletter(trimmedEmail);
      if (response.success) {
        setStatus('success');
        setSuccessMessage(response.message || 'Subscription completed.');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(response.message || 'An error occurred.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('A network connection error occurred. Please try again.');
    }
  };

  const reset = () => {
    setEmail('');
    setStatus('idle');
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return {
    email, setEmail, status, errorMessage, successMessage,
    handleSubscribe, reset,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
  };
}
