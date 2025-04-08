import React from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'danger' | 'info' | 'warning';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  return (
    <div className={`alert alert-${type} mt-3`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
