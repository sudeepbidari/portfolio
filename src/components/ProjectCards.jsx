const ProjectCard = ({title, description, techstack, github, demo}) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-6 m-4 max-w-sm md:max-w-md text-white">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
        <p className="text-sm text-gray-500 mb-4"> <strong>Tech Stack: </strong>{techstack}</p>
        <div className="flex gap-4">
            <a
                href={github}
                className="text-white bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
            </a>
            <a
                href={demo}
                className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-500"
                target="_blank"
                rel="noopener noreferer">
                Live Demo
            </a>
        </div>
    </div>
  );
}

export default ProjectCard;