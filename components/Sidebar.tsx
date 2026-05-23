"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Top Header */}
      <header className="mobile-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <span style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.05em' }}>
            AP
          </span>
          <span className="label label-sm" style={{ color: 'var(--primary)', fontSize: '0.65rem', borderLeft: '1px solid var(--outline-variant)', paddingLeft: 'var(--spacing-sm)' }}>
            ARCHITECT
          </span>
        </div>
        <button className="menu-toggle" onClick={toggleSidebar} aria-label="Toggle Navigation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      {/* Sidebar Backdrop Overlay */}
      <div 
        className={`sidebar-backdrop ${isOpen ? 'active' : ''}`} 
        onClick={closeSidebar}
      />

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div>
          <div style={{ marginBottom: 'var(--spacing-xl)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'var(--surface-container-high)', flexShrink: 0 }}>
                <Image
                  src="/avatar.jpg"
                  alt="Abhishek Pathak"
                  width={64}
                  height={64}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Abhishek Pathak</h1>
                <p className="label label-sm" style={{ color: 'var(--on-surface-variant)', fontSize: '0.7rem' }}>BACKEND ARCHITECT</p>
              </div>
            </div>
            
            <button className="menu-toggle close-sidebar-btn" onClick={closeSidebar} aria-label="Close Navigation">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-2xl)' }}>
            <a href="#intro" className="nav-link active" onClick={closeSidebar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="9"></line><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="11" y2="17"></line></svg>
              <span className="label label-md">Intro</span>
            </a>
            <a href="#services" className="nav-link" onClick={closeSidebar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              <span className="label label-md">Services</span>
            </a>
            <a href="#projects" className="nav-link" onClick={closeSidebar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              <span className="label label-md">Projects</span>
            </a>
            <a href="#journal" className="nav-link" onClick={closeSidebar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              <span className="label label-md">Journal</span>
            </a>
            <a href="#contact" className="nav-link" onClick={closeSidebar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
              <span className="label label-md">Contact</span>
            </a>
          </nav>

          <div style={{ marginTop: 'var(--spacing-2xl)' }}>
            <button className="btn-secondary" style={{ padding: 'var(--spacing-md) var(--spacing-xl)', minWidth: '180px' }}>
              <span className="label label-sm">DOWNLOAD CV</span>
            </button>
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: 'var(--spacing-2xl)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
            <a href="https://github.com/abhi267266" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <span className="label label-sm">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/abhishek-pathak-b04108250" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path></svg>
              <span className="label label-sm">LinkedIn</span>
            </a>
          </div>
          <p className="label label-sm" style={{ opacity: 0.4, fontSize: '0.65rem' }}>© 2024 ABHISHEK PATHAK. BUILT FOR RESILIENCE.</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
