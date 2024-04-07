import React from 'react';
import ProjectDetail from '../core/components/projects/components/ProjectDetail';
import Navbar from '../core/components/navbar/Navbar';

const DrawingApp = () => {
  const technologies = ['React', 'HTML Canvas', 'CSS', 'JavaScript'];

  return (
    <div>
      <Navbar />
      <ProjectDetail
        imageSrc='/assets/projects/drawingapp.png'
        heading='Drawing Application with Html Canvas'
        projectName='Drawing Fun App'
        projectStack='Next Js'
        description={[
          '✏️ A Drawing Application developed using React, allowing users to unleash their creativity digitally.',
          '🎨 Features a variety of drawing tools including multiple brushes such as pencil, spray, shapes like circles, rectangles, and more.',
          '🖌️ Color Selection: Users can choose from a wide range of colors to express their imagination.',
          '⏪ Undo/Redo Functionality: Provides the ability to undo and redo actions, giving users full control over their creative process.',
          '💾 Image Download: Allows users to save their artwork as a PNG image for future use or sharing.',
          '🚫 Eraser Tool: Includes an eraser option for precise editing and corrections on the canvas.',
          '📢 Toast Notifications: Interactive toast notifications enhance user experience and provide feedback on actions.',
          '📝 Share Feedback: Users can share their feedback or suggest changes to improve the app further.',
          'Let your creativity flow and enjoy the endless possibilities of digital art!',
        ]}
        demoLink='https://drawing-canvas-app.vercel.app/'
        codeLink='https://github.com/lonewolf-hub/signature-app'
        technologies={technologies}
      />
    </div>
  );
};

export default DrawingApp;
