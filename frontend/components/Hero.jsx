const Hero = () => {
  const [displayText, setDisplayText] = React.useState('');
  const fullText = 'Building polished web experiences';

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const [profileLoaded, setProfileLoaded] = React.useState(true);
  const profileImage = 'assets/images/profile.jpg';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-28 pb-20 px-6 md:px-12 flex items-center">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.8fr_1fr] items-center">
        <div>
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/40 animate-pulse">
            <p className="text-cyan-400 text-sm font-medium">Welcome to my portfolio</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            I'm a versatile full-stack developer focused on responsive UI, scalable REST APIs, and PostgreSQL database architecture. Let's create something amazing together.
          </p>
          <div className="flex gap-4 mb-12 flex-wrap">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300 transform hover:-translate-y-1">
              View My Work
            </button>
            <a href="assets/cv.pdf" download className="px-8 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition duration-300">
              Download CV
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Frontend', desc: 'React, HTML5, CSS3, JavaScript, Responsive Design' },
              { title: 'Backend', desc: 'Node.js, Express, REST APIs, JWT, PostgreSQL' },
              { title: 'Deployment', desc: 'Render, Netlify, Supabase, Git, Postman' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-900/60 border border-cyan-500/20 rounded-xl backdrop-blur hover:border-cyan-500/50 transition">
                <p className="text-cyan-400 font-semibold mb-2">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 bg-slate-900/60 border border-cyan-500/20 rounded-[2rem] backdrop-blur shadow-xl shadow-cyan-500/10">
          <div className="relative mx-auto h-[360px] w-full overflow-hidden rounded-[2rem] border border-cyan-500/40 bg-slate-950/80">
            {profileLoaded ? (
              <img
                src={profileImage}
                alt="Your profile"
                className="h-full w-full object-cover object-center"
                style={{ objectPosition: 'center 100%' }}
                onError={() => setProfileLoaded(false)}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center p-6 text-slate-400">
                <div className="mb-4 h-20 w-20 rounded-full border-2 border-dashed border-cyan-500/60 bg-slate-900/70 flex items-center justify-center text-cyan-400 text-3xl">
                  <span>+</span>
                </div>
                <p className="text-sm font-semibold text-slate-200 mb-2">Your photo goes here</p>
                <p className="text-center text-xs text-slate-400">Save your image as <span className="text-cyan-300">assets/images/profile.jpg</span> in the frontend folder.</p>
              </div>
            )}
          </div>
          <div className="mt-6 text-slate-400 text-sm leading-relaxed">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">Name</p>
              <p className="text-white font-semibold">Justin Carl A. Moslares</p>
            </div>
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">Location</p>
              <p className="text-slate-200">Borongan, Eastern Samar, Philippines</p>
            </div>
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">Education</p>
              <p className="text-slate-200">4th-year BS Computer Engineering student</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">Focus</p>
              <p className="text-slate-200">Software development, web apps, mobile apps, UI/UX, and system design.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
