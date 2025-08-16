import {motion} from "framer-motion";
const reactProjects = [
  {
    title: "To-Do App",
    description: "A simple yet functional To-Do list app",
    img: "https://via.placeholder.com/300x150",
    demoLink: "https://todo-app-three-sable-75.vercel.app/",
    codeLink: "https://github.com/sudeepbidari/todo-app",
  },
  {
    title: "User Management App",
    description:
      "A multi-page blog viewer app, demonstrates dynamic routing, API fetching...",
    img: "https://via.placeholder.com/300x150",
    demoLink: "https://user-management-app-delta-hazel.vercel.app/",
    codeLink: "https://github.com/sudeepbidari/user-management-app",
  },
  {
    title: "Blog App",
    description: "A simple yet functional To-Do list app",
    img: "https://via.placeholder.com/300x150",
    demoLink: "https://blog-app-fawn-two.vercel.app/",
    codeLink: "https://github.com/sudeepbidari/blog-app",
  },
];

const phpProjects = [
  {
    title: "Rewasoft",
    description: "A web application for managing and showcasing Rewasoft's services",
    img: "images/rewasoft-img.png",
    logo: "images/rewasoft-logo.png",
    demoLink: "https://www.rewasoft.com.np/",
    codeLink: ""
  },
  {
    title: "NLR Nepal",
    description: "A web application for NLR Nepal, showcasing their services and initiatives",
    img: "images/nlr-img.png",
    logo: "images/nlr-logo.png",
    demoLink: "https://nlrnepal.org.np/",
    codeLink: ""
  },
  {
    title: "Americar",
    description: "A web application for American shuttle booking service",
    img: "images/americar-img.png",
    logo: "images/americar-logo.png",
    demoLink: "https://americarshuttle.com/",
    codeLink: ""
  },
];

const motionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0 }),
  transition: { duration: 0.5, delay: i * 0.3 },
  viewport: { once: true, amount: 0.2 }
};

function ProjectsSectionAlto() {
  return (
    // Projects Section
    <section className="w-full max-w-5xl">
      <h2 className="text-4xl font-bold mb-10 text-center">
        My <span className="text-purple-600">Projects</span>
      </h2>

      {/* PHP Projects */}
      
      <h3 className="text-lg font-semibold my-10">
        <span className="text-purple-600">PHP</span> Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {phpProjects.map((project, index) => (
          <motion.article
            key={index}
            className="rounded-2xl backdrop-blur-lg bg-blue-50 border border-white/20 shadow-lg flex flex-col items-center"
            initial={motionVariants.hidden}
            whileInView={motionVariants.visible(index)}
            viewport={motionVariants.viewport}
            transition={motionVariants.transition}
          >
            {
              project.logo && 
            <img src={project.logo} alt={project.title} className="h-10 mt-8" />
            }
            <div className="w-70 rounded-lg overflow-hidden m-8 shadow-lg">
              <img src={project.img} alt={project.title} className="w-full h-36 object-cover" />
            </div>

            <div className="bg-white p-4 boder w-full">
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            <div className="flex gap-3 mt-auto">
              <a
                href={project.demoLink}
                className="px-4 py-2 text-white bg-blue-600 rounded-md text-sm hover:bg-blue-700"
                target="_blank" rel="noopener noreferrer"
              >
                Live Demo
              </a>
              {project.codeLink &&
              <a
                href={project.codeLink}
                className="px-4 py-2 text-black bg-gray-200 rounded-md text-sm hover:bg-gray-300"
                target="_blank" rel="noopener noreferrer"
              >
                View Code
              </a>
              }
            </div>
            </div>
          </motion.article>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-6 mt-10">
        <span className="text-purple-600">ReactJS</span> Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reactProjects.map((project, index) => (
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
                target="_blank" rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                className="px-4 py-2 text-black bg-gray-200 rounded-md text-sm hover:bg-gray-300"
                target="_blank" rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}

export default ProjectsSection;