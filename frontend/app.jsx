function App() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const initBgAnimation = () => {
      const canvas = document.getElementById('bg');
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const colors = ['#22d3ee', '#60a5fa', '#c084fc', '#38bdf8'];
      const particles = [];
      const maxParticles = 120;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      const random = (min, max) => Math.random() * (max - min) + min;

      const createParticle = () => ({
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        vx: random(-0.5, 0.5),
        vy: random(-0.5, 0.5),
        size: random(1.5, 4.5),
        hue: colors[Math.floor(random(0, colors.length))],
        alpha: random(0.35, 0.9)
      });

      const initParticles = () => {
        particles.length = 0;
        for (let i = 0; i < maxParticles; i += 1) {
          particles.push(createParticle());
        }
      };

      const drawBackground = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(2, 6, 23, 0.55)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };

      const drawGlow = () => {
        const gradient = ctx.createRadialGradient(
          canvas.width * 0.8,
          canvas.height * 0.2,
          0,
          canvas.width * 0.8,
          canvas.height * 0.2,
          canvas.width * 0.35
        );
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.17)');
        gradient.addColorStop(1, 'rgba(2, 6, 23, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };

      const drawParticles = () => {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        particles.forEach((particle) => {
          ctx.beginPath();
          ctx.fillStyle = particle.hue;
          ctx.globalAlpha = particle.alpha;
          ctx.shadowColor = particle.hue;
          ctx.shadowBlur = 18;
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      };

      const drawLinks = () => {
        for (let i = 0; i < particles.length; i += 1) {
          for (let j = i + 1; j < particles.length; j += 1) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              ctx.strokeStyle = 'rgba(56, 189, 248,' + (0.18 - dist / 1300) + ')';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      };

      const updateParticles = () => {
        particles.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < -50) particle.x = canvas.width + 50;
          if (particle.x > canvas.width + 50) particle.x = -50;
          if (particle.y < -50) particle.y = canvas.height + 50;
          if (particle.y > canvas.height + 50) particle.y = -50;
        });
      };

      const animate = () => {
        drawBackground();
        drawGlow();
        drawLinks();
        drawParticles();
        updateParticles();
        requestAnimationFrame(animate);
      };

      resizeCanvas();
      initParticles();
      animate();
      const handleResize = () => {
        resizeCanvas();
        initParticles();
      };
      window.addEventListener('resize', handleResize);
      return handleResize;
    };

    const resizeHandler = initBgAnimation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-100 overflow-x-hidden">
      <Navigation scrollY={scrollY} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
