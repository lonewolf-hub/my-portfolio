import React from 'react';
import ProjectDetail from '../core/components/projects/components/ProjectDetail';
import Navbar from '../core/components/navbar/Navbar';

const RailwayApp = () => {
  const technologies = ['Next.js', 'TypeScript', 'HTML', 'Tailwind CSS'];

  return (
    <div>
      <Navbar />
      <ProjectDetail
        imageSrc='/assets/projects/railway1.png'
        heading='Railway Ticket Booking App'
        description={[
          '🚄 Embark on a seamless journey of Railway Ticket Booking Application, a sophisticated and user-friendly platform.',
          '🎫 This medium to large-scale app was meticulously crafted during my internship.',
          '🛠 Every component within the app is designed for scalability, following best practices in software development.',
          '💻 Technologies employed include TypeScript for type safety,Tailwind CSS for streamlined and responsive styling.',
          '🌐 The app provides a modern, intuitive interface for users to effortlessly book train tickets and manage reservations.',
          '📈 Built with scalability in mind, the codebase is organized, maintainable, and extensible for future enhancements.',
          '🧰 Leveraging the power of Next.js, the app delivers high-performance, ensuring a smooth user experience.',
          '🔒 Security is a top priority, and the app adheres to industry best practices to safeguard user data and transactions.',
          '📚 This project significantly contributed to my learning journey, enhancing my skills in building robust, production-ready applications.',
          '🔗 Explore the app further by checking out the demo and the open-source code repository.',
        ]}
        demoLink={""}
        codeLink={""}
        technologies={technologies}
      />
    </div>
  );
};

export default RailwayApp;
