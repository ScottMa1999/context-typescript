import './App.css'

// components
import { ToggleTheme } from './compnents/ToggleTheme'
import { DisplayProduct } from './compnents/DisplayProduct'

// context provider
import { ThemeContextProvider } from './context/ThemeContext'
import { ProductContextProvider } from './context/ProductContext'

function App() {

  return (
    <section className='App'>
      <ThemeContextProvider>
        <section className='context-state'>
          <ToggleTheme />
        </section>
      </ThemeContextProvider>
      <ProductContextProvider>
        <section className='context-reducer'>
          <DisplayProduct />
        </section>
      </ProductContextProvider>
    </section>
  )
}

export default App
