import { createContext, useContext, type ReactNode, useState, useEffect } from 'react';

/**
 * Context para estado global de la aplicación
 */

interface AppContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Aplicar clase de tema al body cuando cambie
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext debe usarse dentro de un AppProvider');
  }
  return context;
}
