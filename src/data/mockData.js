import { faker } from '@faker-js/faker';

// --- CURATED DATA FOR REALISM ---

const imagePool = {
  'living-room': ['5_t4Gmh0I-g', 'j72-6fU8g-c', 'v4e3JI7DDHI', 'yS0-yA9y-A', '1b9K_F4V2sA'],
  'bedroom': ['sYct0m_n_gI', 'aWXV1KqZ14E', 'NodtnCsZ5fk', 'mGNxGmj_g6E', 'fQ5b1qA1y3E'],
  'kitchen-dining': ['b_V_mpA8hso', 'YqbvabE8L_A', '3D43Gf2o2iA', '2s6ORa-pY2I', 'vA1L1jRTM70'],
  'home-decor': ['P6Qv5p6m3gE', 'behzg4wKgJg', 'w7Z3uF900eA', 'c1rfraKxM4s', 'W1B7Lks4pI4'],
  'storage': ['Z1g24P932P0', 'ReU24sL7u_M', 'r0K_2-pWnI8', 'Z1g24P932P0', 'tHXX4-QASqg'],
  'lighting': ['b21Ty33CqVs', 'f9qZuKoZ_4E', 'jJT2b28N-Mw', 'MRMWmQ4A1c4', 's8ptl0MXbPI'],
  'office': ['js8-f23J0l0', 'vVIzY3g3oSA', '5h_d-nLho-Y', 'Fp6gC59a_B8', 'f2ar0ltTzzg'],
  'outdoor': ['gKk9rpyi_dA', '6zNop1x02d4', 'v4e3JI7DDHI', 'OQo5l14022c', 'yS0-yA9y-A'],
};

const productNameTemplates = {
  'living-room': [
    'Modern {material} Sofa',
    'Minimalist {material} Coffee Table',
    'Velvet Accent Chair',
    'Scandinavian TV Console',
    'Plush Sectional Couch'
  ],
  'bedroom': [
    '{material} Bed Frame with Headboard',
    'Linen Duvet Cover Set',
    'Solid Wood Nightstand',
    'Memory Foam Mattress',
    '6-Drawer Dresser'
  ],
  'kitchen-dining': [
    'Marble Top Dining Table',
    'Upholstered Dining Chair Set',
    'Acacia Wood Cutting Board',
    '16-Piece Dinnerware Set',
    'Stainless Steel Cookware Set'
  ],
  'home-decor': [
    'Abstract Canvas Wall Art',
    'Ceramic Vase Set',
    'Geometric Throw Pillow',
    'Faux Ficus Tree',
    'Decorative Metal Tray'
  ],
  'storage': [
    '5-Tier Bookshelf',
    'Woven Rattan Basket',
    'Entryway Storage Bench',
    'Floating Wall Shelves',
    'Fabric Storage Ottoman'
  ],
  'lighting': [
    'Tripod Floor Lamp',
    'Industrial Pendant Light',
    'Dimmable LED Table Lamp',
    'Modern Brass Chandelier',
    'Smart LED Light Strip'
  ],
  'office': [
    'Ergonomic Mesh Office Chair',
    'Electric Standing Desk',
    'Leather Desk Pad',
    'Dual Monitor Stand',
    'Minimalist Desk Lamp'
  ],
  'outdoor': [
    'Wicker Patio Conversation Set',
    'Outdoor String Lights',
    'Weather-Resistant Lounge Chair',
    'Acacia Wood Outdoor Dining Table',
    'Large Patio Umbrella'
  ],
};

const getRandomImage = (categorySlug, index) => {
  const pool = imagePool[categorySlug] || imagePool['home-decor'];
  const photoId = pool[index % pool.length];
  return `https://images.unsplash.com/photo-${photoId}?w=600&h=600&fit=crop`;
};

// --- BASE DATA ---

