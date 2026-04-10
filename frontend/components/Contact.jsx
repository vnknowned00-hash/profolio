const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something together</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl backdrop-blur">
            <p className="text-slate-300 mb-8 text-lg">
              I'm always excited about new projects and opportunities to create impactful web applications.
            </p>
            <div className="space-y-6">
              <div className="hover:translate-x-2 transition">
                <p className="text-cyan-400 font-semibold mb-1">Phone</p>
                <a href="tel:09561234328" className="text-slate-400 hover:text-cyan-400 transition">09561234328</a>
              </div>
              <div className="hover:translate-x-2 transition">
                <p className="text-cyan-400 font-semibold mb-1">Email</p>
                <a href="mailto:mimongbahalay@gmail.com" className="text-slate-400 hover:text-cyan-400 transition">mimongbahalay@gmail.com</a>
              </div>
              <div className="hover:translate-x-2 transition">
                <p className="text-cyan-400 font-semibold mb-1">Availability</p>
                <p className="text-slate-400">Open to freelance and project collaborations</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl backdrop-blur">
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition" />
              </div>
              <div>
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition" />
              </div>
              <div>
                <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:-translate-y-1">
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
              {submitted && <p className="text-cyan-400 text-sm text-center animate-pulse">Thank you! I'll get back to you soon.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
