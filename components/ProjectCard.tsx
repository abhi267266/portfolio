import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  url?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, impact, url = "#" }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div className="card" style={{ marginBottom: 'var(--spacing-lg)', cursor: url !== "#" ? 'pointer' : 'default' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 className="headline-lg">{title}</h3>
          <span className="label label-sm" style={{ color: 'var(--primary-container)' }}>↗</span>
        </div>
        <p className="body-lg" style={{ fontSize: '1rem', marginBottom: 'var(--spacing-md)' }}>{description}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--outline-variant)', opacity: 0.3 }}></div>
          <p className="label label-sm" style={{ color: 'var(--secondary)' }}>Impact: {impact}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
