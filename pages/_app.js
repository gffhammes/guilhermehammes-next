import '../styles/globals.css';
import '../styles/index.scss';
import '../components/Navbar/Navbar.scss';
import '../components/HeroSection/HeroSection.scss';
import '../components/AboutSection/AboutSection.scss';
import '../components/PortfolioSection/PortfolioSection.scss';
import '../components/ServicesSection/ServicesSection.scss';
import '../components/BenefitsSection/BenefitsSection.scss';
import '../components/ContactSection/ContactSection.scss';
import '../components/Footer/Footer.scss';



import '../components/ServicesSection/ServicesSection.scss';
import '../components/ServicesCard/ServicesCard.scss';
import '../components/SectionTitle/SectionTitle.scss';
import '../components/PortfolioSection/PortfolioSection.scss';
import '../components/PortfolioItem/PortfolioItem.scss';
import '../components/Navbar/Navbar.scss';
import '../components/HeroSection/HeroSection.scss';
import '../components/Footer/Footer.scss';
import '../components/ContactSection/ContactSection.scss';
import '../components/ContactCard/ContactCard.scss';
import '../components/Button/Button.scss';
import '../components/BenefitsSection/BenefitsSection.scss';
import '../components/BenefitsItem/BenefitsItem.scss';
import '../components/AboutSection/AboutSection.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-P3ZZ54L' });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
