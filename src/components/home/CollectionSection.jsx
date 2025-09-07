import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { collections } from '../../data/mockData';

const CollectionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Curated Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover thoughtfully curated product collections designed to inspire your home transformation
          </p>
        </div>

        <div className="space-y-16">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Collection Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                    <p className="text-lg opacity-90">{collection.description}</p>
                  </div>
                </div>
              </div>

              {/* Collection Products */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{collection.description}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {collection.products.slice(0, 4).map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.slug}`}
                      className="group block"
                    >
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Rp {product.price.toLocaleString('id-ID')}
                      </p>
                    </Link>
                  ))}
                </div>

                <Link
                  to={`/category/${collection.products[0]?.category.slug}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  Explore Collection
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
