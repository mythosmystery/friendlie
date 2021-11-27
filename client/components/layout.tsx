import React from 'react';
import { useTheme } from '../lib/providers/theme';
import { FiSun, FiMoon } from 'react-icons/fi';

const Layout: React.FC = ({ children }) => {
   const { dark, toggleDark } = useTheme();
   return (
      <div className='absolute w-screen min-h-screen py-2 overflow-y-auto overflow-x-hidden scrollbar-hide'>
         {children}
         <button
            className='fixed top-2 left-2 p-2.5 dark:text-black text-foreground text-xl bg-background dark:bg-foreground rounded-full shadow-md'
            onClick={toggleDark}
         >
            {dark ? <FiSun /> : <FiMoon />}
         </button>
      </div>
   );
};
export default Layout;
