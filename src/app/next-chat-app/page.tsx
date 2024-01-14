import React from 'react';
import Navbar from '../core/components/navbar/Navbar';
import ProjectDetail from '../core/components/projects/components/ProjectDetail';

const NextChatApp = () => {
  const technologies = ['Next.js', 'Firebase', 'HTML', 'TailWind CSS', 'JavaScript'];

  return (
    <div>
      <Navbar />
      <ProjectDetail
        imageSrc='/assets/projects/nextchatapp1.png'
        heading='Next.js Chat Application'
        description={[
          '🚀 A real-time chat application built with Next.js and Firebase.',
          '🛠 Utilizes Firebase services for authentication, storage, and real-time database (Firestore).',
          '📝 Features include emoji support, message editing, and deletion.',
          '📷 Users can send images in their chat conversations.',
          '👤 Custom Avatars: Users can upload custom avatars from their profiles.',
          '🟢 Online/Offline Status: Displays whether a user is online or offline.',
          '🔒 Blocking Users: Users can block and unblock others as needed.',
          '📬 Unread Message UI: Delivers a wonderful UI design for handling unread messages.',
        ]}
        demoLink='https://your-demo-link-here'
        codeLink='https://your-github-link-here'
        technologies={technologies}
      />
    </div>
  );
};

export default NextChatApp;
