import { useAppContext } from '../../context/AppContext'

export function Home() {
  const { theme, toggleTheme } = useAppContext()
  
  return (
    <div className={`page ${theme}`}>
      <h2>Home Page - Tema: {theme}</h2>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  )
}