export const categories = [
  { id: 1, name: 'Living Room', slug: 'living-room', icon: '🛋️', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
  { id: 2, name: 'Bedroom', slug: 'bedroom', icon: '🛏️', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop' },
  { id: 3, name: 'Kitchen & Dining', slug: 'kitchen-dining', icon: '🍽️', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
  { id: 4, name: 'Home Decor', slug: 'home-decor', icon: '🖼️', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=300&fit=crop' },
  { id: 5, name: 'Storage', slug: 'storage', icon: '📦', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
  { id: 6, name: 'Lighting', slug: 'lighting', icon: '💡', image: 'https://images.unsplash.com/photo-1507435011033-a8a27a3b346c?w=400&h=300&fit=crop' },
  { id: 7, name: 'Office', slug: 'office', icon: '🖥️', image: 'https://images.unsplash.com/photo-1612810807520-987cb323b047?w=400&h=300&fit=crop' },
  { id: 8, name: 'Outdoor', slug: 'outdoor', icon: '🌳', image: 'https://images.unsplash.com/photo-1587328285663-3b42d5045de8?w=400&h=300&fit=crop' },
];

export const brands = [
  { id: 1, name: 'Informa', slug: 'informa', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=INFORMA' },
  { id: 2, name: 'Asco', slug: 'asco', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=ASCO' },
  { id: 3, name: 'Lumin', slug: 'lumin', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=Lumin' },
  { id: 4, name: 'Terra', slug: 'terra', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=Terra' },
  { id: 5, name: 'Fjord', slug: 'fjord', logo: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/120x60/1f2937/ffffff?text=Fjord' },
];

export const heroBanners = [
  { id: 1, title: 'Elevate Your Space', subtitle: 'Up to 40% off on designer furniture', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop', link: '/products?sale=true' },
  { id: 2, title: 'The Minimalist Collection', subtitle: 'Clean lines, modern design, pure tranquility', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=600&fit=crop', link: '/category/living-room' },
  { id: 3, title: 'Outdoor Living, Perfected', subtitle: 'Create your dream patio space', image: 'https://images.unsplash.com/photo-1587328285663-3b42d5045de8?w=1200&h=600&fit=crop', link: '/category/outdoor' },
];

// --- PRODUCT GENERATION ---

const generateProduct = (id) => {
  const category = faker.helpers.arrayElement(categories);
  const brand = faker.helpers.arrayElement(brands);
  
  const nameTemplate = faker.helpers.arrayElement(productNameTemplates[category.slug]);
  const productName = nameTemplate.replace('{material}', faker.commerce.productMaterial());
  
  const price = parseFloat(faker.commerce.price({ min: 50, max: 2000, dec: 0 }));
  const onSale = faker.datatype.boolean(0.4);
  const originalPrice = onSale ? price * faker.number.float({ min: 1.2, max: 1.8 }) : price;

  return {
    id,
    name: productName,
    slug: faker.helpers.slugify(productName).toLowerCase() + `-${id}`,
    description: faker.lorem.paragraphs(2),
    price: parseFloat(price.toFixed(2)),
    originalPrice: parseFloat(originalPrice.toFixed(2)),
    images: [
      getRandomImage(category.slug, 0),
      getRandomImage(category.slug, 1),
      getRandomImage(category.slug, 2),
      getRandomImage(category.slug, 3),
    ],
    category: category,
    brand: brand,
    rating: parseFloat(faker.number.float({ min: 3.8, max: 5, precision: 0.1 }).toFixed(1)),
    reviewCount: faker.number.int({ min: 15, max: 500 }),
    affiliateLink: `https://www.${brand.slug}.com/product/${id}`,
    sku: faker.string.alphanumeric({ length: 8, casing: 'upper' }),
    inStock: faker.datatype.boolean(0.9),
    isFeatured: faker.datatype.boolean(0.3),
    isNew: faker.date.recent() > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    onSale,
    specifications: {
      dimensions: `${faker.number.int({ min: 50, max: 200 })}cm x ${faker.number.int({ min: 50, max: 200 })}cm x ${faker.number.int({ min: 50, max: 200 })}cm`,
      material: faker.commerce.productMaterial(),
      weight: `${faker.number.float({ min: 1, max: 50, precision: 0.1 }).toFixed(1)} kg`,
      color: faker.color.human(),
      assembly_required: faker.datatype.boolean(),
    }
  };
};

export const products = Array.from({ length: 100 }, (_, index) => generateProduct(index + 1));

// --- DERIVED DATA ---

export const collections = [
  {
    id: 1,
    title: 'Minimalist Living Room',
    description: 'Clean lines and neutral tones for a peaceful home.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    products: products.filter(p => p.category.slug === 'living-room').slice(0, 4)
  },
  {
    id: 2,
    title: 'Cozy Bedroom Sanctuary',
    description: 'Create your perfect space for rest and relaxation.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    products: products.filter(p => p.category.slug === 'bedroom').slice(0, 4)
  },
  {
    id: 3,
    title: 'Modern Kitchen Essentials',
    description: 'Functional and stylish solutions for your culinary adventures.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    products: products.filter(p => p.category.slug === 'kitchen-dining').slice(0, 4)
  },
  {
    id: 4,
    title: 'Productive Home Office',
    description: 'Design a workspace that inspires focus and creativity.',
    image: 'https://images.unsplash.com/photo-1612810807520-987cb323b047?w=800&h=600&fit=crop',
    products: products.filter(p => p.category.slug === 'office').slice(0, 4)
  }
];

export const featuredProducts = products.filter(p => p.isFeatured).slice(0, 8);
export const newProducts = products.filter(p => p.isNew).slice(0, 8);
export const saleProducts = products.filter(p => p.onSale).slice(0, 8);
