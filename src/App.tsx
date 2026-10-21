import { Route, Routes } from 'react-router';
import DesignSystemPreview from './pages/DesignSystemPreview';

export default function App() {
  return <Routes><Route path="/" element={<DesignSystemPreview />} /></Routes>;
}
