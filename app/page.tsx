import Sidebar from "@/components/Sidebar";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import JournalItem from "@/components/JournalItem";

export default function Home() {
  return (
    <div className="split-pane">
      <Sidebar />
      
      <main className="main-content">
        <section id="intro" style={{ marginBottom: 'var(--spacing-2xl)', position: 'relative' }}>
          <div className="glow" style={{ position: 'absolute', top: '20%', left: '-10%', width: '100%', height: '100%' }}></div>
          <h2 className="label label-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-md)', letterSpacing: '0.2em' }}>SYSTEM ARCHITECT</h2>
          <h1 className="display-md" style={{ fontSize: '4.5rem', fontWeight: 800, maxWidth: '800px', lineHeight: 1.0 }}>
            Building Resilient <span style={{ color: 'var(--primary-container)' }}>Distributed Systems</span> & <span style={{ color: 'var(--primary-container)' }}>Scalable APIs</span>.
          </h1>
          <p className="body-lg" style={{ maxWidth: '600px', marginTop: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)' }}>
            Specializing in the invisible architecture that powers modern web scale. 
            I design systems that handle millions of requests with sub-millisecond latency.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ddcc6', boxShadow: '0 0 10px #4ddcc6' }}></span>
            <p className="label label-sm" style={{ color: 'var(--on-surface-variant)', letterSpacing: '0.1em' }}>AVAILABLE FOR SELECT CONTRACTS</p>
          </div>
        </section>

        <section id="services" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 className="label label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-lg)' }}>01. Core Services</h2>
          <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
            <ServiceCard 
              number="01"
              title="API Design & Orchestration"
              description="Crafting clean, performant, and hyper-documented REST and gRPC interfaces. Leveraging Go and Node.js for high-throughput transactional flows."
            />
            <ServiceCard 
              number="02"
              title="Cloud Infrastructure"
              description="Architecting infrastructure as code using Terraform and AWS. Expert implementation of Kubernetes clusters for automated scaling and fault tolerance."
            />
            <ServiceCard 
              number="03"
              title="Database Optimization"
              description="Strategic scaling of relational databases and NoSQL solutions. Expert in PostgreSQL tuning, Redis caching layers, and distributed data consistency."
            />
          </div>
        </section>

        <section id="projects" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 className="label label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-lg)' }}>02. Selected Work</h2>
          <ProjectCard 
            title="VectorScale DB"
            description="Engineered a high-performance vector search wrapper for distributed SQL environments."
            impact="Reduced Latency by 30%"
          />
          <ProjectCard 
            title="QuantFlow"
            description="High-performance, strictly zero-allocation, fixed-point integer trading engine written in Go."
            impact="1400x Speedup and 10^-8 Precision"
            url="https://github.com/abhi267266/quant-backtester"
          />
          <ProjectCard 
            title="LeadPulse"
            description="AI-powered lead generation engine using a Postgres-backed distributed queue for atomic job processing."
            impact="Atomic Job Delivery"
            url="https://lead-finder-client.vercel.app/"
          />
        </section>

        <section id="journal" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 className="label label-md" style={{ color: 'var(--primary)', marginBottom: 'var(--spacing-lg)' }}>03. From the Journal</h2>
          <div>
            <JournalItem 
              date="MAY 12, 2024"
              title="Why I didn't use Redis for my background workers"
              url="https://medium.com/@abhi267266/why-i-didnt-use-redis-for-my-background-workers-328b9f1d144d"
            />
            <JournalItem 
              date="AUG 04, 2023"
              title="Why Your Postgres Indexing Strategy is Failing"
            />
          </div>
        </section>

        <section id="contact" style={{ marginBottom: 'var(--spacing-2xl)', paddingTop: 'var(--spacing-2xl)' }}>
          <div className="card glass" style={{ textAlign: 'center', padding: 'var(--spacing-2xl)' }}>
            <h2 className="headline-lg" style={{ marginBottom: 'var(--spacing-md)' }}>READY TO SCALE?</h2>
            <p className="body-lg" style={{ marginBottom: 'var(--spacing-xl)' }}>
              Currently open to architecting roles and distributed systems consulting for high-growth startups.
            </p>
            <a href="mailto:abhishek@pathak.dev" className="btn-primary">
              abhishek@pathak.dev ↗
            </a>
          </div>
        </section>

        <footer style={{ paddingTop: 'var(--spacing-xl)', borderTop: '1px solid rgba(60, 73, 70, 0.1)' }}>
          <p className="label label-sm" style={{ opacity: 0.4 }}>© 2024 ABHISHEK PATHAK. ALL SYSTEMS OPERATIONAL.</p>
        </footer>
      </main>

    </div>
  );
}
