// Admin Panel State
let products = [];
let orders = [];
let settings = {};
let categories = [];
let currentActiveStatusFilter = 'all';
let banners = {};
let testimonials = [];
let blogs = [];

// Default Banners Database (sync with app.js)
const defaultBanners = {
  hero: [
    { image: 'images/PURE TRADITION,DELIVERED...png', alt: 'Desi Ghee - Richness You Can Taste', link: '#catalog-section' },
    { image: 'images/slider2.png', alt: 'Gift Box - Pure, Desi, and Delightful', link: '#catalog-section' },
    { image: 'images/slider3.png', alt: 'Royal Nuts - Every jar, a promise of Purity', link: '#catalog-section' }
  ],
  promo: [
    { image: 'images/112.png', subtitle: '100% Pure', title: 'Raw Honey', category: 'honey' },
    { image: 'images/DESEI GhEee.png ', subtitle: 'Premium Collection of', title: 'Desi Ghee', category: 'delight' }
  ]
};

// Default Testimonials Database
const defaultTestimonials = [
  {
    rating: 5,
    text: "I ordered their Raw Sidr honey and cow Desi Ghee. The quality is exceptional! Ghee has that authentic aroma of pure butter, and honey doesn't taste like sugar syrup at all. AL MUSAFFA is now my default organic store.",
    customer: "Zahid Ahmed",
    location: "Lahore"
  },
  {
    rating: 5,
    text: "Outstanding sweet almond oil and coconut oil. I use almond oil for my kids and virgin coconut oil in cooking. The fragrance is divine. Delivery was fast too, reached Karachi in 3 days!",
    customer: "Fatima Sajid",
    location: "Karachi"
  },
  {
    rating: 5,
    text: "Their Panjeeri took me back to my childhood. Packed with nuts and pure desi ghee, not too sweet, just perfect. Highly recommend AL MUSAFFA to anyone looking for clean food.",
    customer: "Muhammad Rizwan",
    location: "Islamabad"
  }
];

// Default Blogs Database
const defaultBlogs = [
  {
    title: "Why Raw Honey is Better Than Processed Honey",
    excerpt: "Uncover the hidden dangers of pasteurized honey found on supermarket shelves and discover why raw, unfiltered honey preserves active enzymes...",
    content: "Raw honey is honey in its most natural form—extracted directly from the beehive, strained to remove large debris, and bottled. It retains all the original vitamins, enzymes, minerals, and phytonutrients. Modern supermarket honey, on the other hand, is heavily pasteurized (heated to high temperatures) and ultra-filtered. While this gives it a clear, syrup-like look and a long shelf life, it destroys the active enzymes and removes beneficial pollen. Pollen contains trace minerals, proteins, and vitamins, making it a key component of raw honey's health benefits. By choosing raw, unfiltered honey, you are preserving the biological compounds that provide antibacterial properties, ease sore throats, and help heal minor wounds. At AL MUSAFFA, we ensure our honey is never heated or ultra-filtered, delivering nature's pure gold in its most potent and beneficial state.",
    image: "images/P1.png",
    date: "June 18, 2026",
    readTime: "5 min read"
  },
  {
    title: "How to Test the Purity of Raw Honey at Home",
    excerpt: "Avoid fake sugar syrup honey on the market. Discover simple, practical home tests using water, paper, and heat to verify if your honey is 100% raw and organic...",
    content: "Finding authentic, unadulterated honey can be challenging in a market filled with corn syrup mixtures. Here are some simple, practical tests to check your honey at home:\n\n1. **The Water Test:** Add a spoonful of honey to a glass of water. Pure raw honey will settle at the bottom as a lump and will not dissolve immediately. Adulterated honey will start dissolving in the water right away.\n\n2. **The Paper Test:** Drop a bit of honey on a paper towel or napkin. Pure honey will not soak through or leave a wet watermark on the paper instantly, whereas syrup mixtures containing water will soak right through.\n\n3. **The Thumb Test:** Place a drop of honey on your thumb. If it spills or spreads around quickly, it contains high moisture. Pure honey remains intact on the surface.\n\n4. **The Flame Test:** Dip the tip of a matchstick in honey and strike it against the matchbox. If it lights up, the honey is pure (as raw honey has low moisture content and supports combustion). If it doesn't light, it is contaminated with moisture/water syrup.",
    image: "images/sidr3.png",
    date: "May 29, 2026",
    readTime: "4 min read"
  },
  {
    title: "Revisiting Desi Ghee: Superfood or Fat Trap?",
    excerpt: "Modern science is finally validating what our ancestors always knew. Pure Desi Ghee prepared by traditional bilona method contains essential butyric acid...",
    content: "For decades, traditional fats like Desi Ghee were unfairly labeled as unhealthy fats. However, modern nutritional science is confirming what our ancestors knew all along: high-quality Desi Ghee is a superfood with numerous health benefits when consumed in moderation.\n\nUnlike modern hydrogenated vegetable fats, pure Desi Ghee (especially when made using the traditional wooden churn 'bilona' method) is rich in Short-Chain Fatty Acids (SCFAs), particularly butyric acid. Butyric acid feeds the cells of our intestines, helping reduce inflammation, supporting colon health, and improving digestion. Furthermore, Desi Ghee has a high smoke point (approx. 250°C), meaning it doesn't break down into harmful free radicals at high cooking temperatures, unlike most refined vegetable oils. It is also packed with fat-soluble vitamins (A, D, E, and K), which support immunity, brain health, and skin vitality. Adding a spoonful of AL MUSAFFA's premium Desi Ghee to your daily diet supports a healthy metabolism, builds joint lubrication, and provides sustained energy throughout the day.",
    image: "images/Desi2.png",
    date: "May 14, 2026",
    readTime: "6 min read"
  }
];



// Default Categories Database (sync with app.js)
const defaultCategories = [
  { name: 'Raw Honey', filter: 'honey', img: 'images/sidr_honey.png' },
  { name: 'Sidr Honey', filter: 'sidr', img: 'images/sidr_honey.png' },
  { name: 'Desi Ghee', filter: 'delight', img: 'images/desi_ghee.png' },
  { name: 'Gift Boxes', filter: 'gift', img: 'images/sidr_honey.png' }
];

