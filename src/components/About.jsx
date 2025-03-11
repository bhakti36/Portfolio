import { useRef, useState, useEffect } from 'react';
import LinkedInImage from '../assets/linkedin.png';
import GitHubImage from '../assets/github.png';
import MailImage from '../assets/mail.png';
import ResumePDF from '../assets/Bhakti Patel_CV.pdf';
// import LeetCodeImage from '../assets/LeetCode.png';
// import GeeksforGeeksImage from '../assets/gfg.png';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 transform transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col items-center md:space-x-12">
          <div className="flex-1">
            <p className="text-lg mb-8 text-justify">
             
             I am a results-driven Application Development Team Lead with a strong track record of leading dynamic teams and delivering innovative solutions. At Accenture Pvt Ltd, I played a key role in developing impactful modules for Microsoft and Piraeus Bank, consistently exceeding client expectations and earning recognition. My journey includes contributing to scalable web applications as a Senior Software Engineer at Saint-Gobain and pioneering web API development at Cirrius Wireless Technology.

Currently, I am working as a Research Assistant at WPI, handling backend development and MERN stack technology for a healthcare application. My technical expertise includes .NET, C#, Python, C, JavaScript, React, TypeScript, Expo, MongoDB, Node.js, Web API, Azure, AWS, Scikit-learn, TensorFlow, and PyTorch.

With expertise in full-stack development, cloud solutions, and scalable architectures, I bring a problem-solving mindset and a passion for creating high-performance applications. Pursuing my Master’s in Computer Science at Worcester Polytechnic Institute, specializing in AI and ML, I am constantly learning and exploring new technologies to build intelligent, future-ready solutions.
            </p>
           
            <div className="flex justify-center items-center space-x-6 my-8">
              <a href="https://www.linkedin.com/in/bhakti-patel-22a61885" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={LinkedInImage} alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a href="https://github.com/bhakti36" target="_blank" rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={GitHubImage} alt="GitHub" className="w-10 h-10 filter brightness-100 dark:brightness-100" />
              </a>
              <a href="mailto:bhakti.rock91@gmail.com"
                className="transform transition-transform duration-300 hover:scale-105">
                <img src={MailImage} alt="Email" className="w-10 h-10" />
              </a>
              
              <a href={ResumePDF} target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
                View Resume
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
