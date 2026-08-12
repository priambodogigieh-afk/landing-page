/**
 * Simulates server API calls for the landing page interactions.
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}

export async function subscribeNewsletter(email: string): Promise<ApiResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email.toLowerCase() === 'error@nexcent.com') {
        resolve({
          success: false,
          message: 'The email server is temporarily down. Please try again later.',
        });
      } else if (!email.includes('@')) {
        resolve({
          success: false,
          message: 'Invalid email address provided.',
        });
      } else {
        resolve({
          success: true,
          message: 'Thank you! You have successfully subscribed to our newsletter.',
        });
      }
    }, 500);
  });
}
