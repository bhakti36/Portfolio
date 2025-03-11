


import MaricoImage from '../assets/marico.png';
import CirriusImage from '../assets/cirriustech.jpeg';
import SGImage from '../assets/saintgobain.jpeg';
import AccentureImage from '../assets/accenture.jpeg';
import WpiImage from '../assets/wpi.jpeg';

const experience = [
  {
    company: "Worcester Polytechnic Institute",
    image: WpiImage,
    position: "Research Assistant",
    duration: "March 2024 – May 2025",
    location: "Worcester-MA, USA",
    details: [
      "Engineered scalable backend solutions for the “SmartWAnDs” Health Mobile App, integrating smartphone images with Electronic Health Records (EHR) to enhance wound care recommendations, improving clinical decision-making for wound nurses.",
      "Optimized cloud infrastructure on AWS EC2 instances, leading to a 40% increase in API response efficiency and ensuring robust scalability for high-traffic use in the “SmartWAnDs” project.",
      "Developed and deployed Python and Flask APIs, improving key modules like PWAT score, wound segmentation, and decision classifiers, achieving a 30% improvement in system performance and reliability.",
      "Designed and implemented a full-stack MERN solution for the “Cardiology” Health portal, ensuring cross-device compatibility and HIPAA compliance for secure patient data management.",
      "Architected and configured AWS cloud infrastructure from scratch for the “Cardiology” Health portal, optimizing deployment processes and securing sensitive health data, resulting in enhanced system scalability and compliance with industry standards.",
    ],
  },
  {
    company: "Accenture Pvt Ltd",
    image: AccentureImage,
    position: "Application Development Team Lead",
    duration: "March 2020 – August 2023",
    location: "Maharashtra, India",
    details: [
      "Led a cross-functional team of 7 specialists, designing and implementing scalable full-stack solutions for Microsoft and Piraeus Bank, delivering mission-critical applications and reducing development time by 20%.",
      "Architected and developed high-performance, fault-tolerant systems using microservices architecture, ensuring seamless integration and scalability, reducing system downtime by 15%.",
      "Initiated the implementation of cloud-native services with Azure and AWS, deploying high-performance backend services, and utilized Docker and Kubernetes for effective system scaling, improving deployment efficiency by 30%.",
      "Enhanced system performance by integrating AI-powered features and optimizing database schemas, achieving a 90% reduction in API response time (from 5 seconds to 45 milliseconds) for Piraeus Bank’s Stock Exchange module.",
      "Implemented efficient data structures, algorithms, and design patterns, improving system scalability and reducing processing delays by 20%.",
      "Promoted code quality through regular code reviews and integration of unit testing frameworks like Junit and Postman, ensuring high-quality code and reducing defects by 25%.",
      "Mentored junior developers, encouraging best practices like test-driven development (TDD) and continuous delivery, resulting in a 30% improvement in team productivity.",
      "Recognized for exceeding client expectations and enhancing system performance, receiving commendations from the Microsoft team for outstanding leadership and technical improvements.",
      "Drove Agile and Scrum methodologies, improving team collaboration and increasing productivity by 30%, ensuring adherence to SDLC best practices and security standards.",
    ],
  },
  {
    company: "Saint Gobain",
    image: SGImage,
    position: "Senior Software Engineer",
    duration: "September 2017 – December 2020",
    location: "Maharashtra, India",
    details: [
      "Delivered a centralized Product Information Management (PIM) tool from concept to launch, collaborating with PMs, UX designers, and Engineering Managers, improving cross-channel consistency and reducing product data management time by 25%.",
      "Designed and developed scalable, high-performance web applications, adhering to best practices and coding standards, resulting in 30% improvement in system reliability and a 20% reduction in technical issues.",
      "Engineered a web-based PIM tool leveraging SQL, MongoDB, Node.js, and MVC frameworks on the backend, and React + Redux, TypeScript, Angular, and Python on the frontend. Implemented microservices architecture, optimizing application performance and reducing backend latency by 15%.",
      "Implemented CI/CD pipelines using JetBrains and Docker on GCP, reducing deployment time by 40% and improving overall time-to-market.",
      "Enhanced application performance and security through rigorous code reviews, testing, and advanced troubleshooting, achieving a 25% reduction in downtime and a 15% increase in application stability.",
      "Successfully managed infrastructure on GCP, improving deployment reliability and reducing manual interventions by 30%."
    ],
  },
  {
    company: "Cirrius Wireless Technology",
    image: CirriusImage,
    position: "Senior Software Engineer",
    duration: "April 2016 – September 2017",
    location: "Maharashtra, India",
    details: [
      "Redesigned and optimized responsive web pages and a legacy codebase into a scalable RESTful microservices architecture for the Phyzii tool using React, JavaScript, and .NET Core, integrating web services to enhance performance and efficiency. This resulted in a 15% increase in user engagement and a 20% reduction in page load times",
      "Designed and implemented Single Sign-On (SSO) and OAuth for API access for Phyzii tool improving security and streamlining authentication processes across multiple brands. This resulted in enhanced user experience and compiance with security standards.",      "Leveraged AWS and MySQL for cloud-based data storage and processing, reducing database query times and optimizing system performance.",
      "Developed a comprehensive UI for Medical Representatives to track and analyze medical information for major pharmaceutical clients, leveraging Node.js, Vue.js, JavaScript, React, and TypeScript. Improved data accessibility and decision-making capabilities for clients.",
    ],
  },
  {
    company: "Marico Pvt Ltd",
    image: MaricoImage,
    position: "Software Trainee",
    duration: "November 2014 – April -2016",
    location: "Maharashtra, India",
    details: [
      "Developed and optimized key modules for an in-house FMCG project, enhancing operational efficiency for management.",
      "Designed and deployed a hybrid mobile app using Cordova, JavaScript, SQL, and REST APIs, ensuring seamless functionality across Android, iOS, and Windows Phone.",
      "Managed tools and infrastructure for the Marico Enterprise Application (MEA), enabling higher-level executives to efficiently approve statuses and leaves via a streamlined portal, significantly improving operational efficiency and reducing administrative overhead."
    ],
  },
  
  
  
];

const Experience = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex space-x-6"
            >
             
              <img
                src={exp.image}
                alt={exp.company}
                className="w-20 h-20 object-cover rounded-full max-w-fullw-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-110"
              />
             
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  {exp.company}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">{exp.position}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp.duration} - {exp.location}</p>
                <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