// Default Product Database (sync with app.js)
const defaultProducts = [
  {
    id: 'sidr-honey',
    name: 'Premium Raw Sidr Honey (بیری کا شہد)',
    category: 'sidr',
    description: 'Harvested from the wild Sidr trees in the Karak region, our raw Sidr honey is world-renowned for its distinct herbal flavor, rich texture, and unparalleled medicinal benefits. It is unheated, unfiltered, and 100% pure.',
    rating: 4.9,
    reviews: 142,
    image: 'images/sidr_honey.png',
    variants: [
      { size: '250g', price: 1100, originalPrice: 1300 },
      { size: '500g', price: 2100, originalPrice: 2500 },
      { size: '1kg', price: 3950, originalPrice: 4600 }
    ],
    benefits: ['Boosts immune system', 'Natural antibacterial & antiviral properties', 'Aids digestion & cures stomach ulcers', 'Enhances athletic performance'],
    inStock: true,
    featured: true
  },
  {
    id: 'robinia-honey',
    name: 'Raw Robinia Honey (روبینہ شہد)',
    category: 'honey',
    description: 'Derived from Robinia (Black Locust) blossoms in northern valleys. It is light, clear like water, and has a mild sweet flavor with a floral aroma. It remains liquid for a long time due to its high fructose content.',
    rating: 4.8,
    reviews: 64,
    image: 'images/sidr_honey.png', // Fallback to Sidr Honey image with slightly different look/label
    variants: [
      { size: '250g', price: 1000, originalPrice: 1200 },
      { size: '500g', price: 1900, originalPrice: 2200 },
      { size: '1kg', price: 3600, originalPrice: 4200 }
    ],
    benefits: ['Low glycemic index', 'Relieves nervous tension', 'Improves respiratory health', 'Gentle on stomach'],
    inStock: true,
    featured: false
  },
  {
    id: 'acacia-honey',
    name: 'Raw Acacia Honey (پھلای کا شہد)',
    category: 'honey',
    description: 'Harvested from Phulai (Acacia modesta) forests during spring. Light amber in color, delicate taste, and slowly crystallizing. A perfect natural sweetener.',
    rating: 4.7,
    reviews: 89,
    image: 'images/sidr_honey.png',
    variants: [
      { size: '250g', price: 550, originalPrice: 700 },
      { size: '500g', price: 1050, originalPrice: 1300 },
      { size: '1kg', price: 1980, originalPrice: 2400 }
    ],
    benefits: ['Rich in antioxidants', 'Heals skin acne', 'Natural energy source', 'Improves metabolic health'],
    inStock: true,
    featured: true
  },
  {
    id: 'wild-honey',
    name: 'Raw Wild Forest Honey (جنگلی شہد)',
    category: 'honey',
    description: 'Collected from natural bee hives located deep inside wild forests. Multi-floral honey with robust health properties and rich dark amber appearance.',
    rating: 4.9,
    reviews: 118,
    image: 'images/sidr_honey.png',
    variants: [
      { size: '250g', price: 900, originalPrice: 1100 },
      { size: '500g', price: 1750, originalPrice: 2000 },
      { size: '1kg', price: 3200, originalPrice: 3800 }
    ],
    benefits: ['Excellent for seasonal allergies', 'Natural cough suppressor', 'Rich in active enzymes', 'Deep tissue healer'],
    inStock: true,
    featured: true
  },
  {
    id: 'desi-ghee-cow',
    name: 'Pure Desi Ghee - Cow Milk (گائے کا دیسی گھی)',
    category: 'delight',
    description: 'Traditional Desi Ghee prepared from organic grass-fed cow milk using ancient bilona churning method. Rich in fat-soluble vitamins (A, D, E, K), aromatic granular texture, and delicious flavor.',
    rating: 4.9,
    reviews: 210,
    image: 'images/desi_ghee.png',
    variants: [
      { size: '500g', price: 1400, originalPrice: 1600 },
      { size: '1kg', price: 2600, originalPrice: 3000 }
    ],
    benefits: ['Improves joint lubrication', 'Enhances brain function & memory', 'Aids digestion & gut health', 'High smoke point for safe cooking'],
    inStock: true,
    featured: true
  },
  {
    id: 'panjeeri',
    name: 'Traditional Royal Panjeeri (پنجیری)',
    category: 'delight',
    description: 'A traditional nutritional supplement made from semolina, loaded with pure desi ghee, premium almonds, cashews, pistachios, walnuts, phool makhana, and kamarkas. Best for postpartum recovery and backache relief.',
    rating: 4.9,
    reviews: 132,
    image: 'images/desi_ghee.png',
    variants: [
      { size: '500g', price: 1250, originalPrice: 1500 },
      { size: '1kg', price: 2400, originalPrice: 2800 }
    ],
    benefits: ['Restores maternal health after delivery', 'Relieves backache and muscle pain', 'Instant energy booster', 'Strengthens bones'],
    inStock: true,
    featured: true
  },
  {
    id: 'royal-nuts-honey',
    name: 'Royal Nuts Infused with Sidr Honey',
    category: 'delight',
    description: 'A premium jar filled with a delicious blend of raw pistachios, cashews, almonds, and walnuts, fully submerged in pure golden Sidr Honey. The ultimate healthy snack for daily vitality.',
    rating: 4.8,
    reviews: 79,
    image: 'images/sidr_honey.png',
    variants: [
      { size: '350g', price: 1600, originalPrice: 1950 }
    ],
    benefits: ['Increases natural stamina & strength', 'Rich source of healthy fats and minerals', 'Improves concentration and focus', 'Perfect substitute for processed sweets'],
    inStock: true,
    featured: true
  },
  {
    id: 'platinum-gift-box',
    name: 'Classic Organic Gift Box (Platinum Edition)',
    category: 'gift',
    description: 'An elegant wooden box lined with velvet containing a selection of AL MUSAFFA premium products: 1 jar Sidr Honey (250g), 1 bottle Sweet Almond Oil (120ml), and a jar of Royal Nuts with Honey (350g). The perfect corporate or family gift.',
    rating: 5.0,
    reviews: 53,
    image: 'images/sidr_honey.png', // Fallback to Sidr Honey representation
    variants: [
      { size: 'Standard Set', price: 3500, originalPrice: 4200 }
    ],
    benefits: ['Beautifully handcrafted wooden box presentation', 'Contains top-selling organic items', 'Perfect for weddings, Eid, and corporate events', 'Includes custom gift tag options'],
    inStock: true,
    featured: true
  }
];

// Default Store Settings
const defaultSettings = {
  storeName: 'AL MUSAFFA',
  email: 'support@almusafa.pk',
  whatsapp: '+92 300 1234567',
  address: 'Office # 4, G-11 Markaz, Islamabad, Pakistan',
  shippingLimit: 3000,
  shippingCharge: 250
};

// Default Mock Orders (so it doesn't look blank)
const defaultOrders = [
  {
    orderId: 'AM-482015',
    customer: {
      name: 'Kamran Khan',
      phone: '03215551234',
      address: 'House 56, Sector F-6/1',
      city: 'Islamabad'
    },
    items: [
      { name: 'Premium Raw Sidr Honey', size: '500g', price: 2100, quantity: 1 },
      { name: 'Cold-Pressed Extra Virgin Coconut Oil', size: '250ml', price: 800, quantity: 2 }
    ],
    subtotal: 3700,
    shipping: 0,
    total: 3700,
    paymentMethod: 'cod',
    status: 'pending',
    date: '2026-06-20T14:32:00'
  },
  {
    orderId: 'AM-928503',
    customer: {
      name: 'Ayesha Siddiqua',
      phone: '03009876543',
      address: 'Apartment 4B, Askari 11',
      city: 'Lahore'
    },
    items: [
      { name: 'Pure Desi Ghee - Cow Milk', size: '1kg', price: 2600, quantity: 1 }
    ],
    subtotal: 2600,
    shipping: 250,
    total: 2850,
    paymentMethod: 'bank',
    status: 'confirmed',
    date: '2026-06-21T09:15:00'
  }
];

// Load settings, products, and orders on page launch
document.addEventListener('DOMContentLoaded', () => {
  loadAdminState();
  initAdminDashboard();
});

