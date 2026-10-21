import { Route, Routes } from 'react-router';
import Header from './components/navigation/Header';
import Hero from './components/hero/Hero';
import RoutePreview from './pages/RoutePreview';

export default function App() {
  return <><Header /><Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/portfolio" element={<RoutePreview />} />
    <Route path="/services" element={<RoutePreview />} />
    <Route path="/a-propos" element={<RoutePreview />} />
    <Route path="/contact" element={<RoutePreview />} />
    <Route path="*" element={<RoutePreview />} />
  </Routes></>;
}
