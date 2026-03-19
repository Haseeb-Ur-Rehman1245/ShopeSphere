const products = [
  {
    id: 1,
    title: "AeroFlex Running Sneakers",
    category: "Footwear",
    price: 89.99,
    oldPrice: 109.99,
    rating: 4.7,
    badge: "Sale",
    featured: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description: "Lightweight performance sneakers with breathable mesh, responsive cushioning, and a street-ready silhouette."
  },
  {
    id: 2,
    title: "Nova Wireless Headphones",
    category: "Electronics",
    price: 149.99,
    oldPrice: 179.99,
    rating: 4.8,
    badge: "Hot",
    featured: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    description: "Immersive over-ear headphones with active noise cancellation, soft ear cushions, and rich balanced sound."
  },
  {
    id: 3,
    title: "Luma Glass Desk Lamp",
    category: "Home",
    price: 64.99,
    oldPrice: 79.99,
    rating: 4.5,
    badge: "New",
    featured: false,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    description: "Minimal ambient desk lamp with frosted glass shade and warm LED glow for modern interiors."
  },
  {
    id: 4,
    title: "Urban Utility Backpack",
    category: "Accessories",
    price: 79.99,
    oldPrice: 99.99,
    rating: 4.6,
    badge: "Popular",
    featured: true,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
    description: "Water-resistant backpack with laptop sleeve, padded straps, and organized compartments for daily carry."
  },
  {
    id: 5,
    title: "Classic Leather Watch",
    category: "Accessories",
    price: 119.99,
    oldPrice: 139.99,
    rating: 4.4,
    badge: "Classic",
    featured: false,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
    description: "Elegant leather strap watch featuring a polished case and refined dial for timeless everyday style."
  },
  {
    id: 6,
    title: "CloudSoft Lounge Chair",
    category: "Home",
    price: 229.99,
    oldPrice: 269.99,
    rating: 4.9,
    badge: "Premium",
    featured: true,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    description: "A sculpted accent chair with plush comfort, soft upholstery, and a minimalist profile."
  },
  {
    id: 7,
    title: "Zen Ceramic Mug Set",
    category: "Home",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.3,
    badge: "New",
    featured: false,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=80",
    description: "Matte-finish handcrafted ceramic mugs designed to bring a calm, elevated feel to your coffee ritual."
  },
  {
    id: 8,
    title: "Orbit Smart Speaker",
    category: "Electronics",
    price: 99.99,
    oldPrice: 119.99,
    rating: 4.5,
    badge: "Smart",
    featured: false,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=900&q=80",
    description: "Compact smart speaker with room-filling sound, voice assistance, and a modern fabric-wrapped design."
  },
  {
    id: 9,
    title: "Monarch Overshirt",
    category: "Fashion",
    price: 69.99,
    oldPrice: 84.99,
    rating: 4.4,
    badge: "Trending",
    featured: false,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    description: "Relaxed-fit overshirt crafted from premium cotton blend with a versatile layer-friendly silhouette."
  },
  {
    id: 10,
    title: "Vertex Mechanical Keyboard",
    category: "Electronics",
    price: 129.99,
    oldPrice: 149.99,
    rating: 4.8,
    badge: "Top Rated",
    featured: true,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80",
    description: "Responsive mechanical keyboard with tactile switches, compact layout, and clean workstation aesthetics."
  },
  {
    id: 11,
    title: "Solace Knit Hoodie",
    category: "Fashion",
    price: 74.99,
    oldPrice: 94.99,
    rating: 4.6,
    badge: "Cozy",
    featured: false,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80",
    description: "Soft premium hoodie with minimalist detailing, cozy brushed interior, and modern tailored fit."
  },
  {
    id: 12,
    title: "Arc Stainless Bottle",
    category: "Accessories",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.7,
    badge: "Eco",
    featured: false,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
    description: "Double-wall insulated bottle that keeps drinks cold for hours in a sleek, travel-friendly form."
  }
];

const CART_STORAGE_KEY = "shopsphere-cart-v2";
const WISHLIST_STORAGE_KEY = "shopsphere-wishlist-v2";

const state = {
  selectedCategory: "All",
  searchQuery: "",
  sortOption: "default",
  showWishlistOnly: false,
  activeProduct: null,
  cart: loadJSON(CART_STORAGE_KEY, []),
  wishlist: loadJSON(WISHLIST_STORAGE_KEY, [])
};

