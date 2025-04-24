import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { Wordle } from './pages/wordle/wordle';
import { Hints } from './pages/hints/hints';


let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/wordle",
        Component: Wordle,
      },
      {
        path: "/hints",
        Component: Hints,
      },
      {
        path: "/**",
        element: <div>Страница не найдена</div>
      }
    ]
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

