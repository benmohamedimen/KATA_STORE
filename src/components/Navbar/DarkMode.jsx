import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../features/themeSlice'; // Import des actions
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme); // Récupération du thème depuis Redux
  const element = document.documentElement;
  console.log('dsdfsdfsdfsdfsd', theme);
  React.useEffect(() => {
    // Appliquer les classes en fonction du thème dans Redux
    if (theme === 'dark') {
      element.classList.add('dark');
      element.classList.remove('light');
    } else {
      element.classList.add('light');
      element.classList.remove('dark');
    }
  }, [theme]); // Se déclenche uniquement lorsque le thème change

  return (
    <div className="relative h-6 w-12">
      <img
        onClick={() => dispatch(toggleTheme())}
        src={LightButton}
        alt="Light Mode"
        className={`w-full h-full cursor-pointer absolute transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        onClick={() => dispatch(toggleTheme())}
        src={DarkButton}
        alt="Dark Mode"
        className={`w-full h-full cursor-pointer absolute transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default DarkMode;
