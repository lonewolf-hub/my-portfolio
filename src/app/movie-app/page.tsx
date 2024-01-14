import React from 'react';
import ProjectDetail from '../core/components/projects/components/ProjectDetail';
import Navbar from '../core/components/navbar/Navbar';

const MovieApp = () => {
  const technologies = ['React', 'Styled Components', 'Vite', 'HTML', 'SCSS', 'JavaScript'];

  return (
    <div>
      <Navbar />
      <ProjectDetail
        imageSrc='/assets/projects/portfolio.png'
        heading='Vite React Movie App'
        description={[
          '🚀 Experience the speed and efficiency of Vite in the React Movie App.',
          '📽️ Explore movies with lightning-fast performance, thanks to Vite, a next-generation front-end build tool.',
          '🍿 Get detailed information about each movie, including reviews, ratings, trailers, and cast details.',
          '🎥 Watch Trailers: Users can watch trailers directly within the app for a sneak peek into the movie.',
          '📄 Movie Summary: Access small summaries providing an overview of the movie storyline.',
          '👥 Cast Information: Find out about the actors who might appear in the movie.',
          '🔍 Sort and filter movies based on various criteria, such as genre.',
          '🌐 Data Source: Utilizes the News API as a data source to fetch and render movie information.',
          "💡 Lightweight: Vite's speedy development server and optimized bundling contribute to a lightweight app.",
          '💅 Styling: Implements styled-components for styling, providing a sleek and modern user interface.',
        ]}
        demoLink='https://your-demo-link-here'
        codeLink='https://your-github-link-here'
        technologies={technologies}
      />
    </div>
  );
};

export default MovieApp;
