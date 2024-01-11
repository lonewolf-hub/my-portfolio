import { useState, useEffect } from 'react';
import Image from 'next/image';

const DarkMode = () => {
  const setDarkmode = () => {
    document.querySelector('body')!.setAttribute('data-theme', 'dark');
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('selectedTheme', 'dark');
    }
  };

  const setLightmode = () => {
    document.querySelector('body')!.setAttribute('data-theme', 'light');
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('selectedTheme', 'light');
    }
  };

  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      setSelectedTheme(localStorage.getItem('selectedTheme'));
    }
  }, []);

  useEffect(() => {
    if (selectedTheme === 'dark') {
      setDarkmode();
    } else {
      setLightmode();
    }
  }, [selectedTheme]);

  const toggleTheme = () => {
    setSelectedTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative flex items-center space-x-2">
      <label htmlFor="darkmode-toggle" className="cursor-pointer">
        <input
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          checked={selectedTheme === 'dark'}
          className="hidden"
        />
        <div className="relative w-14 h-6 bg-gray-300 rounded-full p-1 transition duration-300 ease-in-out flex items-center shadow-md">
          <div
            className={`absolute w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
              selectedTheme === 'dark' ? 'translate-x-full' : 'translate-x-0'
            }`}
          />
          <div
            className={`shadow- absolute left-0 top-1/2 transform -translate-y-1/2 w-7 h-6 bg-yellow-400 rounded-full transition-transform ${
              selectedTheme === 'dark' ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Image src="/assets/icon/Sun.svg" alt="Sun" width={25} height={20} />
          </div>
          <div
            className={`shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 w-7 h-6 bg-gray-600 rounded-full transition-transform ${
              selectedTheme === 'dark' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image src="/assets/icon/Moon.svg" alt="Moon" width={25} height={20} />
          </div>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
