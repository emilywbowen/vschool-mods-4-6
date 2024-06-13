import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(<App />)


// What it looked like on themeContext: 
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import {ThemeProvider} from "./Components/ThemeProvider.jsx"

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)

// root.render(
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//     )