function loadAdminState() {
  // Load Settings
  const savedSettings = localStorage.getItem('al_musafa_settings');
  if (savedSettings) {
    settings = JSON.parse(savedSettings);
    if (settings.storeName === 'AL musafa' || settings.storeName === 'Al Musafa' || settings.storeName === 'AL mUSAFFA') {
      settings.storeName = 'AL MUSAFFA';
      localStorage.setItem('al_musafa_settings', JSON.stringify(settings));
    }
  } else {
    settings = defaultSettings;
    localStorage.setItem('al_musafa_settings', JSON.stringify(settings));
  }

  // Set store name labels in admin panel
  document.getElementById('admin-store-name').innerText = settings.storeName;

  // Load Categories
  const savedCategories = localStorage.getItem('al_musafa_categories');
  if (savedCategories) {
    categories = JSON.parse(savedCategories);
    if (categories.length !== 4 || !categories.some(c => c.filter === 'sidr') || categories.some(c => c.name === 'Pure Delights')) {
      categories = defaultCategories;
      localStorage.setItem('al_musafa_categories', JSON.stringify(categories));
    }
  } else {
    categories = defaultCategories;
    localStorage.setItem('al_musafa_categories', JSON.stringify(categories));
  }

  // Load Products
  const savedProducts = localStorage.getItem('al_musafa_products');
  if (savedProducts) {
    products = JSON.parse(savedProducts);
    const validFilters = ['honey', 'sidr', 'delight', 'gift'];
    let needsProductsSave = false;
    const originalLength = products.length;
    products = products.filter(p => {
      if (p.id === 'sidr-honey' && p.category !== 'sidr') {
        p.category = 'sidr';
        needsProductsSave = true;
      }
      return validFilters.includes(p.category);
    });
    if (products.length !== originalLength || needsProductsSave) {
      localStorage.setItem('al_musafa_products', JSON.stringify(products));
    }
  } else {
    products = defaultProducts;
    localStorage.setItem('al_musafa_products', JSON.stringify(products));
  }

  // Load Orders
  const savedOrders = localStorage.getItem('al_musafa_orders');
  if (savedOrders) {
    orders = JSON.parse(savedOrders);
  } else {
    orders = defaultOrders;
    localStorage.setItem('al_musafa_orders', JSON.stringify(orders));
  }

  // Load Banners
  const savedBanners = localStorage.getItem('al_musafa_banners');
  if (savedBanners) {
    banners = JSON.parse(savedBanners);
  } else {
    banners = defaultBanners;
    localStorage.setItem('al_musafa_banners', JSON.stringify(banners));
  }

  // Load Testimonials
  const savedTestimonials = localStorage.getItem('al_musafa_testimonials');
  if (savedTestimonials) {
    testimonials = JSON.parse(savedTestimonials);
  } else {
    testimonials = defaultTestimonials;
    localStorage.setItem('al_musafa_testimonials', JSON.stringify(testimonials));
  }

  // Load Blogs
  const savedBlogs = localStorage.getItem('al_musafa_blogs');
  if (savedBlogs) {
    blogs = JSON.parse(savedBlogs);
    if (!blogs.every(b => b.content)) {
      blogs = defaultBlogs;
      localStorage.setItem('al_musafa_blogs', JSON.stringify(blogs));
    }
  } else {
    blogs = defaultBlogs;
    localStorage.setItem('al_musafa_blogs', JSON.stringify(blogs));
  }
}

function initAdminDashboard() {
  // 1. Sidebar tab switching
  const sidebarLinks = document.querySelectorAll('.sidebar-link[data-tab]');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('data-tab');
      if (targetTab) {
        switchAdminTab(targetTab);
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // 2. Order status filter buttons
  const filterBtns = document.querySelectorAll('.order-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentActiveStatusFilter = btn.getAttribute('data-status');
      renderOrdersTable();
    });
  });

  // 3. Settings Form Submission
  const settingsForm = document.getElementById('settings-form');
  if (settingsForm) {
    settingsForm.addEventListener('submit', handleSettingsSubmit);
  }

  // 4. Product Modal Form Submission
  const productForm = document.getElementById('product-admin-form');
  if (productForm) {
    productForm.addEventListener('submit', handleProductSubmit);
  }

  // 5. Product Modal Click Outside to Close
  const modalOverlay = document.getElementById('product-form-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProductModal();
      }
    });
  }

  // 6. Category Modal Click Outside to Close
  const catModalOverlay = document.getElementById('category-form-modal');
  if (catModalOverlay) {
    catModalOverlay.addEventListener('click', (e) => {
      if (e.target === catModalOverlay) {
        closeCategoryModal();
      }
    });
  }

  // 7. Category Form Submission
  const categoryForm = document.getElementById('category-admin-form');
  if (categoryForm) {
    categoryForm.addEventListener('submit', handleCategorySubmit);
  }

  // Image compression helper using Canvas
  function compressImageAndSave(file, targetInputElement, previewCallback, maxDimension = 1920, quality = 0.95) {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file!');
      return;
    }
    
    // If the file is smaller than 2MB, save the original image data directly to preserve 100% actual quality, resolution and transparency.
    if (file.size <= 2000000) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const rawDataUrl = event.target.result;
        targetInputElement.value = rawDataUrl;
        if (previewCallback) {
          previewCallback(rawDataUrl);
        }
      };
      reader.onerror = () => {
        alert('Error reading image file.');
      };
      reader.readAsDataURL(file);
      return;
    }
    
    // Otherwise, downscale and compress slightly to fit local storage limit
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Downscale large photos to max dimension while keeping aspect ratio
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // Export to standard JPEG format with custom quality compression
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        
        targetInputElement.value = compressedDataUrl;
        if (previewCallback) {
          previewCallback(compressedDataUrl);
        }
      };
      img.onerror = () => {
        alert('Error loading image file.');
      };
      img.src = event.target.result;
    };
    reader.onerror = () => {
      alert('Error reading image file.');
    };
    reader.readAsDataURL(file);
  }

  // 8. Product Image File Upload logic
  const productFileInput = document.getElementById('admin-product-image-file');
  const productImageInput = document.getElementById('admin-product-image');
  if (productFileInput && productImageInput) {
    productFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        compressImageAndSave(file, productImageInput, updateProductImagePreview);
      }
    });
  }

  // 9. Category Image File Upload logic
  const categoryFileInput = document.getElementById('admin-category-image-file');
  const categoryImageInput = document.getElementById('admin-category-image');
  if (categoryFileInput && categoryImageInput) {
    categoryFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        compressImageAndSave(file, categoryImageInput, updateCategoryUiPreview);
      }
    });
  }

  // Banner Image File Upload logic
  const bannerFileInput = document.getElementById('admin-banner-image-file');
  const bannerImageInput = document.getElementById('admin-banner-image');
  if (bannerFileInput && bannerImageInput) {
    bannerFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        compressImageAndSave(file, bannerImageInput, updateBannerUiPreview, 1920, 0.95);
      }
    });
  }

  // Banner Modal Form Submission
  const bannerForm = document.getElementById('banner-admin-form');
  if (bannerForm) {
    bannerForm.addEventListener('submit', handleBannerSubmit);
  }

  // Banner Modal Click Outside to Close
  const bannerModalOverlay = document.getElementById('banner-form-modal');
  if (bannerModalOverlay) {
    bannerModalOverlay.addEventListener('click', (e) => {
      if (e.target === bannerModalOverlay) {
        closeBannerModal();
      }
    });
  }

  // Testimonial Modal Form Submission
  const testimonialForm = document.getElementById('testimonial-admin-form');
  if (testimonialForm) {
    testimonialForm.addEventListener('submit', handleTestimonialSubmit);
  }

  // Testimonial Modal Click Outside to Close
  const testimonialModalOverlay = document.getElementById('testimonial-form-modal');
  if (testimonialModalOverlay) {
    testimonialModalOverlay.addEventListener('click', (e) => {
      if (e.target === testimonialModalOverlay) {
        closeTestimonialModal();
      }
    });
  }

  // Blog Image File Upload logic
  const blogFileInput = document.getElementById('admin-blog-image-file');
  const blogImageInput = document.getElementById('admin-blog-image');
  if (blogFileInput && blogImageInput) {
    blogFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        compressImageAndSave(file, blogImageInput, updateBlogImagePreview, 1200, 0.9);
      }
    });
  }

  // Blog Modal Form Submission
  const blogForm = document.getElementById('blog-admin-form');
  if (blogForm) {
    blogForm.addEventListener('submit', handleBlogSubmit);
  }

  // Blog Modal Click Outside to Close
  const blogModalOverlay = document.getElementById('blog-form-modal');
  if (blogModalOverlay) {
    blogModalOverlay.addEventListener('click', (e) => {
      if (e.target === blogModalOverlay) {
        closeBlogModalAdmin();
      }
    });
  }

  // 10. Initial Renderings & Dropdown Population
  populateProductCategoryDropdown();
  renderDashboardStats();
  renderRecentOrders();
  renderOrdersTable();
  renderInventoryTable();
  renderCategoriesTable();
  renderBannersTable();
  renderTestimonialsTable();
  renderBlogsTable();
  populateSettingsForm();
}

