import { useState, useEffect } from 'react';
import Image from 'next/image';

const DarkMode = () => {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>(
    () => (typeof localStorage !== 'undefined' ? (localStorage.getItem('selectedTheme') as 'light' | 'dark') || 'light' : 'light')
  );

  const setTheme = (theme: 'light' | 'dark') => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('selectedTheme', theme);
  };

  const toggleTheme = () => {
    setSelectedTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    setTheme(selectedTheme);
  }, [selectedTheme]);

  useEffect(() => {
    // Initialize UI based on stored theme
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
      setSelectedTheme(storedTheme as 'light' | 'dark');
    }
  }, []);

  useEffect(() => {
    // Update UI based on selected theme
    const darkModeToggle = document.getElementById('darkmode-toggle') as HTMLInputElement;
    if (darkModeToggle) {
      darkModeToggle.checked = selectedTheme === 'dark';
    }
  }, [selectedTheme]);

  return (
    <div className="relative flex space-x-2">
      <label htmlFor="darkmode-toggle" className="cursor-pointer">
        <input
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleTheme}
          checked={selectedTheme === 'dark'}
          className="hidden dark_mode_input"
        />
        <div className="relative w-14 h-6 rounded-full p-1 transition duration-300 ease-in-out flex items-center shadow-md dark_mode_label">
          <div
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-7 h-6 rounded-full transition-transform ${
              selectedTheme === 'dark' ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Image
              src="/assets/icon/Sun.svg"
              alt="Sun"
              width={25}
              height={20}
              className={`mx-auto my-auto ${
                selectedTheme === 'dark' ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
          <div
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-7 h-6 rounded-full transition-transform ${
              selectedTheme === 'dark' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src="/assets/icon/Moon.svg"
              alt="Moon"
              width={25}
              height={20}
              className={`mx-auto my-auto ${
                selectedTheme === 'dark' ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
