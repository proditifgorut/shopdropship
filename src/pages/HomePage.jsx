import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CollectionSection from '../components/home/CollectionSection';
import BrandPartners from '../components/home/BrandPartners';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <CollectionSection />
      <BrandPartners />
    </div>
  );
};

export default HomePage;
