import React from 'react';
import ProjectDetail from '../core/components/projects/components/ProjectDetail';
import Navbar from '../core/components/navbar/Navbar';

const AmbulanceApp = () => {
  const technologies = ['Next.js', 'TypeScript', 'MongoDB','HTML',  'TailWind CSS', 'JavaScript'];

  return (
    <div>
      <Navbar />
      <ProjectDetail
        imageSrc='/assets/projects/ambulance.png'
        heading='Ambulance Booking Application'
        description={[
          '🚑 An Ambulance Booking Application developed using Next.js and TypeScript.',
          '💡 The application serves as a platform for users to book ambulances during emergencies.',
          '🌐 Backend & Database: Next.js is utilized as both the frontend and backend, while MongoDB is used for the database.',
          '📝 User Features: Users can seamlessly book ambulances and manage their bookings through the user-friendly UI.',
          '👩‍⚕️ Admin Functionality: Admin roles have the capability to add new ambulances to the system.',
          '🔒 Secure Data: The application ensures secure storage of data using MongoDB for reliability and safety.',
          '🌈 UI/UX: Designed with a focus on providing an intuitive and visually appealing user experience.',
        ]}
        demoLink='https://your-demo-link-here'
        codeLink='https://your-github-link-here'
        technologies={technologies}
      />
    </div>
  );
};

export default AmbulanceApp;
