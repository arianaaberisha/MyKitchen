import Header from '../components/Header';
import RecipeSection from '@/components/RecipeSection';
import AboutUs from '@/components/AboutUsSection';
import Community from '@/components/CommunitySection';
import CTAsection from '@/components/CTA_Section';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Recipedia
        </h1>
        <p className="text-lg text-gray-600 hover:text-gray-800 transition-colors">
          Your recipe discovery platform
        </p>
      </div>
    </main>
  );
}




