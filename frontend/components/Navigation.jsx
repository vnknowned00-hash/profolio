const Navigation = ({ scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-950/95 shadow-lg' : 'bg-slate-950/80'} backdrop-blur-lg border-b border-cyan-500/20`}>
      <div className="container mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
          <h2 className="text-xl font-bold text-cyan-400"></h2>
          <p className="text-sm text-slate-400"></p>
        </div>
        <button className="md:hidden text-cyan-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden md:flex gap-8">
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)} className="text-slate-300 hover:text-cyan-400 transition duration-300 font-medium capitalize">
              {item}
            </button>
          ))}
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-cyan-500/20">
          <div className="flex flex-col p-4 gap-4">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="text-slate-300 hover:text-cyan-400 transition duration-300 text-left capitalize">
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
