import React from 'react';
import ProjectDetail from '../core/components/projects/components/ProjectDetail';
import Navbar from '../core/components/navbar/Navbar';

const PortfolioPage = () => {
  const technologies = ['Next.js', 'TypeScript', 'GSAP', 'Styled Components'];


  return (
    <div>
      <Navbar />
      <ProjectDetail
        imageSrc='/assets/projects/portfolio.png'
        heading='Interactive Portfolio'
        description={[
          '✨ Explore my interactive portfolio built with Next.js and TypeScript.',
          '🎨 Stylish UI: Features a sleek and modern user interface with styled components and animations.',
          '🚀 Built with Next.js: Take advantage of the benefits of server-side rendering, automatic code splitting, and seamless deployments.',
          '🌈 Dark Mode: Experience the website in a dark mode for a comfortable viewing experience in low-light conditions.',
          '🔧 Animation with GSAP: Implemented animations using GSAP to enhance the user experience.',
          '⚙️ TypeScript: Utilizes TypeScript for type safety and improved code quality.',
          '🔄 Dynamic Content: Content updates dynamically, providing a seamless and engaging browsing experience.',
        ]}
        demoLink='https://your-demo-link-here'
        codeLink='https://your-github-link-here'
        technologies={technologies}
      />
    </div>
  );
};

export default PortfolioPage;
