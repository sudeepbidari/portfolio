import React from "react";

const projects = [
  {
    title: "To-Do App",
    description: "A simple yet functional To-Do list app",
    img: "https://via.placeholder.com/300x150",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "User Management App",
    description:
      "A multi-page blog viewer app, demonstrates dynamic routing, API fetching...",
    img: "https://via.placeholder.com/300x150",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Blog App",
    description: "A simple yet functional To-Do list app",
    img: "https://via.placeholder.com/300x150",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Blog App",
    description: "A simple yet functional To-Do list app",
    img: "https://via.placeholder.com/300x150",
    demoLink: "#",
    codeLink: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* SVG Gradient Background (positioned behind everything) */}
      <svg
        className="absolute inset-0 w-full h-full -z-20"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="g1" cx="20%" cy="15%">
            <stop offset="0%" stopColor="#fef3ff" />
            <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.35" />
          </radialGradient>
          <radialGradient id="g2" cx="80%" cy="25%">
            <stop offset="0%" stopColor="#eef2ff" />
            <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.35" />
          </radialGradient>
          <radialGradient id="g3" cx="85%" cy="85%">
            <stop offset="0%" stopColor="#fff1f2" />
            <stop offset="100%" stopColor="#fecaca" stopOpacity="0.30" />
          </radialGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="60" />
          </filter>
        </defs>

        <circle cx="220" cy="140" r="220" fill="url(#g1)" filter="url(#blur)" />
        <circle cx="980" cy="180" r="260" fill="url(#g2)" filter="url(#blur)" />
        <circle cx="1060" cy="660" r="260" fill="url(#g3)" filter="url(#blur)" />
      </svg>

      {/* Glassmorphism full-screen overlay for subtle whitening + blur */}
      <div className="absolute inset-0 -z-10 bg-white/30 backdrop-blur-sm" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
        {/* Hero Section (glass card) */}
        <section className="w-full max-w-3xl text-center">
          <div className="mx-auto">
            <p className="text-gray-700 mb-2 text-xl">Hi, I'm <strong>Sudeep</strong> 👋</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              full-stack <br /> <span className="text-purple-600">web developer</span>
            </h1>
            <p className="text-md text-gray-700 mt-3">🚀 Let's create something amazing together.</p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              View Projects
            </button>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full max-w-6xl mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            My <span className="text-purple-600">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="rounded-2xl p-6 backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg flex flex-col items-center"
              >
                <div className="w-full rounded-lg overflow-hidden mb-4 bg-white/10">
                  <img src={project.img} alt={project.title} className="w-full h-36 object-cover" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.demoLink}
                    className="px-4 py-2 text-white bg-blue-600 rounded-md text-sm hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="px-4 py-2 text-black bg-gray-200 rounded-md text-sm hover:bg-gray-300"
                  >
                    View Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer spacer */}
        <div className="h-24" />
      </div>
    </div>
  );
}
