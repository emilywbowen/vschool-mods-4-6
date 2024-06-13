import React from 'react';
import Thing from "./components/Thing";
import UglyForm from './components/UglyForm';
// import uglyThingData from "./components/uglyThingData";
import { ContextProvider } from './components/ContextProvider';
import './App.css';

function App(){
    return(
        <ContextProvider>
            <Thing />
            <UglyForm />
        </ContextProvider>
    )
}

export default App



// example from themeContext:

// function App(props) {
//   return (
//     <ThemeProvider>
//       <Navbar />
//       <Header />
//       <Button />
//       <Footer />
//     </ThemeProvider>
//   );
// }

// export default App;

