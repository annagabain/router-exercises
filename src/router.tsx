import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NotFound } from './components/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'old-home', element: <Navigate to="/" /> },
            //   404 route
            { path: '*', element: <NotFound /> },
        ],
    },

]);

