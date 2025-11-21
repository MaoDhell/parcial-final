import React from 'react';

// Creamos un boton para reutilizar en la aplicacion
export const Button = ({ 
  children, 
  variant = 'primary', 
  icon, 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseStyles = 'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    danger: 'text-red-600 hover:bg-red-50',
    success: 'text-blue-600 hover:bg-blue-50'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};