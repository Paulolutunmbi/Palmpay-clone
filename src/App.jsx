import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import FeaturesSection from './components/FeaturesSection';
import FreeTransfersSection from './components/FreeTransfersSection';
import SavingsSection from './components/SavingsSection';
import DebitCardSection from './components/DebitCardSection';
import TrustSection from './components/TrustSection';
import ReviewsSection from './components/ReviewsSection';
import InsuranceSection from './components/InsuranceSection';
import CashbackSection from './components/CashbackSection';
import CreditSection from './components/CreditSection';
import AppDownloadSection from './components/AppDownloadSection';
import JoinBannerSection from './components/JoinBannerSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <FreeTransfersSection />
      <SavingsSection />
      <DebitCardSection />
      <TrustSection />
      <ReviewsSection />
      <InsuranceSection />
      <CashbackSection />
      <CreditSection />
      <AppDownloadSection />
      <JoinBannerSection />
      <Footer />
    </>
  );
}

export default App;