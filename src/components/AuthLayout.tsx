import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  footer?: React.ReactNode;
}

export default function AuthLayout({
  children,
  icon: Icon,
  title,
  subtitle,
  footer,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex justify-center items-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </div>

          {/* Content */}
          <div className="mb-6">
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className="text-center text-sm">
              {footer}
            </div>
          )}
        </div>

        {/* Bottom text */}
        <p className="text-center text-gray-500 text-xs mt-6">
          BlitzGuard Security • Protect Your Account
        </p>
      </div>
    </div>
  );
}
