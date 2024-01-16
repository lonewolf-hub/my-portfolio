import React from 'react';
import Navbar from '../core/components/navbar/Navbar';
import ProjectDetail from '../core/components/projects/components/ProjectDetail';

const SnipitAdmin = () => {
  const technologies = ['Next.js', 'TypeScript', 'HTML', 'Tailwind CSS', 'Firebase', 'React Select'];

  return (
    <div>
      <Navbar />
      <ProjectDetail
        imageSrc='/assets/projects/snipit-admin.png'
        projectName='Snipit Admin'
        projectStack='Next JS'
        heading='Admin Panel For Feeding And Managing the News.'
        description={[
          '🚀 An Admin Panel built with Next.js, TypeScript, and Tailwind CSS.',
          '📰 Manage and feed news into the database with ease.',
          '📸 Image Upload: Integrates with Firebase for seamless image uploading.',
          '📝 Features include editing, deleting, and scheduling news.',
          '🔄 Utilizes interceptors for making API calls seamlessly.',
          '📅 Bulk scheduling and advanced news filtering options available.',
          '✏ If a news item is in draft state, you can edit and set it to the active state.',
          '🔀 Conditional Dropdowns: Implements React Select for rendering custom dropdowns conditionally.',
          '🔗 Unfortunately, I cannot provide public access to the codebase or a live demo for this project,',
          'as it is owned by the company where I completed my internship.',
        ]}
        hidden={true}
        technologies={technologies}
      />
    </div>
  );
};

export default SnipitAdmin;
