// context hook
import { useThemeContext } from "../context/ThemeContext"

export function ToggleTheme() {
  // context
  const { theme, toggleTheme } = useThemeContext();

  // expressions
  const onToggleTheme = () => {
    toggleTheme();
  }

  return (
    <section className="ToggleTheme">
      <h1>Context + State</h1>
      <button onClick={onToggleTheme}>Toggle Theme</button>
      <p>{theme}</p>
    </section>
  )
}