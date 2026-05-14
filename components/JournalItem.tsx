import React from 'react';

interface JournalItemProps {
  date: string;
  title: string;
  url?: string;
}

const JournalItem: React.FC<JournalItemProps> = ({ date, title, url = "#" }) => {
  return (
    <div style={{ 
      padding: 'var(--spacing-lg) 0', 
      borderBottom: '1px solid var(--outline-variant)',
      borderColor: 'rgba(60, 73, 70, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)'
    }}>
      <p className="label label-sm" style={{ color: 'var(--on-surface-variant)', opacity: 0.6 }}>{date}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 className="headline-lg" style={{ fontSize: '1.25rem', margin: 0 }}>{title}</h4>
        <a href={url} target="_blank" rel="noopener noreferrer" className="label label-sm" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Read →</a>
      </div>
    </div>
  );
};

export default JournalItem;
