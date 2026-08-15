// SUPABASE CONFIGURATION
const SUPABASE_URL = 'https://uskxmnshrobcqufnffsa.supabase.co';
const SUPABASE_KEY = 'sb_publishable_HIarZyAMv0Ck5wTuzC3vww_NDK9N8iV';
let supabaseClient = null;

try {
  if (SUPABASE_URL && SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_KEY && SUPABASE_KEY !== 'YOUR_SUPABASE_ANON_KEY') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
} catch (e) {
  console.warn('Supabase JS SDK not loaded or config invalid. Running in local fallback mode.', e);
}

// Product Database
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
    image: 'images/sidr_honey.png',
    variants: [
      { size: 'Standard Set', price: 3500, originalPrice: 4200 }
    ],
    benefits: ['Beautifully handcrafted wooden box presentation', 'Contains top-selling organic items', 'Perfect for weddings, Eid, and corporate events', 'Includes custom gift tag options'],
    inStock: true,
    featured: true
  }
];

// Default Categories Database
const defaultCategories = [
  { name: 'Acacia Honey', filter: 'honey', img: 'images/sidr_honey.png' },
  { name: 'Sidr Honey', filter: 'sidr', img: 'images/sidr_honey.png' },
  { name: 'Desi Ghee', filter: 'delight', img: 'images/desi_ghee.png' },
  { name: 'Gift Boxes', filter: 'gift', img: 'images/sidr_honey.png' }
];

