import React from 'react';
import ProjectDetail from '../core/components/projects/components/ProjectDetail';
import Navbar from '../core/components/navbar/Navbar';

const EcommercePage = () => {
  const technologies = ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS', 'React Hook Form', 'HTML', 'CSS', 'JavaScript'];

  return (
    <div>
      <Navbar />
      <ProjectDetail
        imageSrc='/assets/projects/banner1.png'
        projectName='E-Commerce App'
        projectStack='React JS'
        heading='E Commerce App on MERN-Stack'
        description={[
          '🛍 A feature-rich E-commerce Application developed using the MERN (MongoDB, Express.js, React, Node.js) stack.',
          '🌐 Backend & Database: Node.js and Express.js power the backend, MongoDB serves as the database for storing product information.',
          '🔒 User Authentication: Implemented secure user authentication and authorization for protecting user data and transactions.',
          '💳 Payment Gateway: Integrated Stripe as the payment gateway for seamless and secure transactions.',
          '🛒 Product Management: Admins have the capability to add, edit, and update products, including managing product and payment states.',
          '🔄 Real-time Updates: Admins can manually update the state of products and payment statuses in real-time.',
          '🛠 Scalable Code: The application is built with scalability in mind, ensuring smooth maintenance and future enhancements.',
          '🛒 User Experience: Users can easily filter, add products to the cart, and place orders after providing necessary address and payment details.',
          '🎨 Styling: Tailwind CSS is used for styling, providing a clean and responsive design for an enhanced user interface.',
          '📝 Form Handling: Utilized React Hook Form for efficient and performant form handling and validation.',
          'Got questions or just want to chat superhero stuff? I’m all ears—ready to spill the beans on our tech superheroics!',

        ]}
        demoLink='https://mern-ecommerce-brown.vercel.app/login'
        codeLink='https://github.com/lonewolf-hub/mernecommerceapp'
        technologies={technologies}
      />
    </div>
  );
};

export default EcommercePage;
