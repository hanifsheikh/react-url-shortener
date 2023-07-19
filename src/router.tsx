import { createBrowserRouter } from 'react-router-dom';

import Entry from './pages/Entry';
import List from './pages/List';
import Edit from './pages/Edit';
import Root from './pages/Root';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Entry />,
      },
      {
        path: '/list',
        element: <List />,
      },
      {
        path: '/edit/:id',
        element: <Edit />,
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
