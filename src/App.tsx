import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RandomTask } from 'pages/RandomTask';
import { List } from 'pages/List';
import { Menu } from 'components/Menu';
import { ErrorBoundary } from 'components/ErrorBoundary';

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
    <Menu />
    <Routes>
      <Route index element={<RandomTask />} />
      <Route path="/list" element={<List />} />
    </Routes>
    </ErrorBoundary>
  </BrowserRouter>
);
