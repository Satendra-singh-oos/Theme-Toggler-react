import React from 'react'
import { useGlobalContext } from '../Context/ThemeContext'

const HomePage = () => {

   const { theme, toggleTheme} = useGlobalContext()
  return (
    <div className={`homepage ${theme}`}>
        <h1>Theme Switcher in ReactJs</h1>

        <nav>
            <ul>
                <a href='https://www.linkedin.com/in/satendra-singh1325/'>Linkedin</a>
                <a href='https://github.com/Satendra-singh-oos'>Github</a>
            </ul>
        </nav>

          {/* <button onClick={toggleTheme}> {theme}</button> */}
        <button onClick={()=>{toggleTheme('light')}}>Light</button>
        <button onClick={()=>{toggleTheme('dark')}}>Dark</button>
        <button onClick={()=>{toggleTheme('blue')}}>Blue</button>
        <button onClick={()=>{toggleTheme('green')}}>Green</button>
        <button onClick={()=>{toggleTheme('pink')}}>Pink</button>

        

        <footer>
        <p>Theme <span>Switcher</span> 2023 ©️ Build-By <span>Satendra Singh</span> 😃</p>
        </footer>
    </div>
  )
}

export default HomePage