// TAB NAVIGATION CONTROL
window.switchAdminTab = function(tabName) {
  const tabs = document.querySelectorAll('.admin-tab');
  tabs.forEach(t => t.classList.remove('active'));

  const activeTab = document.getElementById(`tab-${tabName}`);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // Update navbar title
  const titles = {
    dashboard: 'Dashboard Overview',
    orders: 'Orders Manager',
    products: 'Products Catalog Manager',
    categories: 'Categories Manager',
    banners: 'Banners & Hero Slider Manager',
    testimonials: 'Testimonials Manager',
    blogs: 'Blogs Manager',
    settings: 'General Store Settings'
  };
  document.getElementById('current-tab-title').innerText = titles[tabName] || 'Admin Panel';

  // Specific renders on tab load
  if (tabName === 'dashboard') {
    renderDashboardStats();
    renderRecentOrders();
  } else if (tabName === 'orders') {
    renderOrdersTable();
  } else if (tabName === 'products') {
    renderInventoryTable();
  } else if (tabName === 'categories') {
    renderCategoriesTable();
  } else if (tabName === 'banners') {
    renderBannersTable();
  } else if (tabName === 'testimonials') {
    renderTestimonialsTable();
  } else if (tabName === 'blogs') {
    renderBlogsTable();
  } else if (tabName === 'settings') {
    populateSettingsForm();
  }
};

// DASHBOARD CALCULATIONS & RENDER
function renderDashboardStats() {
  // Exclude cancelled orders from revenue
  const validOrders = orders.filter(o => o.status !== 'cancelled');
  const revenue = validOrders.reduce((sum, o) => sum + o.total, 0);
  
  // Active orders (pending or confirmed, not shipped or cancelled)
  const activeOrdersCount = orders.filter(o => o.status === 'pending' || o.status === 'confirmed').length;
  
  // Total products catalog size
  const productCount = products.length;

  // Average Order Value (AOV)
  const aov = validOrders.length > 0 ? Math.round(revenue / validOrders.length) : 0;

  document.getElementById('stat-revenue').innerText = `Rs. ${revenue.toLocaleString()}`;
  document.getElementById('stat-orders').innerText = activeOrdersCount;
  document.getElementById('stat-products').innerText = productCount;
  document.getElementById('stat-aov').innerText = `Rs. ${aov.toLocaleString()}`;
}

function renderRecentOrders() {
  const tableBody = document.getElementById('recent-orders-table');
  if (!tableBody) return;

  // Get last 5 orders
  const recent = [...orders].reverse().slice(0, 5);

  if (recent.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6" class="text-center" style="color:var(--color-text-muted);">No orders found</td></tr>';
    return;
  }

  tableBody.innerHTML = recent.map(o => {
    const formattedDate = new Date(o.date).toLocaleDateString('en-PK', {
      day: 'numeric',
      month: 'short',
      year: '2-digit'
    });

    return `
      <tr>
        <td><strong>${o.orderId}</strong></td>
        <td>${o.customer.name}</td>
        <td>${o.customer.city}</td>
        <td style="font-weight:600; color:var(--color-primary);">Rs. ${o.total}</td>
        <td><span class="status-badge status-${o.status}">${o.status}</span></td>
        <td>${formattedDate}</td>
      </tr>
    `;
  }).join('');
}

// ORDERS MANAGER RENDER
function renderOrdersTable() {
  const tableBody = document.getElementById('all-orders-table');
  if (!tableBody) return;

  let filtered = [...orders].reverse();
  if (currentActiveStatusFilter !== 'all') {
    filtered = filtered.filter(o => o.status === currentActiveStatusFilter);
  }

  if (filtered.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding: 30px; color:var(--color-text-muted);">No orders in this status</td></tr>';
    return;
  }

  tableBody.innerHTML = filtered.map(o => {
    // Generate ordered items list
    const itemsHtml = o.items.map(item => 
      `<div style="font-size:13px; line-height:1.4;">• ${item.name} (${item.size}) <span style="color:var(--color-text-muted);">x ${item.quantity}</span></div>`
    ).join('');

    return `
      <tr>
        <td><strong>${o.orderId}</strong></td>
        <td>
          <div style="font-weight:600;">${o.customer.name}</div>
          <div style="font-size:12px; color:var(--color-text-muted);">${o.customer.phone}</div>
          <div style="font-size:12px; color:var(--color-text-muted);">${o.customer.address}, ${o.customer.city}</div>
        </td>
        <td>${itemsHtml}</td>
        <td style="font-weight:700; color:var(--color-primary);">Rs. ${o.total}</td>
        <td style="text-transform:uppercase; font-size:12px; font-weight:600;">${o.paymentMethod}</td>
        <td>
          <select class="admin-status-select" onchange="updateOrderStatus('${o.orderId}', this.value)">
            <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="confirmed" ${o.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
            <option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>Shipped</option>
            <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </td>
        <td>
          <button class="btn btn-secondary" style="padding: 4px 10px; font-size:12px; border-color:#d9534f; color:#d9534f;" onclick="deleteOrder('${o.orderId}')">Delete</button>
        </td>
      </tr>
    `;
  }).join('');
}

window.updateOrderStatus = function(orderId, newStatus) {
  const index = orders.findIndex(o => o.orderId === orderId);
  if (index === -1) return;

  orders[index].status = newStatus;
  localStorage.setItem('al_musafa_orders', JSON.stringify(orders));
  
  renderDashboardStats();
  renderOrdersTable();
};

