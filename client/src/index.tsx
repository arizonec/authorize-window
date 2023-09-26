import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Paths } from './paths';
import './index.css';

const router = createBrowserRouter([ //Проверить, это то же самое что и Routes, как в реакт пицца или нет?
    {
        path: Paths.home,
        element: <h1>Home</h1>
    },
    {
        path: Paths.login,
        element: <Login />
    },
    {
        path: Paths.register,
        element: <Register />
    }
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
