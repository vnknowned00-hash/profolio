const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      subtitle: 'Web Development Skills',
      tools: [
        { name: 'HTML5', icon: 'bi-code-slash', detail: 'Semantic Markup' },
        { name: 'CSS3', icon: 'bi-braces', detail: 'Flexbox, Grid, Animations' },
        { name: 'JavaScript', icon: 'bi-file-code', detail: 'ES6+' },
        { name: 'React', icon: 'bi-ui-checks-grid', detail: 'Components & Hooks' },
        { name: 'Tailwind CSS', icon: 'bi-layout-text-window', detail: 'Utility-first UI' },
        { name: 'Bootstrap', icon: 'bi-bootstrap', detail: 'Responsive UI' },
        { name: 'Responsive Design', icon: 'bi-phone', detail: 'Mobile-first approach' },
        { name: 'UI/UX Design', icon: 'bi-palette', detail: 'Design Principles' },
        { name: 'DOM Manipulation', icon: 'bi-cursor-text', detail: 'Interactive UI' },
        { name: 'Git / GitHub', icon: 'bi-github', detail: 'Version Control' }
      ]
    },
    {
      title: 'Backend Development',
      subtitle: 'Server-side application skills',
      tools: [
        { name: 'Node.js', icon: 'bi-server', detail: 'Basic to Intermediate' },
        { name: 'Express.js', icon: 'bi-box-seam', detail: 'Web APIs' },
        { name: 'RESTful API Development', icon: 'bi-cloud-arrow-up', detail: 'API Design' },
        { name: 'Authentication & Authorization', icon: 'bi-shield-lock', detail: 'JWT & Sessions' },
        { name: 'CRUD Operations', icon: 'bi-pencil-square', detail: 'Create / Read / Update / Delete' },
        { name: 'Server-side Validation', icon: 'bi-check2-square', detail: 'Data validation' }
      ]
    },
    {
      title: 'Database Management',
      subtitle: 'Data design and database skills',
      tools: [
        { name: 'SQL', icon: 'bi-file-earmark-database', detail: 'MySQL / PostgreSQL' },
        { name: 'NoSQL', icon: 'bi-hdd-stack', detail: 'Firebase / MongoDB' },
        { name: 'Database Design', icon: 'bi-diagram-3', detail: 'Normalization & Modeling' },
        { name: 'Data Modeling', icon: 'bi-kanban', detail: 'Schema planning' },
        { name: 'Database CRUD', icon: 'bi-stack', detail: 'Database operations' }
      ]
    },
    {
      title: 'Deployment & DevOps',
      subtitle: 'Launch and maintain applications',
      tools: [
        { name: 'Netlify', icon: 'bi-cloud-upload', detail: 'Frontend Deployment' },
        { name: 'Vercel', icon: 'bi-rocket-takeoff', detail: 'Web App Deployment' },
        { name: 'GitHub Pages', icon: 'bi-globe2', detail: 'Static Hosting' },
        { name: 'CI/CD Concepts', icon: 'bi-repeat', detail: 'Automation Basics' },
        { name: 'Environment Variables', icon: 'bi-gear', detail: 'Configuration Management' },
        { name: 'Domain & Hosting', icon: 'bi-globe', detail: 'DNS / Hosting Setup' }
      ]
    },
    {
      title: 'Tools & Technologies',
      subtitle: 'Developer tools and platform features',
      tools: [
        { name: 'VS Code', icon: 'bi-code-slash', detail: 'Editor' },
        { name: 'Git & GitHub', icon: 'bi-github', detail: 'Source control' },
        { name: 'Chrome DevTools', icon: 'bi-tools', detail: 'Browser Debugging' },
        { name: 'Figma', icon: 'bi-vector-pen', detail: 'UI Design' },
        { name: 'Postman', icon: 'bi-cup-straw', detail: 'API Testing' },
        { name: 'Supabase', icon: 'bi-clouds', detail: 'BaaS' },
        { name: 'Firebase Auth', icon: 'bi-shield-lock', detail: 'Auth Service' },
        { name: 'Image Upload', icon: 'bi-image', detail: 'Media Handling' },
        { name: 'PDF Generation', icon: 'bi-file-earmark-pdf', detail: 'Reports' },
        { name: 'Admin Dashboard', icon: 'bi-layout-sidebar', detail: 'Management UI' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.35em] mb-2">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">What I do best</h2>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="rounded-[2rem] border border-slate-700/50 bg-slate-900/20 backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.2)] transition hover:border-cyan-400/40 hover:bg-slate-900/25">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-cyan-400 text-sm uppercase tracking-[0.35em] mb-2">{category.title}</p>
                  <p className="text-xl md:text-2xl font-semibold text-slate-100">{category.subtitle}</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.tools.map((tool, index) => (
                  <div key={index} className="group rounded-3xl border border-slate-700/50 bg-slate-950/15 backdrop-blur-xl p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900/25">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/80 text-2xl text-slate-100 shadow-[0_12px_30px_rgba(8,145,178,0.12)]">
                      <i className={`bi ${tool.icon}`} aria-hidden="true"></i>
                    </div>
                    <p className="text-sm font-semibold text-slate-100">{tool.name}</p>
                    {tool.detail && <p className="mt-1 text-xs text-slate-400">{tool.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