// Default Banners Database
const defaultBanners = {
  hero: [
    { image: 'images/PURE TRADITION,DELIVERED...png', alt: 'Desi Ghee - Richness You Can Taste', link: '#catalog-section' },
    { image: 'images/slider2.png', alt: 'Gift Box - Pure, Desi, and Delightful', link: '#catalog-section' },
    { image: 'images/slider3.png', alt: 'Royal Nuts - Every jar, a promise of Purity', link: '#catalog-section' }
  ],
  promo: [
    { image: 'images/112.png', subtitle: '100% Pure', title: 'Acacia Honey', category: 'honey' },
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

// Local memory state initialized to defaults
let categories = [...defaultCategories];
let products = [...defaultProducts];
const defaultSettings = {
  storeName: 'AL MUSAFFA',
  email: 'hamidtahir617@gmail.com',
  whatsapp: '0328 9816470',
  address: 'Sharaqpur Rd, Near Jamia Farooqia, Rehmanpura, Sheikhupura, 39350',
  shippingLimit: 3000,
  shippingCharge: 250
};
let settings = {...defaultSettings};
let banners = {...defaultBanners};
let testimonials = [...defaultTestimonials];
let blogs = [...defaultBlogs];

// App State
let cart = [];
let currentCategory = 'all';
let currentSort = 'default';
let searchQuery = '';

function sanitizeProductsState() {
  if (!products) return;
  products = products.map(p => {
    let images = [];
    if (p.image) {
      if (Array.isArray(p.image)) {
        images = p.image;
      } else if (typeof p.image === 'string') {
        if (p.image.startsWith('[')) {
          try { images = JSON.parse(p.image); } catch(e) { images = [p.image]; }
        } else {
          images = [p.image];
        }
      }
    }
    const primaryImage = images[0] || 'images/logo.png';

    let variants = [];
    if (p.variants) {
      variants = typeof p.variants === 'string' ? JSON.parse(p.variants) : p.variants;
    }

    return {
      ...p,
      images: images,
      image: primaryImage,
      variants: variants ? (variants.length > 0 ? variants : [{ size: 'Standard', price: 0 }]) : [{ size: 'Standard', price: 0 }],
      benefits: p.benefits || []
    };
  });
}

// DOM Elements & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  // Load Cart from LocalStorage
  loadCart();

  if (supabaseClient) {
    try {
      // 1. Load Settings
      const { data: dbSettings, error: errSettings } = await supabaseClient.from('settings').select('*').single();
      if (!errSettings && dbSettings) {
        settings = {
          storeName: dbSettings.store_name,
          email: 'hamidtahir617@gmail.com',
          whatsapp: '0328 9816470',
          address: 'Sharaqpur Rd, Near Jamia Farooqia, Rehmanpura, Sheikhupura, 39350',
          shippingLimit: dbSettings.shipping_limit,
          shippingCharge: dbSettings.shipping_charge
        };
      }

      // 2. Load Categories
      const { data: dbCategories, error: errCategories } = await supabaseClient.from('categories').select('*').order('id', { ascending: true });
      if (!errCategories && dbCategories && dbCategories.length > 0) {
        categories = dbCategories.map(c => ({
          name: (c.name === 'Raw Honey' || c.name === 'Raw honey') ? 'Acacia Honey' : c.name,
          filter: c.filter,
          img: c.img
        }));
      }

      // 3. Load Products
      const { data: dbProducts, error: errProducts } = await supabaseClient.from('products').select('*');
      if (!errProducts && dbProducts && dbProducts.length > 0) {
        products = dbProducts.map(p => ({
          id: p.id,
          name: p.name,
          category: p.category,
          description: p.description,
          rating: parseFloat(p.rating),
          reviews: p.reviews,
          image: p.image,
          variants: p.variants ? (typeof p.variants === 'string' ? JSON.parse(p.variants) : p.variants) : [],
          benefits: p.benefits || [],
          inStock: p.in_stock,
          featured: p.featured
        }));
      }

      // 4. Load Banners
      const { data: dbBanners, error: errBanners } = await supabaseClient.from('banners').select('*').single();
      if (!errBanners && dbBanners) {
        let promoList = typeof dbBanners.promo === 'string' ? JSON.parse(dbBanners.promo) : dbBanners.promo;
        if (Array.isArray(promoList)) {
          promoList = promoList.map(p => ({
            ...p,
            title: (p.title === 'Raw Honey' || p.title === 'Raw honey') ? 'Acacia Honey' : p.title
          }));
        }
        banners = {
          hero: typeof dbBanners.hero === 'string' ? JSON.parse(dbBanners.hero) : dbBanners.hero,
          promo: promoList
        };
      }

      // 5. Load Testimonials
      const { data: dbTestimonials, error: errTestimonials } = await supabaseClient.from('testimonials').select('*').order('id', { ascending: true });
      if (!errTestimonials && dbTestimonials && dbTestimonials.length > 0) {
        testimonials = dbTestimonials.map(t => ({
          rating: t.rating,
          text: t.text,
          customer: t.customer,
          location: t.location
        }));
      }

      // 6. Load Blogs
      const { data: dbBlogs, error: errBlogs } = await supabaseClient.from('blogs').select('*').order('id', { ascending: true });
      if (!errBlogs && dbBlogs && dbBlogs.length > 0) {
        blogs = dbBlogs.map(b => ({
          title: b.title,
          excerpt: b.excerpt,
          content: b.content,
          image: b.image,
          date: b.date,
          readTime: b.read_time
        }));
      }
    } catch (e) {
      console.warn('Error loading from Supabase, falling back to local storage defaults:', e);
      loadLocalFallback();
    }
  } else {
    loadLocalFallback();
  }

  // Sanitize and ensure backward-compatible product formats
  sanitizeProductsState();

  // Apply settings dynamically
  applyStoreSettings();

  // Render dynamic Category menus and lists
  renderCategoryNavigation();
  renderCategoryFilterTabs();
  renderFooterCategoryLinks();

  // Render Homepage grids
  renderCategories();
  renderProducts();
  renderBanners();
  renderTestimonials();
  renderBlogs();
  initHeroSlider();

  // Set up search bindings
  const searchInput = document.getElementById('search-input');
  const searchResultsOverlay = document.getElementById('search-results');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      handleSearch(searchQuery, searchResultsOverlay);
    });

    // Close search results overlay when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-box')) {
        searchResultsOverlay.classList.remove('active');
      }
    });
  }

  // Close blog view modal when clicking outside its content container
  const blogModal = document.getElementById('blog-view-modal');
  if (blogModal) {
    blogModal.addEventListener('click', (e) => {
      if (e.target === blogModal) {
        closeBlogModal();
      }
    });
  }

  // Setup main menu navigation tabs (SPA behavior)
  setupNavigation();

  // Mobile hamburger menu setup
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  if (menuToggle && mainNav && drawerBackdrop) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      drawerBackdrop.classList.toggle('active');
    });

    drawerBackdrop.addEventListener('click', () => {
      mainNav.classList.remove('active');
      drawerBackdrop.classList.remove('active');
      closeCart();
    });
  }

  // Cart button click listeners
  const cartBtn = document.getElementById('cart-btn');
  const cartClose = document.getElementById('cart-close');
  if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
  }
  if (cartClose) {
    cartClose.addEventListener('click', closeCart);
  }

  // Checkout submission
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  // Newsletter submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for subscribing to AL MUSAFFA newsletter!');
      newsletterForm.reset();
    });
  }

  // Admin Login Modal bindings
  const adminLoginBtn = document.getElementById('admin-login-btn');
  const adminLoginModal = document.getElementById('admin-login-modal');
  const closeLoginModal = document.getElementById('close-login-modal');
  const adminLoginForm = document.getElementById('admin-login-form');
  const loginErrorMsg = document.getElementById('login-error-msg');

  const footerAdminLink = document.getElementById('footer-admin-link');
  const openLoginModalFn = () => {
    adminLoginModal.classList.add('active');
    if (loginErrorMsg) loginErrorMsg.style.display = 'none';
    if (adminLoginForm) adminLoginForm.reset();
  };

  if (adminLoginBtn && adminLoginModal) {
    adminLoginBtn.addEventListener('click', openLoginModalFn);
  }

  if (footerAdminLink && adminLoginModal) {
    footerAdminLink.addEventListener('click', (e) => {
      e.preventDefault();
      openLoginModalFn();
    });
  }

  if (closeLoginModal && adminLoginModal) {
    closeLoginModal.addEventListener('click', () => {
      adminLoginModal.classList.remove('active');
    });
  }

  if (adminLoginModal) {
    adminLoginModal.addEventListener('click', (e) => {
      if (e.target === adminLoginModal) {
        adminLoginModal.classList.remove('active');
      }
    });
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById('login-username');
      const passwordInput = document.getElementById('login-password');
      if (usernameInput && passwordInput) {
        if (usernameInput.value === 'hamid125' && passwordInput.value === 'jamia1974') {
          window.location.href = 'admin.html';
        } else {
          if (loginErrorMsg) {
            loginErrorMsg.style.display = 'block';
          }
        }
      }
    });
  }
}