const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const toggleWishlistViewBtn = document.getElementById("toggleWishlistViewBtn");

const resultsInfo = document.getElementById("resultsInfo");
const totalProductsStat = document.getElementById("totalProductsStat");
const cartItemsStat = document.getElementById("cartItemsStat");
const wishlistItemsStat = document.getElementById("wishlistItemsStat");

const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");

const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModalBtn");

const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const openCartBtn = document.getElementById("openCartBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const cartItems = document.getElementById("cartItems");

const summaryItems = document.getElementById("summaryItems");
const summarySubtotal = document.getElementById("summarySubtotal");
const summaryDiscount = document.getElementById("summaryDiscount");
const summaryTax = document.getElementById("summaryTax");
const summaryTotal = document.getElementById("summaryTotal");

const shippingProgressFill = document.getElementById("shippingProgressFill");
const shippingProgressLabel = document.getElementById("shippingProgressLabel");
const shippingMessage = document.getElementById("shippingMessage");

const shopNowBtn = document.getElementById("shopNowBtn");
const browseAllBtn = document.getElementById("browseAllBtn");
const openWishlistInfoBtn = document.getElementById("openWishlistInfoBtn");

const toastContainer = document.getElementById("toastContainer");

init();

function init() {
  totalProductsStat.textContent = products.length;
  renderCategoryFilters();
  renderProducts();
  renderCart();
  renderWishlistStats();
  bindEvents();
}

function bindEvents() {
  searchInput.addEventListener("input", (event) => {
    state.searchQuery = event.target.value.trim().toLowerCase();
    renderProducts();
  });

  sortSelect.addEventListener("change", (event) => {
    state.sortOption = event.target.value;
    renderProducts();
  });

  toggleWishlistViewBtn.addEventListener("click", () => {
    state.showWishlistOnly = !state.showWishlistOnly;
    toggleWishlistViewBtn.textContent = state.showWishlistOnly
      ? "Show All Products"
      : "Show Wishlist Only";
    renderProducts();
  });

  openWishlistInfoBtn.addEventListener("click", () => {
    state.showWishlistOnly = true;
    toggleWishlistViewBtn.textContent = "Show All Products";
    renderProducts();
    showToast("Showing wishlist items only.", "info");
    window.scrollTo({ top: document.querySelector("main").offsetTop - 80, behavior: "smooth" });
  });

  openCartBtn.addEventListener("click", openCart);
  cartOverlay.addEventListener("click", closeCart);
  clearCartBtn.addEventListener("click", clearCart);

  closeModalBtn.addEventListener("click", closeModal);

  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeCart();
    }
  });

  shopNowBtn.addEventListener("click", () => {
    window.scrollTo({
      top: document.querySelector("main").offsetTop - 80,
      behavior: "smooth"
    });
  });

  browseAllBtn.addEventListener("click", resetFilters);
}

