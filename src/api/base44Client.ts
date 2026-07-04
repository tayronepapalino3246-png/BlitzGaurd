// Mock API client for development
// In production, replace with your actual base44 API client

interface ResetPasswordPayload {
  resetToken: string;
  newPassword: string;
}

interface AuthClient {
  resetPassword: (payload: ResetPasswordPayload) => Promise<void>;
}

const mockAuthClient: AuthClient = {
  resetPassword: async ({ resetToken, newPassword }) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!resetToken) {
          reject(new Error('Invalid reset token'));
        } else if (newPassword.length < 8) {
          reject(new Error('Password must be at least 8 characters'));
        } else {
          console.log('Password reset successful for token:', resetToken);
          resolve();
        }
      }, 1000);
    });
  },
};

export const base44 = {
  auth: mockAuthClient,
};
