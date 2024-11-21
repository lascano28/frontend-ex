// import logo from './logo.svg';
import './App.css';
import Homepage from './Component';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <Homepage />
    </NextUIProvider>
  );
}

export default App;
