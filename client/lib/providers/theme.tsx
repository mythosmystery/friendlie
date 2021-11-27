import { createContext, useContext, useEffect, useState } from 'react';

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
            <div className='absolute z-10'>{children}</div>
            <div className='absolute z-0 w-screen h-screen dark:bg-background bg-foreground'></div>
         </div>
      </ThemeContext.Provider>
   );
};
