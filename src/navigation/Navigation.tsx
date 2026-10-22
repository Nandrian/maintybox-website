import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeOnemain from '../pages/HomeOnemain';
import AboutMain from '../pages/AboutMain';
import ServiceMain from '../pages/ServiceMain';
import ServiceDetailsMain from '../pages/ServiceDetailsMain';
import TeamMain from '../pages/TeamMain';
import TeamDetailsMain from '../pages/TeamDetailsMain';
import ShopMain from '../pages/ShopMain';
import ShopDetailsMain from '../pages/ShopDetailsMain';
import PricingMain from '../pages/PricingMain';
import FaqMain from '../pages/FaqMain';
import PortfolioTwoMain from '../pages/PortfolioTwoMain';
import PortfolioOneMain from '../pages/PortfolioOneMain';
import PortfolioThreeMain from '../pages/PortfolioThreeMain';
import PortfolioFourMain from '../pages/PortfolioFourMain';
import PortfolioDetailsMain from '../pages/PortfolioDetailsMain';
import ContactMain from '../pages/ContactMain';
import ErrorMain from '../pages/ErrorMain';

const AppNavigation = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<HomeOnemain />} />
            <Route path="/about" element={<AboutMain />} />
            <Route path="/service" element={<ServiceMain />} />
            <Route path="/service-details" element={<ServiceDetailsMain />} />
            <Route path="/team" element={<TeamMain />} />
            <Route path="/team-details" element={<TeamDetailsMain />} />
            <Route path="/shop" element={<ShopMain />} />
            <Route path="/shop-details" element={<ShopDetailsMain />} />
            <Route path="/pricing" element={<PricingMain />} />
            <Route path="/faq" element={<FaqMain />} />
            <Route path="/portfolio-two-columns" element={<PortfolioOneMain />} />
            <Route path="/portfolio-three-columns" element={<PortfolioTwoMain />} />
            <Route path="/portfolio-four-columns" element={<PortfolioThreeMain />} />
            <Route path="/portfolio-random" element={<PortfolioFourMain />} />
            <Route path="/portfolio-details" element={<PortfolioDetailsMain />} />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="*" element={<ErrorMain />} />
         </Routes>
      </Router>
   );
};

export default AppNavigation;