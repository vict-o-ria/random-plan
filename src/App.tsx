import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RandomTask } from 'pages/RandomTask';
import { List } from 'pages/List';
import { Menu } from 'components/Menu';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { useEffect, useState } from 'react';

export const App = () => {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const offlineListener = () => {
      if (navigator.onLine) {
        setOffline(false);
      } else {
        setOffline(true);
      }
    };
    window.addEventListener('offline', offlineListener);
    return () => {
      window.removeEventListener('offline', offlineListener);
    };
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Menu />
        {offline ? (
          <h1>App is offline. Check your connection</h1>
        ) : (
          <Routes>
            <Route index element={<RandomTask />} />
            <Route path="/list" element={<List />} />
          </Routes>
        )}
      </ErrorBoundary>
    </BrowserRouter>
  );
};
