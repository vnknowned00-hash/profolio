const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">About</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr] items-start">
          <div>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              I am Justin Carl A. Moslares, a 4th-year Bachelor of Science in Computer Engineering student from Borongan, Eastern Samar, Philippines. I build practical, user-focused applications with a strong interest in software development and application design.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              I am passionate about continuously improving my technical skills, learning new technologies, and solving real-world problems through clean, intuitive software. I stay motivated, adaptable, and ready to contribute to innovative projects in the technology space.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Software Development and Application Design',
                'Web Development (Frontend and Backend)',
                'Mobile App Development',
                'Object-Oriented Programming and System Design',
                'Open Source Projects and Collaboration',
                'UI/UX Design and User-Centered Development',
                'Problem Solving and Debugging',
                'Learning New Programming Languages and Frameworks',
                'Agile Development and Version Control (Git)',
                'Tech Innovation and Startup Development'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 text-slate-300 transition hover:border-cyan-400/50 hover:bg-slate-900/90">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 bg-slate-900/60 border border-cyan-500/20 rounded-[2rem] backdrop-blur shadow-xl shadow-cyan-500/5">
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Quick Facts</h3>
            <div className="space-y-4 text-slate-300">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-1">Location</p>
                <p>Philippines</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-1">Education</p>
                <p>Bachelor of Science in Computer Engineering</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-1">Focus Areas</p>
                <p>Full-stack development, mobile apps, UI/UX, and agile collaboration.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-1">What I Value</p>
                <p>Building meaningful software that helps people, learning fast, and working well with teams.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