function loadJSON(key, fallback) {
  try {
    const rawValue = localStorage.getItem(key);

    if (!rawValue) {
      return fallback;
    }

    return JSON.parse(rawValue) || fallback;
  } catch (error) {
    console.error(`Failed to load ${key}`, error);
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to save ${key}`, error);
  }
}

function getCategories() {
  return ["All", ...new Set(products.map((product) => product.category))];
}

function getFilteredProducts() {
  let filtered = products.filter((product) => {
    const matchesCategory =
      state.selectedCategory === "All" || product.category === state.selectedCategory;

    const searchable = `${product.title} ${product.category} ${product.description} ${product.badge}`.toLowerCase();
    const matchesSearch = searchable.includes(state.searchQuery);

    const matchesWishlist =
      !state.showWishlistOnly || state.wishlist.includes(product.id);

    return matchesCategory && matchesSearch && matchesWishlist;
  });

  filtered = sortProducts(filtered, state.sortOption);

  return filtered;
}

function sortProducts(items, sortOption) {
  const sorted = [...items];

  switch (sortOption) {
    case "price-low":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "name-az":
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "rating-high":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    default:
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
      break;
  }

  return sorted;
}

function renderCategoryFilters() {
  const categories = getCategories();

  categoryFilters.innerHTML = categories
    .map((category) => {
      return `
        <button
          class="filter-btn ${state.selectedCategory === category ? "active" : ""}"
          data-category="${category}"
        >
          ${category}
        </button>
      `;
    })
    .join("");

  categoryFilters.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = button.dataset.category;
      renderCategoryFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  resultsInfo.textContent = `${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""} found`;

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <h3 style="margin-bottom: 0.5rem; color: white;">No products matched your current filters</h3>
        <p>Try changing category, search text, sort option, or wishlist view.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map((product) => {
      const isWishlisted = state.wishlist.includes(product.id);

      return `
        <article class="product-card">
          <div class="product-media">
            <img src="${product.image}" alt="${product.title}">
            <div class="category-pill">${product.category}</div>
            <div class="product-badge">${product.badge}</div>
            <div class="rating-pill">⭐ ${product.rating}</div>

            <button
              class="wishlist-toggle ${isWishlisted ? "active" : ""}"
              data-wishlist-id="${product.id}"
              title="Toggle wishlist"
            >
              ❤
            </button>
          </div>

          <div class="product-body">
            <div class="product-top">
              <div>
                <h3 class="product-title">${product.title}</h3>
              </div>

              <div class="price-block">
                <div class="price">${formatCurrency(product.price)}</div>
                <div class="old-price">${formatCurrency(product.oldPrice)}</div>
              </div>
            </div>

            <p class="product-desc">${product.description}</p>

            <div class="product-actions">
              <button class="ghost-chip" data-view-id="${product.id}">Quick View</button>
              <button class="add-btn" data-add-id="${product.id}">Add to Cart</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  attachProductCardEvents();
}

function attachProductCardEvents() {
  productGrid.querySelectorAll("[data-view-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openModal(Number(button.dataset.viewId));
    });
  });

  productGrid.querySelectorAll("[data-add-id]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.addId));
    });
  });

  productGrid.querySelectorAll("[data-wishlist-id]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleWishlist(Number(button.dataset.wishlistId));
    });
  });
}

function openModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  state.activeProduct = product;
  const isWishlisted = state.wishlist.includes(product.id);

  modalContent.innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${product.title}">
    </div>

    <div class="modal-content">
      <div class="modal-meta">
        <span class="category-pill modal-static-pill">${product.category}</span>
        <span>⭐ ${product.rating}</span>
        <span>${product.badge}</span>
      </div>

      <h3>${product.title}</h3>

      <div>
        <div class="price" style="font-size: 1.45rem;">${formatCurrency(product.price)}</div>
        <div class="old-price" style="margin-top: 0.25rem;">${formatCurrency(product.oldPrice)}</div>
      </div>

      <p>${product.description}</p>

      <ul class="feature-list">
        <li>✔ Premium quality design</li>
        <li>✔ Clean modern aesthetic</li>
        <li>✔ Perfect for lifestyle-focused shopping UIs</li>
        <li>✔ Great for demo storefront experiences</li>
      </ul>

      <div class="modal-footer">
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button class="ghost-chip" id="modalWishlistBtn">
            ${isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
          <button class="add-btn" id="modalAddToCartBtn">Add to Cart</button>
        </div>

        <div style="color: var(--muted);">Free shipping on orders above $300</div>
      </div>
    </div>
  `;

  document.getElementById("modalAddToCartBtn").addEventListener("click", () => {
    addToCart(product.id);
  });

  document.getElementById("modalWishlistBtn").addEventListener("click", () => {
    toggleWishlist(product.id);
    openModal(product.id);
  });

  productModal.classList.add("show");
  productModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  productModal.classList.remove("show");
  productModal.setAttribute("aria-hidden", "true");
  state.activeProduct = null;
}

function toggleWishlist(productId) {
  if (state.wishlist.includes(productId)) {
    state.wishlist = state.wishlist.filter((id) => id !== productId);
    showToast("Removed from wishlist.", "warning");
  } else {
    state.wishlist.push(productId);
    showToast("Added to wishlist.", "success");
  }

  saveJSON(WISHLIST_STORAGE_KEY, state.wishlist);
  renderProducts();
  renderWishlistStats();
}

function renderWishlistStats() {
  wishlistCount.textContent = state.wishlist.length;
  wishlistItemsStat.textContent = state.wishlist.length;
}

function addToCart(productId) {
  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ id: productId, quantity: 1 });
  }

  saveJSON(CART_STORAGE_KEY, state.cart);
  renderCart();
  animateCartButton();
  openCart();

  const product = products.find((p) => p.id === productId);
  showToast(`${product?.title || "Product"} added to cart.`, "success");
}

function updateQuantity(productId, change) {
  const item = state.cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((cartItem) => cartItem.id !== productId);
    showToast("Item removed from cart.", "warning");
  }

  saveJSON(CART_STORAGE_KEY, state.cart);
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  saveJSON(CART_STORAGE_KEY, state.cart);
  renderCart();
  showToast("Removed item from cart.", "warning");
}

function clearCart() {
  state.cart = [];
  saveJSON(CART_STORAGE_KEY, state.cart);
  renderCart();
  showToast("Cart cleared.", "info");
}

function getCartDetailedItems() {
  return state.cart
    .map((cartItem) => {
      const product = products.find((product) => product.id === cartItem.id);
      return product ? { ...product, quantity: cartItem.quantity } : null;
    })
    .filter(Boolean);
}

function getCartTotals() {
  const items = getCartDetailedItems();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const discount = subtotal >= 250 ? subtotal * 0.10 : 0;
  const taxableAmount = subtotal - discount;
  const tax = taxableAmount * 0.08;
  const total = taxableAmount + tax;

  return { subtotal, itemCount, discount, tax, total };
}

function renderCart() {
  const items = getCartDetailedItems();
  const { subtotal, itemCount, discount, tax, total } = getCartTotals();

  cartCount.textContent = itemCount;
  cartItemsStat.textContent = itemCount;

  summaryItems.textContent = itemCount;
  summarySubtotal.textContent = formatCurrency(subtotal);
  summaryDiscount.textContent = `-${formatCurrency(discount)}`;
  summaryTax.textContent = formatCurrency(tax);
  summaryTotal.textContent = formatCurrency(total);

  renderShippingProgress(subtotal);

  if (!items.length) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <p style="font-size: 1.1rem; color: white; margin-bottom: 0.5rem;">Your cart is empty</p>
        <p>Add products to preview the animated sidebar cart experience.</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = items
    .map((item) => {
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}">
          <div>
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">${formatCurrency(item.price)} each</div>

            <div class="cart-controls">
              <div class="qty-controls">
                <button class="qty-btn" data-qty-action="decrease" data-id="${item.id}">−</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" data-qty-action="increase" data-id="${item.id}">+</button>
              </div>

              <button class="remove-btn" data-remove-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  attachCartEvents();
}

function attachCartEvents() {
  cartItems.querySelectorAll("[data-qty-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const action = button.dataset.qtyAction;
      updateQuantity(id, action === "increase" ? 1 : -1);
    });
  });

  cartItems.querySelectorAll("[data-remove-id]").forEach((button) => {
    button.addEventListener("click", () => {
      removeFromCart(Number(button.dataset.removeId));
    });
  });
}

function renderShippingProgress(subtotal) {
  const goal = 300;
  const progress = Math.min((subtotal / goal) * 100, 100);

  shippingProgressFill.style.width = `${progress}%`;
  shippingProgressLabel.textContent = `${formatCurrency(subtotal)} / ${formatCurrency(goal)}`;

  if (subtotal >= goal) {
    shippingMessage.textContent = "You unlocked free shipping!";
  } else {
    const remaining = goal - subtotal;
    shippingMessage.textContent = `Add ${formatCurrency(remaining)} more to unlock free shipping.`;
  }
}

function openCart() {
  cartSidebar.classList.add("show");
  cartOverlay.classList.add("show");
}

function closeCart() {
  cartSidebar.classList.remove("show");
  cartOverlay.classList.remove("show");
}

function animateCartButton() {
  openCartBtn.classList.remove("bump");
  void openCartBtn.offsetWidth;
  openCartBtn.classList.add("bump");
}

function resetFilters() {
  state.selectedCategory = "All";
  state.searchQuery = "";
  state.sortOption = "default";
  state.showWishlistOnly = false;

  searchInput.value = "";
  sortSelect.value = "default";
  toggleWishlistViewBtn.textContent = "Show Wishlist Only";

  renderCategoryFilters();
  renderProducts();
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 250ms ease";
  }, 2200);

  setTimeout(() => {
    toast.remove();
  }, 2600);
}