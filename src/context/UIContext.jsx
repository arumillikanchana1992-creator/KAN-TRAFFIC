import React, { createContext, useState, useContext } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCollapse = () => setIsSidebarCollapsed(!isSidebarCollapsed);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <UIContext.Provider value={{ 
      isSidebarOpen, 
      isSidebarCollapsed, 
      toggleSidebar, 
      toggleCollapse, 
      closeSidebar 
    }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
