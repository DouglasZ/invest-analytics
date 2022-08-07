import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Invest from './pages/Invest';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/invest" element={<Invest />} />
    </Routes>
  );
}