function applyStoreSettings() {
  // Store Name in Header
  const storeNameElements = document.querySelectorAll('.logo-text');
  storeNameElements.forEach(el => el.innerText = settings.storeName);

  // Announcement Bar text
  const announcementBar = document.querySelector('.announcement-bar');
  if (announcementBar) {
    announcementBar.innerText = `FREE delivery across Pakistan on all orders above Rs. 3000/-`;
  }

  // WhatsApp Float Button
  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) {
    whatsappFloat.href = `https://wa.me/923289816470?text=Assalam-o-Alaikum%20AL%20MUSAFFA,%20I%20am%20interested%20in%20your%20products.`;
  }

  // Footer details are hardcoded in index.html as per request

  // Corporate Orders and Social WhatsApp link updates
  const corporateLink = document.getElementById('footer-corporate-link');
  if (corporateLink) {
    corporateLink.href = `https://wa.me/923289816470?text=Assalam-o-Alaikum%20AL%20MUSAFFA,%20I%20am%20interested%20in%20placing%20a%20Corporate%20Order.`;
  }

  const socialWhatsapp = document.getElementById('social-whatsapp-link');
  if (socialWhatsapp) {
    socialWhatsapp.href = `https://wa.me/923289816470`;
  }
}

// DYNAMIC BANNER RENDERER
function renderBanners() {
  // 1. Render Hero Slider Banners
  const slidesContainer = document.getElementById('hero-slides');
  const dotsContainer = document.getElementById('hero-dots');
  
  if (slidesContainer && dotsContainer) {
    slidesContainer.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    const heroBanners = banners.hero || [];
    const N = heroBanners.length;
    
    if (N > 0) {
      // Update container width dynamically to support N slides
      slidesContainer.style.width = `${N * 100}%`;
      
      heroBanners.forEach((b, index) => {
        const slideLink = document.createElement('a');
        slideLink.href = b.link || '#catalog-section';
        slideLink.className = 'hero-slide';
        // Set dynamic widths for the children so they share the space evenly
        slideLink.style.width = `${100 / N}%`;
        slideLink.style.flex = `0 0 ${100 / N}%`;
        
        const picture = document.createElement('picture');
        if (b.mobile_image) {
          const source = document.createElement('source');
          source.media = '(max-width: 767px)';
          source.srcset = b.mobile_image;
          picture.appendChild(source);
        }
        
        const img = document.createElement('img');
        img.src = b.image;
        img.alt = b.alt || 'AL MUSAFFA Banner';
        picture.appendChild(img);
        
        slideLink.appendChild(picture);
        slidesContainer.appendChild(slideLink);
        
        // Render dot
        const dot = document.createElement('span');
        dot.className = `slider-dot${index === 0 ? ' active' : ''}`;
        dot.setAttribute('data-index', index);
        dotsContainer.appendChild(dot);
      });
    }
  }
  
  // 2. Render Promo Banners Section
  const promoContainer = document.querySelector('.promo-banners-container');
  if (promoContainer) {
    promoContainer.innerHTML = '';
    const promoBanners = banners.promo || [];
    promoBanners.forEach(b => {
      const card = document.createElement('a');
      card.href = '#';
      card.className = 'promo-banner-card';
      card.onclick = (e) => {
        e.preventDefault();
        filterByCategory(b.category);
      };
      
      const bgDiv = document.createElement('div');
      bgDiv.className = 'promo-banner-bg';
      bgDiv.style.backgroundImage = `url('${b.image}')`;
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'promo-banner-content';
      
      const subtitleSpan = document.createElement('span');
      subtitleSpan.className = 'promo-banner-subtitle';
      subtitleSpan.textContent = b.subtitle;
      
      const titleH3 = document.createElement('h3');
      titleH3.className = 'promo-banner-title';
      titleH3.textContent = b.title;
      
      contentDiv.appendChild(subtitleSpan);
      contentDiv.appendChild(titleH3);
      
      card.appendChild(bgDiv);
      card.appendChild(contentDiv);
      promoContainer.appendChild(card);
    });
  }
}

