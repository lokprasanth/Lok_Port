function Contact() {
  const methods = [
    {
      label: "Email",
      icon: "https://img.icons8.com/fluency/48/gmail.png",
      sub: "lok@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/lok-prasanth",
      icon: "https://img.icons8.com/color/48/linkedin.png",
      sub: "@Lok Prasanth",
    },
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: "https://img.icons8.com/nolan/64/github.png",
      sub: "Lok Prasanth",
    },
    {
      label: "Book a Call",
      href: "/",
      icon: "https://img.icons8.com/fluency/48/calendar.png",
      sub: "Calendly link",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-24 relative">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight mb-4">
          Let’s{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
            Connect
          </span>
        </h2>
        <p className="text-gray-400 text-lg mt-2">
          I’d love to hear from you. Choose your way below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {methods.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center bg-white/5 border border-yellow-500/10 hover:border-orange-400 rounded-xl p-6 hover:shadow-[0_0_30px_#ffaa0033] transition-all duration-300 hover:scale-105 group"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="text-lg font-semibold">{item.label}</h3>
            <p className="text-sm text-gray-400">{item.sub}</p>
          </a>
        ))}
      </div>

      {/* Map */}
      <div className="mt-24 max-w-6xl mx-auto rounded-3xl overflow-hidden border border-yellow-500/30 shadow-[0_0_30px_#ffae0022]">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5716111646986!2d83.21848197497743!3d17.436498383118898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943e105a8be65%3A0x2499e9b70d7d6b77!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1690207749857!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
