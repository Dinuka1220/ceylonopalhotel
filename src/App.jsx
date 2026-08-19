import React, { useState } from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureRibbon from './components/FeatureRibbon';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import AboutUsSection from './components/AboutUsSection';
import EnquiryModal from './components/EnquiryModal';

import { ArrowUp, Phone, Mail, MapPin, Trees } from 'lucide-react';
import { FacebookIcon } from './components/SocialIcons';
import OurFacilities from "./components/OurFacilities"
import RoomTypes from './components/RoomTypes';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenImage = (url, title) => {
    setSelectedImage({ url, title });
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 font-sans antialiased selection:bg-[#b08f5a] selection:text-white">

      {/* Main Content Area */}
      <main className="grow">

        {/*
          HERO WRAPPER — position:relative so the absolutely-positioned
          header overlays the hero background, matching the Figma design
          where nav links float on top of the villa image.
        */}
        <div className="relative overflow-hidden">

          {/* ── COCONUT TREE BACKGROUND IMAGE ──
               Sits at the very back (z-0), spanning behind both the
               absolute header and the hero content below it.
               Matches the reference image: faint palm silhouettes
               visible behind the nav and hero text. */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{ backgroundImage: `url('/images/herobg.png')` }}
          >
            {/* Light wash overlay so the image feels like a subtle background */}
            <div className="absolute inset-0 bg-white/0"></div>
          </div>

          {/* Header sits ABSOLUTE on top of hero */}
          <Header onOpenEnquiry={() => setIsEnquiryOpen(true)} />

          {/* SECTION ONE: Hero & Luxury Living (renders behind header) */}
          <HeroSection
            onOpenEnquiry={() => setIsEnquiryOpen(true)}
            onSelectImage={handleOpenImage}
          />

        </div>

        {/* Intersecting Feature Ribbon */}
        <FeatureRibbon />

        {/* SECTION TWO: Why Choose Us */}
        <WhyChooseUsSection
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onSelectImage={handleOpenImage}
        />

        {/* SECTION TWO (Continued): About Us & Circular Image Collage */}
        <AboutUsSection
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onSelectImage={handleOpenImage}
        />
        <OurFacilities />
        <RoomTypes />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>



      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />



    </div>
  );
}
