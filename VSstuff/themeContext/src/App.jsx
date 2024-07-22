// import React, {useContext, useState} from 'react'
// import Footer from './Components/Footer'
// import Header from './Components/Header'
// import Navbar from './Components/Navbar'
// import Button from './Components/Button'  
// import './App.css'
// import { ThemeContext } from './Components/ThemeProvider'

// function App(props) {
//   const theme = useContext(ThemeContext);

//   return (
//     <>
//     {/* <ThemeContext> */}
//       <Navbar theme={theme}/>
//       <Header theme ={theme}/>
//       <Button theme ={theme}/>
//       <Footer theme ={theme}/>
//     {/* </ThemeContext> */}
  
//     </>
//   )
// }

// export default App

import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Button from './Components/Button';  
import './App.css';
import { ThemeProvider } from './Components/ThemeProvider';

function App(props) {
  return (
    <ThemeProvider>
      <Navbar />
      <Header />
      <Button />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

