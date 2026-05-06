import Hero from '@/components/sections/Hero';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturedReleases from '@/components/sections/FeaturedReleases';
import StudioIdentityStrip from '@/components/sections/StudioIdentityStrip';
import AlbumUniverse from '@/components/sections/AlbumUniverse';
import Services from '@/components/sections/Services';
import AIConsolePreview from '@/components/sections/AIConsolePreview';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StudioIdentityStrip />
      <FeaturedReleases />
      <AlbumUniverse />
      <Services />
      <AIConsolePreview />
      <Footer />
    </>
  );
}
