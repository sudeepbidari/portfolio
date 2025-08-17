import {motion} from "framer-motion";
const reactProjects = [
  {
    title: "To-Do App",
    description: "A simple yet functional To-Do list app",
    img: "images/todo-app.png",
    demoLink: "https://todo-app-three-sable-75.vercel.app/",
    codeLink: "https://github.com/sudeepbidari/todo-app",
  },
  {
    title: "User Management App",
    description:
      "A multi-page blog viewer app, demonstrates dynamic routing, API fetching...",
    img: "images/user-management-app.png",
    demoLink: "https://user-management-app-delta-hazel.vercel.app/",
    codeLink: "https://github.com/sudeepbidari/user-management-app",
  },
  {
    title: "Blog App",
    description: "A simple yet functional To-Do list app",
    img: "images/blog-app.png",
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
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.5 }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function ProjectsSection() {
  return (
    // Projects Section
    <section className="w-full max-w-5xl md:my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        My <span className="text-purple-600">Projects</span>
      </h2>

      {/* PHP Projects */}
      
      <h3 className="text-lg font-semibold my-10">
        <span className="text-purple-600">PHP</span> Projects
      </h3>
        
    <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
    >

    {phpProjects.map((project, index) => (
        <motion.article
        key={index}
        className="rounded-2xl backdrop-blur-lg bg-blue-50 border border-white/20 shadow-lg flex flex-col items-center"
        variants={item}
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
            className="px-4 py-2 text-white border-1 bg-blue-600 rounded-md text-sm hover:bg-blue-100 hover:text-blue-800 hover:border-1 transition-all duration-300 ease-in-out"
            target="_blank" rel="noopener noreferrer"
            >
            Live Demo
            </a>
            {project.codeLink &&
            <a
            href={project.codeLink}
            className="px-4 py-2 text-black border-1 border-gray-200 bg-gray-200 rounded-md text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            target="_blank" rel="noopener noreferrer"
            >
            View Code
            </a>
            }
        </div>
        </div>
        </motion.article>
    ))}
    </motion.div>

      <h3 className="text-xl font-semibold mb-6 mt-10">
        <span className="text-purple-600">ReactJS</span> Projects
      </h3>

      
    <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
    >
        {reactProjects.map((project, index) => (
          <motion.article
            key={index}
            className="rounded-2xl p-6 backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg flex flex-col items-center"
            variants={item}
          >
            <div className="w-full rounded-lg overflow-hidden mb-4 bg-white/10">
              <img src={project.img} alt={project.title} className="w-full h-36 object-cover" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            <div className="flex gap-3 mt-auto">
              <a
            href={project.demoLink}
            className="px-4 py-2 text-white border-1 bg-blue-600 rounded-md text-sm hover:bg-blue-100 hover:text-blue-800 hover:border-1 transition-all duration-300 ease-in-out"
            target="_blank" rel="noopener noreferrer"
            >
            Live Demo
            </a>
            {project.codeLink &&
            <a
            href={project.codeLink}
            className="px-4 py-2 text-black border-1 border-gray-200 bg-gray-200 rounded-md text-sm hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            target="_blank" rel="noopener noreferrer"
            >
            View Code
            </a>
            }
            </div>
          </motion.article>
        ))}
      </motion.div>

    </section>
  );
}
