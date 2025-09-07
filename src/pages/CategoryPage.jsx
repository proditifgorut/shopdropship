import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/common/ProductCard';
import { products, categories } from '../data/mockData';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [category, setCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    const foundCategory = categories.find(c => c.slug === categorySlug);
    if (foundCategory) {
      setCategory(foundCategory);
      
      let filtered = products.filter(p => p.category.slug === categorySlug);
      
      // Sort products
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'price_low':
            return a.price - b.price;
          case 'price_high':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          case 'newest':
            return b.id - a.id;
          default:
            return a.name.localeCompare(b.name);
        }
      });
      
      setCategoryProducts(filtered);
    }
  }, [categorySlug, sortBy]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
              <p className="text-xl opacity-90">
                Discover our curated {category.name.toLowerCase()} collection
              </p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {category.name} Products
              </h2>
              <p className="text-gray-600">
                {categoryProducts.length} products available
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              <label className="text-sm font-medium text-gray-700 mr-2">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="name">Name</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="h-24 w-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-6a3 3 0 00-3 3s-3-3-3-3H4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Check back later for new products in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
