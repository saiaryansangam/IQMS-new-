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

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <ComplianceStandards />
      <CoreModules />
      <Industries />
      <RoleBasedAccess />
      <DashboardsReports />


      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
