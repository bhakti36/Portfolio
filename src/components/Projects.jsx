// import netflixImage from "../assets/netflix.png";    // Import Netflix Clone image
// import vtrImage from "../assets/vtr.png";            // Import Virtual Try-On Room image
// import urlImage from "../assets/url.png";            // Import URL Shortener image
// import hmsImage from "../assets/hms.png";            // Import Hotel Management System image
// import campImage from "../assets/camp.png";          // Import Camp Booking System image
// import todoImage from "../assets/todo.png";          // Import To Do App using Django image
import project1Image from "../assets/project1image.png";  // Import Expense Tracker image
import auctionAppImage from "../assets/auctionimage.jpeg";                 // Import Weather App image

const projects = [
  {
    id: 1,
    name: "Happy Health",
    technologies: "React, Node.js, figma, HTML, CSS, Javascript",
    image: project1Image,
    github: "https://github.com/bhakti36/AssignmentWork/tree/main",
  },
  {
    id: 2,
    name: "Groovy Auction House",
    technologies: "React, TypeScript, CSS, AWS (S3, Aurora DB, Lambda, API Gateway, IAM), SQL",
    image: auctionAppImage,
    github: "https://github.com/bhakti36/Groovy-Auction-House",
    liveDemo: "http://groovy-auction-house.s3-website.us-east-2.amazonaws.com/",
  },

];

const Projects = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img 
                src={project.image} 
                alt={project.name} 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.technologies}</p>
              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
