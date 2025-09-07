import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  const addToWishlist = (product) => {
    const newWishlist = [...wishlistItems, product];
    setWishlistItems(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const removeFromWishlist = (productId) => {
    const newWishlist = wishlistItems.filter(item => item.id !== productId);
    setWishlistItems(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
