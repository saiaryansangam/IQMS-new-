import Header from './components/Header';
import Hero from './components/Hero';
import ComplianceStandards from './components/ComplianceStandards';
import CoreModules from './components/CoreModules';
import HowItWorks from './components/HowItWorks';
import RoleBasedAccess from './components/RoleBasedAccess';
import DashboardsReports from './components/DashboardsReports';
import Industries from './components/Industries';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
<<<<<<< HEAD
import { useScrollAnimations } from './hooks/useScrollAnimations';

function App() {
  // Initialize scroll animations for parallax effects
  useScrollAnimations();

=======

function App() {
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
<<<<<<< HEAD
      <HowItWorks />
      <WhyChoose />
      <ComplianceStandards />
      <CoreModules />
      <Industries />
      <RoleBasedAccess />
      <DashboardsReports />
=======
      <ComplianceStandards />
      <CoreModules />
      <HowItWorks />
      <RoleBasedAccess />
      <DashboardsReports />
      <Industries />
      <WhyChoose />
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
