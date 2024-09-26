import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import ControlPanel from './ControlPanel';
import LoadingAnimation from './LoadingAnimation';

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <ControlPanel />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default AppContent;