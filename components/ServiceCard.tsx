import React from 'react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description }) => {
  return (
    <div className="card" style={{ marginBottom: 'var(--spacing-md)' }}>
      <p className="label label-sm" style={{ color: 'var(--primary-container)', marginBottom: 'var(--spacing-sm)' }}>{number}</p>
      <h3 className="headline-lg" style={{ marginBottom: 'var(--spacing-sm)' }}>{title}</h3>
      <p className="body-lg" style={{ fontSize: '1rem' }}>{description}</p>
    </div>
  );
};

export default ServiceCard;
