const Projects = () => {
  const [hoveredProject, setHoveredProject] = React.useState(null);

  const projects = [
    {
      id: 1,
      title: 'OJT Tracker',
      description: 'Training management system with authentication and user workflows.',
      image: 'assets/images/ojttracking.jpg',
      preview: 'assets/images/ojttracking.jpg',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Render'],
      url: 'https://tracker-akoq.onrender.com/login'
    },
    {
      id: 2,
      title: 'Pasabuy System',
      description: 'Responsive ordering platform deployed with modern frontend and backend tools.',
      image: 'assets/images/pabuybes.jpg',
      preview: 'assets/images/pabuybes.jpg',
      tech: ['React', 'HTML5', 'CSS3', 'JavaScript', 'REST API', 'Netlify'],
      url: 'https://pasabuy-bes.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">Real applications built for users</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group bg-slate-900/50 border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-400 transition backdrop-blur glow-effect"
            >
              <div className="relative overflow-hidden h-56 bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition duration-500 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center transition duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-20 w-20 overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-950/80">
                    <img src={project.preview || project.image} alt={`${project.title} screenshot thumbnail`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 mb-1">{project.title} Preview</p>
                    <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full hover:bg-cyan-500/30 transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/30 font-semibold transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
