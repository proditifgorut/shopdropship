import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useWishlist } from '../contexts/WishlistContext';
import ProductCard from '../components/common/ProductCard';

const WishlistPage = () => {
  const { wishlistItems } = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Wishlist</h1>
          <p className="text-gray-600">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-6">
              <HeartIcon className="h-24 w-24 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-8">
              Start browsing our products and save your favorites here
            </p>
            <Link
              to="/products"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
