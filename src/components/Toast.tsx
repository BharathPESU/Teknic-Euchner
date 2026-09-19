import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      className="toast-alert"
      id="toastAlert"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 99999,
        backgroundColor: '#0a0f18',
        border: '1px solid #d90429',
        borderRadius: '8px',
        padding: '1rem 1.4rem',
        color: '#f8fafc',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.65)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        maxWidth: '420px',
        fontSize: '0.9rem',
        animation: 'fadeInUp 0.3s ease-out'
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <div style={{ flex: 1, lineHeight: '1.4' }}>{message}</div>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#94a3b8',
          cursor: 'pointer',
          padding: '0.2rem',
          display: 'flex',
          alignItems: 'center'
        }}
        aria-label="Close notification"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};