// RENDER TESTIMONIALS (CUSTOMER REVIEWS)
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  container.innerHTML = '';
  
  if (testimonials.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0;">No reviews found. Be the first to leave feedback!</div>';
    return;
  }

  testimonials.forEach(t => {
    const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
    const initials = t.customer
      .split(' ')
      .map(w => w.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const card = document.createElement('div');
    card.className = 'testimonial-card';

    card.innerHTML = `
      <div class="testimonial-stars" style="color: #ffb703; font-size: 18px; margin-bottom: 12px;">${stars}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-user">
        <div class="user-avatar">${initials}</div>
        <div class="user-details">
          <h4>${t.customer}</h4>
          <span>${t.location} • Verified Buyer</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// RENDER DYNAMIC BLOG ARTICLES
function renderBlogs() {
  const container = document.getElementById('blogs-container');
  if (!container) return;

  container.innerHTML = '';

  if (blogs.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--color-text-muted); padding: 40px 0;">No blog posts available at the moment. Check back soon!</div>';
    return;
  }

  blogs.forEach((b, index) => {
    const article = document.createElement('article');
    article.className = 'blog-post';

    article.innerHTML = `
      <div class="blog-img">
        <img src="${b.image}" alt="${b.title}" onerror="this.src='images/logo.png'">
      </div>
      <div class="blog-info">
        <span class="blog-date">${b.date} • ${b.readTime || '5 min read'}</span>
        <h3>${b.title}</h3>
        <p class="blog-excerpt">${b.excerpt}</p>
        <a href="#" class="read-more" onclick="openBlogModal(${index}); return false;">Read More →</a>
      </div>
    `;
    container.appendChild(article);
  });
}

// OPEN BLOG POST MODAL
window.openBlogModal = function(index) {
  const blog = blogs[index];
  if (!blog) return;

  const modal = document.getElementById('blog-view-modal');
  if (!modal) return;

  document.getElementById('blog-modal-title').innerText = blog.title;
  document.getElementById('blog-modal-meta').innerText = `${blog.date} • ${blog.readTime || '5 min read'}`;
  document.getElementById('blog-modal-image').src = blog.image;
  document.getElementById('blog-modal-image').onerror = function() { this.src = 'images/logo.png'; };
  
  const contentBody = document.getElementById('blog-modal-content');
  if (contentBody) {
    const rawContent = blog.content || blog.excerpt || '';
    contentBody.innerHTML = rawContent
      .split('\n\n')
      .map(p => `<p style="margin-bottom: 15px; line-height: 1.7; color: var(--color-text);">${p.replace(/\n/g, '<br>')}</p>`)
      .join('');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// CLOSE BLOG POST MODAL
window.closeBlogModal = function() {
  const modal = document.getElementById('blog-view-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = 'auto';
};

// HERO BANNER SLIDER
function initHeroSlider() {
  const slides = document.getElementById('hero-slides');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  if (!slides || dots.length === 0) return;

  let currentIndex = 0;
  const slideCount = slides.children.length;
  let slideInterval = setInterval(nextSlide, 3000);

  function updateSlider() {
    slides.style.transform = `translateX(-${(currentIndex * 100) / slideCount}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      currentIndex = parseInt(e.target.getAttribute('data-index'));
      updateSlider();
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  }
}

// NAVIGATION / SPA TAB ROUTER
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Close mobile navigation drawer if open
      document.getElementById('main-nav').classList.remove('active');
      document.getElementById('drawer-backdrop').classList.remove('active');

      const targetView = link.getAttribute('data-view');
      const categoryFilter = link.getAttribute('data-category');

      // Switch view
      switchView(targetView);

      // Update active nav-link highlighting
      navLinks.forEach(nl => nl.classList.remove('active'));
      link.classList.add('active');

      if (categoryFilter) {
        currentCategory = categoryFilter;

        // Update product catalog tab filters highlighting
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(tab => {
          if (tab.getAttribute('data-category') === categoryFilter) {
            tab.classList.add('active');
          } else {
            tab.classList.remove('active');
          }
        });

        renderProducts();

        // Scroll smoothly to catalog
        const catalogSec = document.getElementById('catalog-section');
        if (catalogSec) {
          catalogSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Logo clicking goes to Home
  const logoLink = document.getElementById('logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('home');
      navLinks.forEach(nl => nl.classList.remove('active'));
      const homeLink = Array.from(navLinks).find(l => l.getAttribute('data-view') === 'home');
      if (homeLink) homeLink.classList.add('active');
    });
  }
}

function switchView(viewName) {
  const views = document.querySelectorAll('.view-section');
  views.forEach(view => {
    view.classList.remove('active-view');
  });

  const activeView = document.getElementById(`${viewName}-view`);
  if (activeView) {
    activeView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// DYNAMIC CATEGORY SHOWCASE
function renderCategories() {
  const categoryContainer = document.getElementById('categories-grid');
  if (!categoryContainer) return;

  categoryContainer.innerHTML = categories.map(cat => `
    <div class="category-card" onclick="filterByCategory('${cat.filter}')">
      <div class="category-img-container">
        <img src="${cat.img}" alt="${cat.name}" class="category-img" onerror="this.src='images/logo.png'">
      </div>
      <h3 class="category-title">${cat.name}</h3>
    </div>
  `).join('');
}

function renderCategoryNavigation() {
  const navUl = document.querySelector('#main-nav ul');
  if (!navUl) return;

  let html = `<li><a href="#" class="nav-link active" data-view="home">Home</a></li>`;
  categories.forEach(cat => {
    html += `<li><a href="#" class="nav-link" data-view="home" data-category="${cat.filter}">${cat.name}</a></li>`;
  });

  navUl.innerHTML = html;
}

function renderCategoryFilterTabs() {
  const container = document.getElementById('catalog-filter-tabs');
  if (!container) return;

  let html = `<button class="filter-tab active" data-category="all" onclick="handleFilterTabClick('all')">All Products</button>`;
  categories.forEach(cat => {
    html += `<button class="filter-tab" data-category="${cat.filter}" onclick="handleFilterTabClick('${cat.filter}')">${cat.name}</button>`;
  });

  container.innerHTML = html;
}

function renderFooterCategoryLinks() {
  const container = document.getElementById('footer-categories-links');
  if (!container) return;

  let html = `<li><a href="#" class="nav-link" data-view="home">Home</a></li>`;
  categories.forEach(cat => {
    html += `<li><a href="#" class="nav-link" data-view="home" data-category="${cat.filter}">${cat.name}</a></li>`;
  });

  container.innerHTML = html;
}

function filterByCategory(category) {
  currentCategory = category;

  // Highlight correct nav-links & product catalog filters
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    if (tab.getAttribute('data-category') === category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('data-category') === category) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  renderProducts();

  const catalogSec = document.getElementById('catalog-section');
  if (catalogSec) {
    catalogSec.scrollIntoView({ behavior: 'smooth' });
  }
}

// DYNAMIC PRODUCT CATALOG LISTING
function renderProducts() {
  const productContainer = document.getElementById('product-grid');
  if (!productContainer) return;

  // Filter products
  let filteredProducts = products.filter(p => {
    return currentCategory === 'all' || p.category === currentCategory;
  });

  // Sort products
  if (currentSort === 'price-low') {
    filteredProducts.sort((a, b) => ((a.variants && a.variants[0]) ? a.variants[0].price : 0) - ((b.variants && b.variants[0]) ? b.variants[0].price : 0));
  } else if (currentSort === 'price-high') {
    filteredProducts.sort((a, b) => ((b.variants && b.variants[0]) ? b.variants[0].price : 0) - ((a.variants && a.variants[0]) ? a.variants[0].price : 0));
  } else if (currentSort === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // HTML Rendering
  productContainer.innerHTML = filteredProducts.map(p => {
    const variants = p.variants && p.variants.length > 0 ? p.variants : [{ size: 'Standard', price: 0 }];
    const minPrice = variants[0].price;
    const maxPrice = variants[variants.length - 1].price;
    const comparePrice = variants[0].originalPrice;

    const priceDisplay = variants.length > 1
      ? `Rs. ${minPrice} - Rs. ${maxPrice}`
      : `Rs. ${minPrice}`;

    const compareDisplay = comparePrice ? `<span class="price-compare">Rs. ${comparePrice}</span>` : '';

    // Create rating stars
    let starsHtml = '';
    const fullStars = Math.floor(p.rating);
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsHtml += '★';
      } else {
        starsHtml += '☆';
      }
    }

    return `
      <div class="product-card" id="card-${p.id}">
        ${comparePrice ? `<span class="product-badge">Sale</span>` : ''}
        <div class="product-image-wrapper">
          <img src="${p.image}" alt="${p.name}" onerror="this.src='images/logo.png'">
          <div class="product-card-actions">
            <button class="btn btn-block" onclick="openProductDetail('${p.id}')">Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-rating">${starsHtml} <span>(${p.reviews})</span></div>
          <h3 class="product-card-title"><a href="#" onclick="openProductDetail('${p.id}'); return false;">${p.name}</a></h3>
          <div class="product-pricing">
            <span>Rs. ${minPrice}</span>
            ${compareDisplay}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Handling Filter Tabs Clicking
window.handleFilterTabClick = function (category) {
  currentCategory = category;

  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    if (tab.getAttribute('data-category') === category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  renderProducts();
};

// Handling Sorting Selector
window.handleSortChange = function (event) {
  currentSort = event.target.value;
  renderProducts();
};

// REAL-TIME SEARCH OVERLAY
function handleSearch(query, resultsOverlay) {
  if (!query) {
    resultsOverlay.classList.remove('active');
    return;
  }

  const matches = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  ).slice(0, 5); // Max 5 results

  if (matches.length > 0) {
    resultsOverlay.innerHTML = matches.map(p => `
      <div class="search-result-item" onclick="openProductDetail('${p.id}')">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='images/logo.png'">
        <div>
          <div class="search-result-name">${p.name}</div>
          <div class="search-result-price">Rs. ${(p.variants && p.variants[0]) ? p.variants[0].price : 0}</div>
        </div>
      </div>
    `).join('');
    resultsOverlay.classList.add('active');
  } else {
    resultsOverlay.innerHTML = '<div style="padding: 15px; font-size: 14px; color: var(--color-text-muted);">No products found</div>';
    resultsOverlay.classList.add('active');
  }
}

window.changeDetailMainImage = function(imgUrl, thumbEl) {
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) {
    mainImg.src = imgUrl;
  }
  const thumbs = document.querySelectorAll('.detail-thumbnail');
  thumbs.forEach(t => t.classList.remove('active'));
  if (thumbEl) {
    thumbEl.classList.add('active');
  }
};

// PRODUCT DETAILS MODAL
let currentDetailProduct = null;
let currentDetailVariant = null;

window.openProductDetail = function (productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentDetailProduct = product;
  currentDetailVariant = (product.variants && product.variants[0]) ? product.variants[0] : { size: 'Standard', price: 0 };

  const modal = document.getElementById('product-detail-modal');
  const modalContentContainer = document.getElementById('modal-product-content');

  // Stars
  let starsHtml = '';
  const fullStars = Math.floor(product.rating);
  for (let i = 0; i < 5; i++) {
    starsHtml += i < fullStars ? '★' : '☆';
  }

  // Variant options chips
  const variants = product.variants && product.variants.length > 0 ? product.variants : [{ size: 'Standard', price: 0 }];
    const variantChips = variants.map((v, index) => `
    <button class="variant-chip ${index === 0 ? 'active' : ''}" 
            onclick="selectDetailVariant(${index}, this)">
      ${v.size}
    </button>
  `).join('');

  // Benefits list
  const benefitsList = product.benefits.map(b => `
    <div class="benefit-item">
      <i class="benefit-check-icon">✓</i>
      <span>${b}</span>
    </div>
  `).join('');

  const productImages = product.images && product.images.length > 0 ? product.images : [product.image || 'images/logo.png'];
  
  // Render gallery thumbnails if there are multiple images
  let galleryHtml = '';
  if (productImages.length > 1) {
    const thumbHtml = productImages.map((imgUrl, idx) => `
      <div class="detail-thumbnail ${idx === 0 ? 'active' : ''}" onclick="changeDetailMainImage('${imgUrl}', this)">
        <img src="${imgUrl}" onerror="this.src='images/logo.png'">
      </div>
    `).join('');
    galleryHtml = `
      <div class="product-detail-thumbnails">
        ${thumbHtml}
      </div>
    `;
  }

  modalContentContainer.innerHTML = `
    <div class="product-detail-layout">
      <div class="product-detail-gallery">
        <div class="product-detail-images">
          <img id="detail-main-img" src="${productImages[0]}" alt="${product.name}" onerror="this.src='images/logo.png'">
        </div>
        ${galleryHtml}
      </div>
      <div class="product-detail-info">
        <h2 class="detail-title">${product.name}</h2>
        <div class="detail-rating" style="color:#ffc107">${starsHtml} <span style="color:var(--color-text-muted); font-size:14px">(${product.reviews} reviews)</span></div>
        <div class="detail-price" id="detail-product-price">Rs. ${currentDetailVariant.price}</div>
        <p class="detail-desc">${product.description}</p>
        
        <div class="variant-selector-wrap">
          <span class="variant-label">Select Weight / Size:</span>
          <div class="variant-chips">
            ${variantChips}
          </div>
        </div>

        <div class="quantity-add-to-cart" style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
          <div class="quantity-selector">
            <button class="qty-btn" onclick="adjustDetailQty(-1)">-</button>
            <input type="number" id="detail-qty-input" class="qty-input" value="1" min="1" readonly>
            <button class="qty-btn" onclick="adjustDetailQty(1)">+</button>
          </div>
          <button class="btn btn-secondary" style="flex: 1; min-width: 120px; background-color: var(--color-primary); color: white; border: none; border-radius: var(--border-radius-button); transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#a3721c'" onmouseout="this.style.backgroundColor='#C48B25'" onclick="addDetailProductToCart()">Add To Cart</button>
          <button class="btn" style="flex: 1; min-width: 120px; background-color: var(--color-primary); color: white; border: none; border-radius: var(--border-radius-button); transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#a3721c'" onmouseout="this.style.backgroundColor='#C48B25'" onclick="buyNowDetailProduct()">Buy Now</button>
        </div>

        <div class="product-benefits">
          <span class="variant-label">Core Benefits:</span>
          ${benefitsList}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock body scrolling
};

window.closeProductDetail = function () {
  const modal = document.getElementById('product-detail-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Unlock scrolling
};

window.selectDetailVariant = function (index, element) {
  if (!currentDetailProduct) return;
  currentDetailVariant = (currentDetailProduct.variants && currentDetailProduct.variants[index]) ? currentDetailProduct.variants[index] : { size: 'Standard', price: 0 };

  // Update active chip UI
  const chips = document.querySelectorAll('.variant-chip');
  chips.forEach(c => c.classList.remove('active'));
  element.classList.add('active');

  // Update price in modal
  document.getElementById('detail-product-price').innerText = `Rs. ${currentDetailVariant.price}`;
};

window.adjustDetailQty = function (amount) {
  const qtyInput = document.getElementById('detail-qty-input');
  if (!qtyInput) return;

  let currentVal = parseInt(qtyInput.value);
  currentVal += amount;
  if (currentVal < 1) currentVal = 1;
  qtyInput.value = currentVal;
};

window.addDetailProductToCart = function () {
  if (!currentDetailProduct || !currentDetailVariant) return;

  const qtyInput = document.getElementById('detail-qty-input');
  const qty = parseInt(qtyInput.value) || 1;

  addToCart(currentDetailProduct.id, currentDetailVariant.size, qty);
  closeProductDetail();
};

window.buyNowDetailProduct = function () {
  if (!currentDetailProduct || !currentDetailVariant) return;

  const qtyInput = document.getElementById('detail-qty-input');
  const qty = parseInt(qtyInput.value) || 1;

  addToCart(currentDetailProduct.id, currentDetailVariant.size, qty);
  closeProductDetail();
  goToCheckout();
};

// CART STATE & DRAWER MANAGEMENT
function loadCart() {
  const savedCart = localStorage.getItem('al_musafa_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
  updateCartBadge();
}

function saveCart() {
  localStorage.setItem('al_musafa_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.getElementById('cart-count-badge');
  if (cartBadge) {
    cartBadge.innerText = count;
    cartBadge.style.display = count > 0 ? 'flex' : 'none';
  }
}

window.openCart = function () {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  renderCartDrawer();
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCart = function () {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

function addToCart(productId, variantSize, quantity) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const variants = product.variants && product.variants.length > 0 ? product.variants : [];
  const variant = variants.find(v => v.size === variantSize);
  if (!variant) return;

  const cartKey = `${productId}_${variantSize}`;
  const existingItemIndex = cart.findIndex(item => item.cartKey === cartKey);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      cartKey: cartKey,
      productId: productId,
      name: product.name,
      size: variantSize,
      price: variant.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  openCart(); // Show cart after adding
}

window.updateCartQty = function (cartKey, newQty) {
  const index = cart.findIndex(item => item.cartKey === cartKey);
  if (index === -1) return;

  cart[index].quantity = parseInt(newQty);
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCartDrawer();
};

window.removeCartItem = function (cartKey) {
  cart = cart.filter(item => item.cartKey !== cartKey);
  saveCart();
  renderCartDrawer();
};

// RENDER CART CONTENT DYNAMICALLY
function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-items-list');
  const subtotalPriceEl = document.getElementById('cart-subtotal-price');
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  const progressFill = document.getElementById('progress-bar-fill');
  const progressText = document.getElementById('progress-text');

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <span class="empty-cart-icon">🛒</span>
        <h3>Your cart is empty</h3>
        <p>Browse our catalog to add healthy organic products to your cart.</p>
        <button class="btn btn-secondary" onclick="closeCart()">Continue Shopping</button>
      </div>
    `;
    subtotalPriceEl.innerText = 'Rs. 0';
    if (checkoutBtn) checkoutBtn.disabled = true;

    progressFill.style.width = '0%';
    progressText.innerText = 'Add Rs. 3,000 more to get FREE SHIPPING!';
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  // Render items
  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <button class="cart-item-remove" onclick="removeCartItem('${item.cartKey}')">×</button>
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='images/logo.png'">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">Size: ${item.size}</div>
        <div class="cart-item-bottom">
          <div class="cart-qty-selector">
            <button class="cart-qty-btn" onclick="updateCartQty('${item.cartKey}', ${item.quantity - 1})">-</button>
            <input type="text" class="cart-qty-input" value="${item.quantity}" readonly>
            <button class="cart-qty-btn" onclick="updateCartQty('${item.cartKey}', ${item.quantity + 1})">+</button>
          </div>
          <div class="cart-item-price">Rs. ${item.price * item.quantity}</div>
        </div>
      </div>
    </div>
  `).join('');

  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  subtotalPriceEl.innerText = `Rs. ${subtotal}`;

  // Shipping progress indicator
  const freeShippingThreshold = settings.shippingLimit;
  if (subtotal >= freeShippingThreshold) {
    progressFill.style.width = '100%';
    progressText.innerText = '🎉 Congratulations! You have unlocked FREE SHIPPING!';
  } else {
    const remaining = freeShippingThreshold - subtotal;
    const percentage = (subtotal / freeShippingThreshold) * 100;
    progressFill.style.width = `${percentage}%`;
    progressText.innerText = `Add Rs. ${remaining} more for FREE SHIPPING!`;
  }
}

// CHECKOUT VIEW / ROUTING
window.goToCheckout = function () {
  closeCart();
  if (cart.length === 0) {
    alert('Your cart is empty! Please add products before checking out.');
    return;
  }

  switchView('checkout');
  renderCheckoutSummary();
};

function renderCheckoutSummary() {
  const summaryContainer = document.getElementById('checkout-items-list');
  const subtotalValEl = document.getElementById('summary-subtotal');
  const shippingValEl = document.getElementById('summary-shipping');
  const totalValEl = document.getElementById('summary-total');

  if (!summaryContainer) return;

  summaryContainer.innerHTML = cart.map(item => `
    <div class="checkout-summary-item">
      <div class="summary-item-info">
        <div class="summary-item-img">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='images/logo.png'">
        </div>
        <div>
          <h4 class="summary-item-title">${item.name}</h4>
          <span class="summary-item-qty">Qty: ${item.quantity} | Size: ${item.size}</span>
        </div>
      </div>
      <span class="summary-item-price">Rs. ${item.price * item.quantity}</span>
    </div>
  `).join('');

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingCost = subtotal >= settings.shippingLimit ? 0 : settings.shippingCharge;
  const total = subtotal + shippingCost;

  subtotalValEl.innerText = `Rs. ${subtotal}`;
  shippingValEl.innerText = shippingCost === 0 ? 'FREE' : `Rs. ${shippingCost}`;
  totalValEl.innerText = `Rs. ${total}`;
}

// Handle Payment Method Choice
window.selectPaymentMethod = function (method) {
  const codRadio = document.getElementById('payment-cod');
  const bankRadio = document.getElementById('payment-bank');
  const options = document.querySelectorAll('.payment-option');

  options.forEach(opt => opt.classList.remove('active'));

  if (method === 'cod') {
    codRadio.checked = true;
    document.getElementById('opt-cod').classList.add('active');
  } else if (method === 'bank') {
    bankRadio.checked = true;
    document.getElementById('opt-bank').classList.add('active');
  }
};

// CHECKOUT FORM VALIDATION & SUCCESS HANDLERS
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('customer-name').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  const address = document.getElementById('customer-address').value.trim();
  const city = document.getElementById('customer-city').value;
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked').value;

  // Simple validation
  if (!name || !phone || !address || !city) {
    alert('Please fill out all shipping details.');
    return;
  }

  // Pakistan phone format check (e.g. 03001234567 or +923001234567 or with hyphens)
  const phonePattern = /^((\+92)|(0092)|(0))3\d{9}$/;
  const sanitizedPhone = phone.replace(/[-\s]/g, '');
  if (!phonePattern.test(sanitizedPhone)) {
    alert('Please enter a valid Pakistan phone number starting with 03 or +92 (e.g. 03001234567).');
    return;
  }

  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingCost = subtotal >= settings.shippingLimit ? 0 : settings.shippingCharge;
  const total = subtotal + shippingCost;
  const orderId = `AM-${Math.floor(100000 + Math.random() * 900000)}`;

  // Save order to localStorage for Admin Portal
  const orderObj = {
    orderId,
    customer: {
      name,
      phone,
      address,
      city
    },
    items: cart.map(item => ({
      name: item.name,
      size: item.size,
      price: item.price,
      quantity: item.quantity
    })),
    subtotal,
    shipping: shippingCost,
    total,
    paymentMethod,
    status: 'pending',
    date: new Date().toISOString()
  };

  const savedOrders = localStorage.getItem('al_musafa_orders');
  let ordersList = [];
  if (savedOrders) {
    try {
      ordersList = JSON.parse(savedOrders);
    } catch (e) {
      ordersList = [];
    }
  }
  ordersList.push(orderObj);
  localStorage.setItem('al_musafa_orders', JSON.stringify(ordersList));

  if (supabaseClient) {
    supabaseClient.from('orders').insert({
      order_id: orderId,
      customer: { name, phone, address, city },
      items: cart.map(item => ({
        name: item.name,
        size: item.size,
        price: item.price,
        quantity: item.quantity
      })),
      subtotal,
      shipping: shippingCost,
      total,
      payment_method: paymentMethod,
      status: 'pending',
      date: new Date().toISOString()
    }).then(({ error }) => {
      if (error) console.error('Error inserting order to Supabase:', error);
    });
  }

  // Populate order success page details
  document.getElementById('success-order-id').innerText = orderId;

  // Render Invoice
  const invoiceItemsEl = document.getElementById('invoice-items');
  const invoiceDetailsEl = document.getElementById('invoice-details');

  invoiceItemsEl.innerHTML = cart.map(item => `
    <div class="invoice-row">
      <span>${item.name} (${item.size}) x ${item.quantity}</span>
      <span>Rs. ${item.price * item.quantity}</span>
    </div>
  `).join('');

  invoiceDetailsEl.innerHTML = `
    <div class="invoice-row">
      <span>Payment Method:</span>
      <span style="font-weight: 600; text-transform: uppercase;">${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Bank Transfer'}</span>
    </div>
    <div class="invoice-row">
      <span>Delivery Address:</span>
      <span style="max-width: 60%; text-align: right;">${name}, ${address}, ${city} (${phone})</span>
    </div>
    <div class="invoice-row">
      <span>Subtotal:</span>
      <span>Rs. ${subtotal}</span>
    </div>
    <div class="invoice-row">
      <span>Shipping:</span>
      <span>${shippingCost === 0 ? 'FREE' : 'Rs. ' + shippingCost}</span>
    </div>
    <div class="invoice-row invoice-total">
      <span>Total Amount:</span>
      <span>Rs. ${total}</span>
    </div>
  `;

  // Clear cart and LocalStorage
  cart = [];
  saveCart();

  // Reset form
  e.target.reset();

  // Switch to success view
  switchView('success');
}

function loadLocalFallback() {
  try {
    const localSettings = localStorage.getItem('al_musafa_settings');
    if (localSettings) settings = JSON.parse(localSettings);

    const localCategories = localStorage.getItem('al_musafa_categories');
    if (localCategories) categories = JSON.parse(localCategories);

    const localProducts = localStorage.getItem('al_musafa_products');
    if (localProducts) products = JSON.parse(localProducts);

    const localBanners = localStorage.getItem('al_musafa_banners');
    if (localBanners) banners = JSON.parse(localBanners);

    const localTestimonials = localStorage.getItem('al_musafa_testimonials');
    if (localTestimonials) testimonials = JSON.parse(localTestimonials);

    const localBlogs = localStorage.getItem('al_musafa_blogs');
    if (localBlogs) blogs = JSON.parse(localBlogs);
  } catch (e) {
    console.error('Error reading localStorage fallback:', e);
  }
}
