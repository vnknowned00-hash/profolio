const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-cyan-500/20 bg-slate-950/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400 mb-6">© 2026 Justin Carl A. Moslares. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          {[
            { name: 'GitHub', url: 'https://github.com/Pandor4x' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pandora-pandora-46a3b9279/' }
          ].map((social, idx) => (
            <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition font-medium">
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
