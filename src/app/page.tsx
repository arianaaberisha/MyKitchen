import Header from '../components/Header';
import RecipeSection from '@/components/RecipeSection';
import AboutUs from '@/components/AboutUsSection';
import Community from '@/components/CommunitySection';
import CTAsection from '@/components/CTA_Section';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <RecipeSection />
        <AboutUs />
        <Community />
        <CTAsection />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;




