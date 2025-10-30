/**
 * Flux Theme - Main JavaScript
 * Version: 1.0.0
 */

(function() {
  'use strict';

  // ============================================
  // CART FUNCTIONALITY
  // ============================================

  class CartManager {
    constructor() {
      this.drawer = document.getElementById('cart-drawer');
      this.overlay = document.getElementById('cart-drawer-overlay');
      this.content = document.getElementById('cart-drawer-content');
      this.countElement = document.getElementById('cart-count');
      
      this.init();
    }

    init() {
      // Open cart drawer
      document.querySelectorAll('[data-cart-open]').forEach(button => {
        button.addEventListener('click', () => this.open());
      });

      // Close cart drawer
      document.querySelectorAll('[data-cart-close]').forEach(button => {
        button.addEventListener('click', () => this.close());
      });

      // Close on overlay click
      if (this.overlay) {
        this.overlay.addEventListener('click', () => this.close());
      }

      // Cart changes
      document.addEventListener('click', (e) => {
        if (e.target.matches('[data-cart-change]') || e.target.closest('[data-cart-change]')) {
          const button = e.target.matches('[data-cart-change]') ? e.target : e.target.closest('[data-cart-change]');
          this.changeQuantity(button.dataset.index, button.dataset.quantity);
        }

        if (e.target.matches('[data-cart-remove]') || e.target.closest('[data-cart-remove]')) {
          const button = e.target.matches('[data-cart-remove]') ? e.target : e.target.closest('[data-cart-remove]');
          this.changeQuantity(button.dataset.index, 0);
        }
      });

      // Add to cart forms
      document.addEventListener('submit', (e) => {
        if (e.target.id === 'product-form') {
          e.preventDefault();
          this.addToCart(e.target);
        }
      });
    }

    open() {
      this.drawer.classList.remove('translate-x-full');
      this.overlay.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    }

    close() {
      this.drawer.classList.add('translate-x-full');
      this.overlay.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }

    async addToCart(form) {
      const formData = new FormData(form);
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      button.disabled = true;
      button.textContent = 'Adding...';

      try {
        const response = await fetch(window.routes.cart_add_url, {
          method: 'POST',
          body: formData
        });

        if (!response.ok) throw new Error('Cart add failed');

        const cart = await response.json();
        
        // Update cart count
        this.updateCount(cart.item_count);
        
        // Refresh cart drawer
        await this.refreshDrawer();
        
        // Open cart drawer
        this.open();

        button.textContent = 'Added!';
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 1000);

      } catch (error) {
        console.error('Error adding to cart:', error);
        alert(window.cartStrings.error);
        button.textContent = originalText;
        button.disabled = false;
      }
    }

    async changeQuantity(line, quantity) {
      try {
        const response = await fetch(window.routes.cart_change_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            line: line,
            quantity: parseInt(quantity)
          })
        });

        if (!response.ok) throw new Error('Cart update failed');

        const cart = await response.json();
        
        // Update cart count
        this.updateCount(cart.item_count);
        
        // Refresh cart drawer
        await this.refreshDrawer();
        
        // If on cart page, reload
        if (window.location.pathname === '/cart') {
          window.location.reload();
        }

      } catch (error) {
        console.error('Error updating cart:', error);
        alert(window.cartStrings.error);
      }
    }

    async refreshDrawer() {
      try {
        const response = await fetch(`${window.shopUrl}/?section_id=cart-drawer-items`);
        const text = await response.text();
        if (this.content) {
          this.content.innerHTML = text;
        }
      } catch (error) {
        console.error('Error refreshing cart:', error);
      }
    }

    updateCount(count) {
      if (this.countElement) {
        this.countElement.textContent = count;
        if (count > 0) {
          this.countElement.classList.remove('hidden');
        } else {
          this.countElement.classList.add('hidden');
        }
      }
    }
  }

  // ============================================
  // MOBILE MENU
  // ============================================

  class MobileMenu {
    constructor() {
      this.menu = document.getElementById('mobile-menu');
      this.overlay = document.getElementById('mobile-menu-overlay');
      this.init();
    }

    init() {
      // Open menu
      document.querySelectorAll('[data-menu-open]').forEach(button => {
        button.addEventListener('click', () => this.open());
      });

      // Close menu
      document.querySelectorAll('[data-menu-close]').forEach(button => {
        button.addEventListener('click', () => this.close());
      });

      // Close on overlay click
      if (this.overlay) {
        this.overlay.addEventListener('click', () => this.close());
      }

      // Close on ESC key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.close();
        }
      });
    }

    open() {
      this.menu.classList.remove('-translate-x-full');
      this.overlay.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    }

    close() {
      this.menu.classList.add('-translate-x-full');
      this.overlay.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  }

  // ============================================
  // QUICK ADD TO CART
  // ============================================

  class QuickAdd {
    constructor() {
      this.init();
    }

    init() {
      document.addEventListener('click', async (e) => {
        if (e.target.matches('[data-quick-add]') || e.target.closest('[data-quick-add]')) {
          const button = e.target.matches('[data-quick-add]') ? e.target : e.target.closest('[data-quick-add]');
          await this.addToCart(button);
        }
      });
    }

    async addToCart(button) {
      const productId = button.dataset.productId;
      const originalText = button.textContent;

      button.disabled = true;
      button.textContent = 'Adding...';

      try {
        const formData = new FormData();
        formData.append('id', productId);
        formData.append('quantity', 1);

        const response = await fetch(window.routes.cart_add_url, {
          method: 'POST',
          body: formData
        });

        if (!response.ok) throw new Error('Quick add failed');

        const cart = await response.json();
        
        // Update cart and open drawer
        if (window.cart) {
          window.cart.updateCount(cart.item_count);
          await window.cart.refreshDrawer();
          window.cart.open();
        }

        button.textContent = 'Added!';
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 1000);

      } catch (error) {
        console.error('Error with quick add:', error);
        alert(window.cartStrings.error);
        button.textContent = originalText;
        button.disabled = false;
      }
    }
  }

  // ============================================
  // ACCESSIBILITY
  // ============================================

  class Accessibility {
    constructor() {
      this.init();
    }

    init() {
      // Trap focus in modals
      this.trapFocus();
      
      // Announce dynamic content changes
      this.announceChanges();
    }

    trapFocus() {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      document.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;

        const drawer = document.querySelector('#cart-drawer:not(.translate-x-full)') || 
                      document.querySelector('#mobile-menu:not(.-translate-x-full)');
        
        if (!drawer) return;

        const focusable = drawer.querySelectorAll(focusableElements);
        const firstFocusable = focusable[0];
        const lastFocusable = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      });
    }

    announceChanges() {
      // Add ARIA live region for cart updates
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'cart-live-region';
      document.body.appendChild(liveRegion);
    }

    announce(message) {
      const liveRegion = document.getElementById('cart-live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      }
    }
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  function init() {
    // Initialize cart
    window.cart = new CartManager();
    
    // Initialize mobile menu
    new MobileMenu();
    
    // Initialize quick add
    new QuickAdd();
    
    // Initialize accessibility features
    window.accessibility = new Accessibility();

    // Log theme loaded
    console.log('🎨 Flux Theme Loaded');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

