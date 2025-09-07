import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  ShareIcon, 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useWishlist } from '../contexts/WishlistContext';
import { products } from '../data/mockData';
import ProductCard from '../components/common/ProductCard';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    const foundProduct = products.find(p => p.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
      // Get related products from same category
      const related = products
        .filter(p => p.category.id === foundProduct.category.id && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    } else {
      navigate('/products');
    }
  }, [slug, navigate]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handlePurchase = () => {
    window.open(product.affiliateLink, '_blank');
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in this product: ${product.name}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
            <li className="text-gray-400">/</li>
            <li><a href="/products" className="text-gray-500 hover:text-gray-700">Products</a></li>
            <li className="text-gray-400">/</li>
            <li><a href={`/category/${product.category.slug}`} className="text-gray-500 hover:text-gray-700">{product.category.name}</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-indigo-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand and Category */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full">{product.brand.name}</span>
              <span>{product.category.name}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{product.rating}</span>
              </div>
              <span className="text-gray-400">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      Rp {product.originalPrice.toLocaleString('id-ID')}
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded-full">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <span className="text-sm text-gray-600">Dimensions:</span>
                  <p className="font-medium">{product.specifications.dimensions}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Material:</span>
                  <p className="font-medium">{product.specifications.material}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Weight:</span>
                  <p className="font-medium">{product.specifications.weight}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Color:</span>
                  <p className="font-medium">{product.specifications.color}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6">
              <button
                onClick={handlePurchase}
                className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Buy at {product.brand.name}</span>
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Chat via WhatsApp
              </button>

              <div className="flex space-x-4">
                <button
                  onClick={handleWishlistToggle}
                  className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  {inWishlist ? (
                    <HeartSolidIcon className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5" />
                  )}
                  <span>{inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  <ShareIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <ProductCard product={relatedProduct} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
