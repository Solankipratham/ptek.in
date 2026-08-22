import React, { useEffect, useState } from 'react';

import AppRoutes from './Routes';
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2-second fake loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : <AppRoutes />}
    </>
  );
};

export default App;
