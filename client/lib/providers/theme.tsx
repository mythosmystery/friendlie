import { createContext, useContext, useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeContext = createContext(null as any as ThemeType);

export type ThemeType = {
   dark: boolean;
   toggleDark: () => void;
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
   const [dark, setDark] = useState(false);

   const toggleDark = () => {
      localStorage.setItem('dark', JSON.stringify(!dark));
      setDark(!dark);
   };

   useEffect(() => {
      setDark(JSON.parse(localStorage.getItem('dark') as string) || false);
   }, []);

   return (
      <ThemeContext.Provider value={{ dark, toggleDark }}>
         <div className={dark ? 'dark' : ''}>
            <div className='absolute z-10'>
               <button
                  className='fixed top-4 left-4 p-2.5 dark:text-black text-foreground text-xl bg-background dark:bg-foreground rounded-full shadow-md'
                  onClick={toggleDark}
               >
                  {dark ? <FiSun /> : <FiMoon />}
               </button>
               {children}
            </div>
            <div className='fixed top-0 left-0 z-0 w-full h-full dark:bg-background bg-foreground'></div>
         </div>
      </ThemeContext.Provider>
   );
};
