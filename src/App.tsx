import { Route, Routes } from 'react-router';
import Header from './components/navigation/Header';
import RoutePreview from './pages/RoutePreview';

export default function App() {
  return <><Header /><Routes>
    <Route path="/" element={<RoutePreview />} />
    <Route path="/portfolio" element={<RoutePreview />} />
    <Route path="/services" element={<RoutePreview />} />
    <Route path="/a-propos" element={<RoutePreview />} />
    <Route path="/contact" element={<RoutePreview />} />
    <Route path="*" element={<RoutePreview />} />
  </Routes></>;
}