window.deleteOrder = function(orderId) {
  if (!confirm(`Are you sure you want to delete order ${orderId}?`)) return;

  orders = orders.filter(o => o.orderId !== orderId);
  localStorage.setItem('al_musafa_orders', JSON.stringify(orders));

  renderDashboardStats();
  renderOrdersTable();
};

// PRODUCTS CATALOG MANAGER
function renderInventoryTable() {
  const tableBody = document.getElementById('inventory-table');
  if (!tableBody) return;

  if (products.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="7" class="text-center" style="color:var(--color-text-muted);">No products in catalog</td></tr>';
    return;
  }

  tableBody.innerHTML = products.map((p, index) => {
    // Sizes
    const sizes = p.variants.map(v => v.size).join(', ');
    
    // Price range
    const prices = p.variants.map(v => v.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = p.variants.length > 1 ? `Rs. ${minPrice} - Rs. ${maxPrice}` : `Rs. ${minPrice}`;

    return `
      <tr>
        <td>
          <img src="${p.image}" alt="${p.name}" style="width:50px; height:50px; object-fit:cover; border-radius:6px; border:1px solid var(--color-border);" onerror="this.src='images/logo.png'">
        </td>
        <td><strong>${p.name}</strong></td>
        <td style="text-transform:capitalize;">${p.category}</td>
        <td>${sizes}</td>
        <td style="font-weight:600; color:var(--color-primary);">${priceRange}</td>
        <td>
          <button class="btn btn-secondary" style="padding: 4px 10px; font-size:12px; border-color:${p.inStock ? 'var(--color-primary)' : '#d9534f'}; color:${p.inStock ? 'var(--color-primary)' : '#d9534f'};" onclick="toggleStockStatus(${index})">
            ${p.inStock ? 'In Stock' : 'Out of Stock'}
          </button>
        </td>
        <td>
          <div style="display:flex; gap:5px;">
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px;" onclick="openProductModal(${index})">Edit</button>
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px; border-color:#d9534f; color:#d9534f;" onclick="deleteProduct(${index})">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.toggleStockStatus = function(index) {
  products[index].inStock = !products[index].inStock;
  localStorage.setItem('al_musafa_products', JSON.stringify(products));
  renderInventoryTable();
};

window.deleteProduct = function(index) {
  if (!confirm(`Are you sure you want to delete "${products[index].name}"?`)) return;

  products.splice(index, 1);
  localStorage.setItem('al_musafa_products', JSON.stringify(products));
  
  renderDashboardStats();
  renderInventoryTable();
};

// DYNAMIC VARIANT FORM ROWS IN MODAL
let activeVariantRowsCount = 0;

window.addVariantFormRow = function(sizeVal = '', priceVal = '', origVal = '') {
  const container = document.getElementById('variants-form-list');
  const index = activeVariantRowsCount++;

  const row = document.createElement('div');
  row.className = 'variant-form-row';
  row.id = `variant-row-${index}`;
  row.style.marginBottom = '10px';
  row.innerHTML = `
    <div style="width:35%;">
      <input type="text" class="form-control var-size" placeholder="Size (e.g. 500g)" value="${sizeVal}" required>
    </div>
    <div style="width:30%;">
      <input type="number" class="form-control var-price" placeholder="Price (PKR)" value="${priceVal}" min="0" required>
    </div>
    <div style="width:30%;">
      <input type="number" class="form-control var-orig" placeholder="Original Price" value="${origVal}" min="0">
    </div>
    <button type="button" style="background:none; border:none; color:#d9534f; font-size:20px; cursor:pointer;" onclick="removeVariantFormRow(${index})">&times;</button>
  `;

  container.appendChild(row);
};

window.removeVariantFormRow = function(rowIndex) {
  const row = document.getElementById(`variant-row-${rowIndex}`);
  if (row) {
    row.remove();
  }
};

// ADD / EDIT PRODUCT MODAL CONTROLS
window.openProductModal = function(productIndex = null) {
  const modal = document.getElementById('product-form-modal');
  const form = document.getElementById('product-admin-form');
  const modalTitle = document.getElementById('modal-form-title');
  const variantsList = document.getElementById('variants-form-list');
  const indexField = document.getElementById('admin-product-index');

  // Reset form and variables
  form.reset();
  variantsList.innerHTML = '';
  activeVariantRowsCount = 0;

  // Populate dynamic category dropdown
  populateProductCategoryDropdown();

  // Reset image presets select & previews
  const presetsSelect = document.getElementById('admin-product-image-presets');
  if (presetsSelect) {
    presetsSelect.value = '';
  }
  const fileInput = document.getElementById('admin-product-image-file');
  if (fileInput) {
    fileInput.value = '';
  }
  updateProductImagePreview('images/logo.png');

  if (productIndex !== null) {
    // EDIT MODE
    const p = products[productIndex];
    indexField.value = productIndex;
    modalTitle.innerText = `Edit Product: ${p.name}`;

    document.getElementById('admin-product-name').value = p.name;
    document.getElementById('admin-product-category').value = p.category;
    document.getElementById('admin-product-stock').value = p.inStock.toString();
    document.getElementById('admin-product-image').value = p.image;
    updateProductImagePreview(p.image);

    // Set preset dropdown if matches preset option
    if (presetsSelect) {
      if (Array.from(presetsSelect.options).some(opt => opt.value === p.image)) {
        presetsSelect.value = p.image;
      } else {
        presetsSelect.value = '';
      }
    }
    document.getElementById('admin-product-rating').value = p.rating;
    document.getElementById('admin-product-description').value = p.description;
    document.getElementById('admin-product-benefits').value = (p.benefits || []).join('\n');

    // Populates variant size rows
    p.variants.forEach(v => {
      addVariantFormRow(v.size, v.price, v.originalPrice || '');
    });
  } else {
    // ADD MODE
    indexField.value = '';
    modalTitle.innerText = 'Add New Product';
    // Add one empty variant row by default
    addVariantFormRow('', '', '');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProductModal = function() {
  const modal = document.getElementById('product-form-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
};

function handleProductSubmit(e) {
  e.preventDefault();

  const indexVal = document.getElementById('admin-product-index').value;
  const name = document.getElementById('admin-product-name').value.trim();
  const category = document.getElementById('admin-product-category').value;
  const inStock = document.getElementById('admin-product-stock').value === 'true';
  const image = document.getElementById('admin-product-image').value;
  const rating = parseFloat(document.getElementById('admin-product-rating').value) || 4.8;
  const description = document.getElementById('admin-product-description').value.trim();
  const benefitsText = document.getElementById('admin-product-benefits').value;
  
  // Extract benefits
  const benefits = benefitsText
    ? benefitsText.split('\n').map(b => b.trim()).filter(b => b.length > 0)
    : [];

  // Extract variants
  const variantRows = document.querySelectorAll('.variant-form-row');
  const variants = [];
  
  variantRows.forEach(row => {
    const size = row.querySelector('.var-size').value.trim();
    const price = parseInt(row.querySelector('.var-price').value) || 0;
    const origVal = row.querySelector('.var-orig').value;
    const originalPrice = origVal ? parseInt(origVal) : null;

    if (size && price) {
      const variantObj = { size, price };
      if (originalPrice) variantObj.originalPrice = originalPrice;
      variants.push(variantObj);
    }
  });

  if (variants.length === 0) {
    alert('Please specify at least one size variant & price.');
    return;
  }

  const productData = {
    id: indexVal !== '' ? products[indexVal].id : name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name,
    category,
    description,
    rating,
    reviews: indexVal !== '' ? products[indexVal].reviews : Math.floor(10 + Math.random() * 90),
    image,
    variants,
    benefits,
    inStock,
    featured: indexVal !== '' ? products[indexVal].featured : false
  };

  if (indexVal !== '') {
    // Update existing product
    products[indexVal] = productData;
  } else {
    // Push new product
    products.push(productData);
  }

  // Save State
  localStorage.setItem('al_musafa_products', JSON.stringify(products));

  closeProductModal();
  renderInventoryTable();
  renderDashboardStats();
}

// STORE SETTINGS CONTROLS
function populateSettingsForm() {
  document.getElementById('settings-store-name').value = settings.storeName;
  document.getElementById('settings-whatsapp').value = settings.whatsapp;
  document.getElementById('settings-email').value = settings.email;
  document.getElementById('settings-shipping-limit').value = settings.shippingLimit;
  document.getElementById('settings-shipping-charge').value = settings.shippingCharge;
  document.getElementById('settings-address').value = settings.address;
}

function handleSettingsSubmit(e) {
  e.preventDefault();

  settings = {
    storeName: document.getElementById('settings-store-name').value.trim(),
    whatsapp: document.getElementById('settings-whatsapp').value.trim(),
    email: document.getElementById('settings-email').value.trim(),
    shippingLimit: parseInt(document.getElementById('settings-shipping-limit').value) || 3000,
    shippingCharge: parseInt(document.getElementById('settings-shipping-charge').value) || 250,
    address: document.getElementById('settings-address').value.trim()
  };

  localStorage.setItem('al_musafa_settings', JSON.stringify(settings));
  document.getElementById('admin-store-name').innerText = settings.storeName;

  alert('Store configurations saved successfully!');
}

// DYNAMIC PRODUCT CATEGORY DROPDOWN POPULATION
function populateProductCategoryDropdown() {
  const select = document.getElementById('admin-product-category');
  if (!select) return;
  select.innerHTML = categories.map(cat => 
    `<option value="${cat.filter}">${cat.name}</option>`
  ).join('');
}

// CATEGORIES MANAGER CRUD
function renderCategoriesTable() {
  const tableBody = document.getElementById('categories-table');
  if (!tableBody) return;

  if (categories.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="4" class="text-center" style="color:var(--color-text-muted);">No categories found</td></tr>';
    return;
  }

  tableBody.innerHTML = categories.map((cat, index) => {
    return `
      <tr>
        <td>
          <img src="${cat.img}" alt="${cat.name}" style="width:50px; height:50px; object-fit:cover; border-radius:6px; border:1px solid var(--color-border);" onerror="this.src='images/logo.png'">
        </td>
        <td><strong>${cat.name}</strong></td>
        <td><code>${cat.filter}</code></td>
        <td>
          <div style="display:flex; gap:5px;">
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px;" onclick="openCategoryModal(${index})">Edit</button>
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px; border-color:#d9534f; color:#d9534f;" onclick="deleteCategory(${index})">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.openCategoryModal = function(categoryIndex = null) {
  const modal = document.getElementById('category-form-modal');
  const form = document.getElementById('category-admin-form');
  const modalTitle = document.getElementById('category-modal-form-title');
  const indexField = document.getElementById('admin-category-index');
  const fileInput = document.getElementById('admin-category-image-file');

  form.reset();
  if (fileInput) fileInput.value = '';
  updateCategoryUiPreview('images/logo.png');

  const presetsSelect = document.getElementById('admin-category-image-presets');
  if (presetsSelect) presetsSelect.value = '';

  if (categoryIndex !== null) {
    // EDIT MODE
    const cat = categories[categoryIndex];
    indexField.value = categoryIndex;
    modalTitle.innerText = `Edit Category: ${cat.name}`;

    document.getElementById('admin-category-name').value = cat.name;
    document.getElementById('admin-category-slug').value = cat.filter;
    document.getElementById('admin-category-image').value = cat.img;
    updateCategoryUiPreview(cat.img);

    if (presetsSelect) {
      if (Array.from(presetsSelect.options).some(opt => opt.value === cat.img)) {
        presetsSelect.value = cat.img;
      } else {
        presetsSelect.value = '';
      }
    }
  } else {
    // ADD MODE
    indexField.value = '';
    modalTitle.innerText = 'Add New Category';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeCategoryModal = function() {
  const modal = document.getElementById('category-form-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = 'auto';
};

window.autoGenerateCategorySlug = function(nameVal) {
  const slugInput = document.getElementById('admin-category-slug');
  const indexVal = document.getElementById('admin-category-index').value;
  // Auto slug only in add mode
  if (slugInput && indexVal === '') {
    slugInput.value = nameVal.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
};

function handleCategorySubmit(e) {
  e.preventDefault();

  const indexVal = document.getElementById('admin-category-index').value;
  const name = document.getElementById('admin-category-name').value.trim();
  const filter = document.getElementById('admin-category-slug').value.trim().toLowerCase();
  const img = document.getElementById('admin-category-image').value.trim();

  // Validate slug format
  const slugPattern = /^[a-z0-9\-]+$/;
  if (!slugPattern.test(filter)) {
    alert('Slug can only contain lowercase letters, numbers, and hyphens.');
    return;
  }

  // Check unique constraints
  const duplicate = categories.find((cat, idx) => 
    idx.toString() !== indexVal && 
    (cat.filter === filter || cat.name.toLowerCase() === name.toLowerCase())
  );

  if (duplicate) {
    alert('A category with this name or slug already exists.');
    return;
  }

  const categoryData = { name, filter, img };

  if (indexVal !== '') {
    // If slug changed, update all products belonging to the old slug
    const oldSlug = categories[indexVal].filter;
    if (oldSlug !== filter) {
      products.forEach((p, idx) => {
        if (p.category === oldSlug) {
          products[idx].category = filter;
        }
      });
      localStorage.setItem('al_musafa_products', JSON.stringify(products));
    }

    categories[indexVal] = categoryData;
  } else {
    categories.push(categoryData);
  }

  localStorage.setItem('al_musafa_categories', JSON.stringify(categories));

  closeCategoryModal();
  renderCategoriesTable();
  populateProductCategoryDropdown();
  renderInventoryTable();
}

window.deleteCategory = function(index) {
  const cat = categories[index];
  if (!confirm(`Are you sure you want to delete the category "${cat.name}"?\nProducts in this category will remain but may be hidden until reassigned.`)) {
    return;
  }

  categories.splice(index, 1);
  localStorage.setItem('al_musafa_categories', JSON.stringify(categories));

  renderCategoriesTable();
  populateProductCategoryDropdown();
  renderInventoryTable();
};

// PREVIEW UTILS
window.updateProductImagePreview = function(src) {
  const preview = document.getElementById('admin-product-image-preview');
  if (preview) {
    preview.src = src || 'images/logo.png';
  }
};

window.updateCategoryUiPreview = function(src) {
  const preview = document.getElementById('admin-category-image-preview');
  if (preview) {
    preview.src = src || 'images/logo.png';
  }
};

// BANNERS MANAGER CRUD
window.renderBannersTable = function() {
  // 1. Render Hero Table
  const heroTableBody = document.getElementById('hero-banners-table');
  if (heroTableBody) {
    const heroList = banners.hero || [];
    if (heroList.length === 0) {
      heroTableBody.innerHTML = '<tr><td colspan="4" class="text-center" style="color:var(--color-text-muted);">No hero slides found</td></tr>';
    } else {
      heroTableBody.innerHTML = heroList.map((b, index) => {
        return `
          <tr>
            <td>
              <img src="${b.image}" alt="${b.alt}" style="width:100px; height:45px; object-fit:cover; border-radius:4px; border:1px solid var(--color-border);" onerror="this.src='images/logo.png'">
            </td>
            <td><strong>${b.alt}</strong></td>
            <td><code>${b.link}</code></td>
            <td>
              <div style="display:flex; gap:5px;">
                <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px;" onclick="openBannerModal('hero', ${index})">Edit</button>
                <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px; border-color:#d9534f; color:#d9534f;" onclick="deleteBanner('hero', ${index})">Delete</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  // 2. Render Promo Table
  const promoTableBody = document.getElementById('promo-banners-table');
  if (promoTableBody) {
    const promoList = banners.promo || [];
    if (promoList.length === 0) {
      promoTableBody.innerHTML = '<tr><td colspan="5" class="text-center" style="color:var(--color-text-muted);">No promo banners found</td></tr>';
    } else {
      promoTableBody.innerHTML = promoList.map((b, index) => {
        return `
          <tr>
            <td>
              <img src="${b.image}" alt="${b.title}" style="width:80px; height:50px; object-fit:cover; border-radius:4px; border:1px solid var(--color-border);" onerror="this.src='images/logo.png'">
            </td>
            <td><strong>${b.title}</strong></td>
            <td>${b.subtitle || ''}</td>
            <td><span class="badge" style="background-color: var(--color-bg-light); color: var(--color-primary); border: 1px solid var(--color-border); padding: 4px 8px; border-radius: 4px;"><code>${b.category}</code></span></td>
            <td>
              <div style="display:flex; gap:5px;">
                <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px;" onclick="openBannerModal('promo', ${index})">Edit</button>
                <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px; border-color:#d9534f; color:#d9534f;" onclick="deleteBanner('promo', ${index})">Delete</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }
  }
};

window.openBannerModal = function(type, bannerIndex = null) {
  const modal = document.getElementById('banner-form-modal');
  const form = document.getElementById('banner-admin-form');
  const modalTitle = document.getElementById('banner-modal-form-title');
  
  const typeField = document.getElementById('admin-banner-type');
  const indexField = document.getElementById('admin-banner-index');
  const fileInput = document.getElementById('admin-banner-image-file');
  
  const titleLabel = document.getElementById('banner-title-label');
  const subtitleGroup = document.getElementById('banner-subtitle-group');
  const linkGroup = document.getElementById('banner-link-group');
  const categoryGroup = document.getElementById('banner-category-group');
  
  form.reset();
  if (fileInput) fileInput.value = '';
  updateBannerUiPreview('images/logo.png');
  
  const presetsSelect = document.getElementById('admin-banner-image-presets');
  if (presetsSelect) presetsSelect.value = '';
  
  typeField.value = type;
  indexField.value = bannerIndex !== null ? bannerIndex : '';
  
  // Populate Category dropdown dynamically in promo banner
  const categorySelect = document.getElementById('admin-banner-category');
  if (categorySelect) {
    categorySelect.innerHTML = categories.map(c => `<option value="${c.filter}">${c.name}</option>`).join('');
  }
  
  if (type === 'hero') {
    titleLabel.innerText = 'Alt Text (Accessibility) *';
    subtitleGroup.style.display = 'none';
    linkGroup.style.display = 'block';
    categoryGroup.style.display = 'none';
    
    document.getElementById('admin-banner-subtitle').required = false;
    document.getElementById('admin-banner-link').required = true;
    document.getElementById('admin-banner-category').required = false;
  } else {
    titleLabel.innerText = 'Promo Title *';
    subtitleGroup.style.display = 'block';
    linkGroup.style.display = 'none';
    categoryGroup.style.display = 'block';
    
    document.getElementById('admin-banner-subtitle').required = true;
    document.getElementById('admin-banner-link').required = false;
    document.getElementById('admin-banner-category').required = true;
  }
  
  if (bannerIndex !== null) {
    // EDIT MODE
    const b = banners[type][bannerIndex];
    modalTitle.innerText = `Edit ${type === 'hero' ? 'Hero Slide' : 'Promo Banner'}`;
    
    if (type === 'hero') {
      document.getElementById('admin-banner-title').value = b.alt || '';
      document.getElementById('admin-banner-link').value = b.link || '';
    } else {
      document.getElementById('admin-banner-title').value = b.title || '';
      document.getElementById('admin-banner-subtitle').value = b.subtitle || '';
      document.getElementById('admin-banner-category').value = b.category || '';
    }
    
    document.getElementById('admin-banner-image').value = b.image;
    updateBannerUiPreview(b.image);
    
    if (presetsSelect) {
      if (Array.from(presetsSelect.options).some(opt => opt.value === b.image)) {
        presetsSelect.value = b.image;
      } else {
        presetsSelect.value = '';
      }
    }
  } else {
    // ADD MODE
    modalTitle.innerText = `Add New ${type === 'hero' ? 'Hero Slide' : 'Promo Banner'}`;
    if (type === 'hero') {
      document.getElementById('admin-banner-link').value = '#catalog-section';
    }
  }
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeBannerModal = function() {
  const modal = document.getElementById('banner-form-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = 'auto';
};

window.updateBannerUiPreview = function(src) {
  const preview = document.getElementById('admin-banner-image-preview');
  if (preview) {
    preview.src = src || 'images/logo.png';
  }
};

function handleBannerSubmit(e) {
  e.preventDefault();
  
  const type = document.getElementById('admin-banner-type').value;
  const indexVal = document.getElementById('admin-banner-index').value;
  const image = document.getElementById('admin-banner-image').value.trim();
  const title = document.getElementById('admin-banner-title').value.trim();
  
  let bannerData = {};
  if (type === 'hero') {
    const link = document.getElementById('admin-banner-link').value.trim();
    bannerData = { image, alt: title, link };
  } else {
    const subtitle = document.getElementById('admin-banner-subtitle').value.trim();
    const category = document.getElementById('admin-banner-category').value;
    bannerData = { image, subtitle, title, category };
  }
  
  if (indexVal !== '') {
    // Edit existing
    banners[type][indexVal] = bannerData;
  } else {
    // Add new
    if (!banners[type]) {
      banners[type] = [];
    }
    banners[type].push(bannerData);
  }
  
  localStorage.setItem('al_musafa_banners', JSON.stringify(banners));
  closeBannerModal();
  renderBannersTable();
}

window.deleteBanner = function(type, index) {
  const item = banners[type][index];
  const label = type === 'hero' ? (item.alt || 'Slide') : (item.title || 'Banner');
  
  if (!confirm(`Are you sure you want to delete the ${type === 'hero' ? 'hero slide' : 'promo banner'} "${label}"?`)) {
    return;
  }
  
  banners[type].splice(index, 1);
  localStorage.setItem('al_musafa_banners', JSON.stringify(banners));
  renderBannersTable();
};

// TESTIMONIALS MANAGER CRUD
window.renderTestimonialsTable = function() {
  const tableBody = document.getElementById('testimonials-table');
  if (!tableBody) return;

  if (testimonials.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="5" class="text-center" style="color:var(--color-text-muted);">No testimonials found</td></tr>';
    return;
  }

  tableBody.innerHTML = testimonials.map((t, index) => {
    const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
    return `
      <tr>
        <td><span style="color:#ffb703; font-size: 16px;">${stars}</span></td>
        <td><strong>${t.customer}</strong></td>
        <td>${t.location}</td>
        <td><div style="max-height:60px; overflow-y:auto; font-size:13px; color:var(--color-text-muted);">${t.text}</div></td>
        <td>
          <div style="display:flex; gap:5px;">
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px;" onclick="openTestimonialModal(${index})">Edit</button>
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px; border-color:#d9534f; color:#d9534f;" onclick="deleteTestimonial(${index})">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
};

window.openTestimonialModal = function(index = null) {
  const modal = document.getElementById('testimonial-form-modal');
  const form = document.getElementById('testimonial-admin-form');
  const modalTitle = document.getElementById('testimonial-modal-form-title');
  const indexField = document.getElementById('admin-testimonial-index');

  form.reset();

  if (index !== null) {
    // EDIT MODE
    const t = testimonials[index];
    indexField.value = index;
    modalTitle.innerText = `Edit Testimonial: ${t.customer}`;
    document.getElementById('admin-testimonial-name').value = t.customer;
    document.getElementById('admin-testimonial-location').value = t.location;
    document.getElementById('admin-testimonial-rating').value = t.rating;
    document.getElementById('admin-testimonial-text').value = t.text;
  } else {
    // ADD MODE
    indexField.value = '';
    modalTitle.innerText = 'Add New Testimonial';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeTestimonialModal = function() {
  const modal = document.getElementById('testimonial-form-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = 'auto';
};

function handleTestimonialSubmit(e) {
  e.preventDefault();

  const indexVal = document.getElementById('admin-testimonial-index').value;
  const customer = document.getElementById('admin-testimonial-name').value.trim();
  const location = document.getElementById('admin-testimonial-location').value.trim();
  const rating = parseInt(document.getElementById('admin-testimonial-rating').value);
  const text = document.getElementById('admin-testimonial-text').value.trim();

  const tData = { customer, location, rating, text };

  if (indexVal !== '') {
    testimonials[indexVal] = tData;
  } else {
    testimonials.push(tData);
  }

  localStorage.setItem('al_musafa_testimonials', JSON.stringify(testimonials));
  closeTestimonialModal();
  renderTestimonialsTable();
}

window.deleteTestimonial = function(index) {
  const item = testimonials[index];
  if (!confirm(`Are you sure you want to delete the testimonial from "${item.customer}"?`)) {
    return;
  }

  testimonials.splice(index, 1);
  localStorage.setItem('al_musafa_testimonials', JSON.stringify(testimonials));
  renderTestimonialsTable();
};

// BLOGS MANAGER CRUD
window.renderBlogsTable = function() {
  const tableBody = document.getElementById('blogs-table');
  if (!tableBody) return;

  if (blogs.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6" class="text-center" style="color:var(--color-text-muted);">No blogs found</td></tr>';
    return;
  }

  tableBody.innerHTML = blogs.map((b, index) => {
    return `
      <tr>
        <td>
          <img src="${b.image}" alt="${b.title}" style="width:60px; height:40px; object-fit:cover; border-radius:4px; border:1px solid var(--color-border);" onerror="this.src='images/logo.png'">
        </td>
        <td><strong>${b.title}</strong></td>
        <td><code>${b.readTime || '5 min read'}</code></td>
        <td>${b.date || ''}</td>
        <td><div style="max-height:50px; overflow-y:auto; font-size:12px; color:var(--color-text-muted);">${b.excerpt}</div></td>
        <td>
          <div style="display:flex; gap:5px;">
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px;" onclick="openBlogModalAdmin(${index})">Edit</button>
            <button class="btn btn-secondary" style="padding: 4px 8px; font-size:12px; border-color:#d9534f; color:#d9534f;" onclick="deleteBlog(${index})">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
};

window.openBlogModalAdmin = function(index = null) {
  const modal = document.getElementById('blog-form-modal');
  const form = document.getElementById('blog-admin-form');
  const modalTitle = document.getElementById('blog-modal-form-title');
  const indexField = document.getElementById('admin-blog-index');
  const fileInput = document.getElementById('admin-blog-image-file');

  form.reset();
  if (fileInput) fileInput.value = '';
  updateBlogImagePreview('images/logo.png');

  const presetsSelect = document.getElementById('admin-blog-image-presets');
  if (presetsSelect) presetsSelect.value = '';

  if (index !== null) {
    // EDIT MODE
    const b = blogs[index];
    indexField.value = index;
    modalTitle.innerText = `Edit Blog Post: ${b.title}`;

    document.getElementById('admin-blog-title').value = b.title;
    document.getElementById('admin-blog-readtime').value = b.readTime || '5 min read';
    document.getElementById('admin-blog-date').value = b.date || '';
    document.getElementById('admin-blog-image').value = b.image;
    document.getElementById('admin-blog-excerpt').value = b.excerpt;
    document.getElementById('admin-blog-content').value = b.content || '';

    updateBlogImagePreview(b.image);
    if (presetsSelect) {
      if (Array.from(presetsSelect.options).some(opt => opt.value === b.image)) {
        presetsSelect.value = b.image;
      } else {
        presetsSelect.value = '';
      }
    }
  } else {
    // ADD MODE
    indexField.value = '';
    modalTitle.innerText = 'Add New Blog Post';
    
    // Auto populate date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('admin-blog-date').value = today.toLocaleDateString('en-US', options);
    document.getElementById('admin-blog-readtime').value = '5 min read';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeBlogModalAdmin = function() {
  const modal = document.getElementById('blog-form-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = 'auto';
};

window.updateBlogImagePreview = function(src) {
  const preview = document.getElementById('admin-blog-image-preview');
  if (preview) {
    preview.src = src || 'images/logo.png';
  }
};

function handleBlogSubmit(e) {
  e.preventDefault();

  const indexVal = document.getElementById('admin-blog-index').value;
  const title = document.getElementById('admin-blog-title').value.trim();
  const readTime = document.getElementById('admin-blog-readtime').value.trim();
  const date = document.getElementById('admin-blog-date').value.trim();
  const image = document.getElementById('admin-blog-image').value.trim();
  const excerpt = document.getElementById('admin-blog-excerpt').value.trim();
  const content = document.getElementById('admin-blog-content').value.trim();

  const bData = { title, readTime, date, image, excerpt, content };

  if (indexVal !== '') {
    blogs[indexVal] = bData;
  } else {
    blogs.push(bData);
  }

  localStorage.setItem('al_musafa_blogs', JSON.stringify(blogs));
  closeBlogModalAdmin();
  renderBlogsTable();
}

window.deleteBlog = function(index) {
  const item = blogs[index];
  if (!confirm(`Are you sure you want to delete the blog post "${item.title}"?`)) {
    return;
  }

  blogs.splice(index, 1);
  localStorage.setItem('al_musafa_blogs', JSON.stringify(blogs));
  renderBlogsTable();
};
