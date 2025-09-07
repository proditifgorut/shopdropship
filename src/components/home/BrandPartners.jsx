import React from 'react';
import { motion } from 'framer-motion';
import { brands } from '../../data/mockData';

const BrandPartners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with leading brands to bring you the finest selection of home and living products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Interested in partnering with us? We're always looking for quality brands to join our platform.
          </p>
          <a
            href="mailto:partnerships@shopcurate.com"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
