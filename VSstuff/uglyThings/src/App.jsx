import React from 'react';
import Thing from "./components/Thing";
import UglyForm from './components/UglyForm';
// import uglyThingData from "./components/uglyThingData";
import { ContextProvider } from './components/ContextProvider';
import './App.css';

function App(){
    return(
        <ContextProvider>
            <UglyForm />
            <Thing />
         
        </ContextProvider>
    )
}

export default App

