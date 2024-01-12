import React from 'react'
import Navbar from '../core/components/navbar/Navbar';
import ProjectDetail from '../core/components/projects/components/ProjectDetail';

const PortfolioPage = () => {
    const technologies = ['HTML', 'CSS', 'JavaScript', 'HTML canvas'];

  return (
    <div>
              <Navbar/>
          <ProjectDetail
        imageSrc='/assets/projects/portfolio.png'
        heading='Drawing Application'
        description={['📌 A small Drawing Application using HTML canvas to draw graphics.', '📌 The canvas element is only a container for graphics.',' So I\'ve used JavaScript to actually draw the graphics.', '📌 For Styling simple CSS is used.']}
        demoLink='https://shivam-vishwakarma991.github.io/Drawing-App-HTML-Canvas/'
        codeLink='https://github.com/Shivam-vishwakarma991/Drawing-App-HTML-Canvas'
        technologies={technologies}
      />
    </div>
  )
}

export default PortfolioPage
