import React from 'react';
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className='flex rounded-lg shadow-md shadow-gray-600 p-5 cursor-pointer hover:scale-110 ease-in duration-300 bg-accentColor'>
        <Icon className="text-textColor" />
      </div>
    </a>
  );
}

const SocialMediaLinks: React.FC = () => {
  const socialLinks: SocialLinkProps[] = [
    { href: "https://www.linkedin.com/in/jai-shukla-56041016a/", icon: RiLinkedinFill },
    { href: "https://github.com/lonewolf-hub", icon: AiFillGithub },
    { href: "https://twitter.com/JaiShukla9128", icon: AiOutlineTwitter },
    { href: "mailto: iamshuklajai@gmail.com", icon: AiOutlineMail },
  ];

  return ( 
    <div className='flex items-center gap-10 md:gap-12 lg:gap-14 py-4 '>
      {socialLinks.map((link, index) => (
        <SocialLink key={index} href={link.href} icon={link.icon} />
      ))}
    </div>
  );
}

export default SocialMediaLinks;
