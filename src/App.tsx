import './App.css';
import { NhostReactProvider } from '@nhost/react';
import { nhost } from './utils/nhost';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <NhostReactProvider nhost={nhost}>
        <AppRouter>
        </AppRouter>
    </NhostReactProvider>
  );
}

function AppRouter() {
    return (
        <Routes>
            <Route></Route>
        </Routes>
    );
}

export default App;
