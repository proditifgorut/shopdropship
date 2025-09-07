import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FunnelIcon, Squares2X2Icon, ListBulletIcon } from '@heroicons/react/24/outline';
import ProductCard from '../components/common/ProductCard';
import { products, categories, brands } from '../data/mockData';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const searchQuery = searchParams.get('search') || '';
  const categoryFilter = searchParams.get('category') || '';
  const brandFilter = searchParams.get('brand') || '';
  const priceMin = searchParams.get('price_min') || '';
  const priceMax = searchParams.get('price_max') || '';

  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter) {
      filtered = filtered.filter(product => product.category.slug === categoryFilter);
    }

    // Brand filter
    if (brandFilter) {
      filtered = filtered.filter(product => product.brand.slug === brandFilter);
    }

    // Price filter
    if (priceMin) {
      filtered = filtered.filter(product => product.price >= parseFloat(priceMin));
    }
    if (priceMax) {
      filtered = filtered.filter(product => product.price <= parseFloat(priceMax));
    }

    // Sorting
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

    setFilteredProducts(filtered);
  }, [searchQuery, categoryFilter, brandFilter, priceMin, priceMax, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2"
                >
                  <FunnelIcon className="h-5 w-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={!categoryFilter}
                        onChange={() => updateFilter('category', '')}
                        className="text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm">All Categories</span>
                    </label>
                    {categories.map(category => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={categoryFilter === category.slug}
                          onChange={() => updateFilter('category', category.slug)}
                          className="text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="brand"
                        checked={!brandFilter}
                        onChange={() => updateFilter('brand', '')}
                        className="text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm">All Brands</span>
                    </label>
                    {brands.map(brand => (
                      <label key={brand.id} className="flex items-center">
                        <input
                          type="radio"
                          name="brand"
                          checked={brandFilter === brand.slug}
                          onChange={() => updateFilter('brand', brand.slug)}
                          className="text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm">{brand.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <div>
                      <input
                        type="number"
                        placeholder="Min price"
                        value={priceMin}
                        onChange={(e) => updateFilter('price_min', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Max price"
                        value={priceMax}
                        onChange={(e) => updateFilter('price_max', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
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

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'text-gray-600'}`}
                >
                  <Squares2X2Icon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-indigo-600 text-white' : 'text-gray-600'}`}
                >
                  <ListBulletIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
              }>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard product={product} viewMode={viewMode} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="h-24 w-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.881-6.084 2.328.414.192.844.327 1.285.398A6.963 6.963 0 0112 16.5c1.322 0 2.53.374 3.566 1.023-.247.158-.505.295-.773.415A5.982 5.982 0 0112 17a5.99 5.99 0 00-2.941.765M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
