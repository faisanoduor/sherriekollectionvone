/* Loads Supabase products and syncs them into the existing storefront state. */
window.storeProducts = Array.isArray(window.products) ? window.products : [];

async function initSupabaseProducts() {
  if (typeof loadProductsFromSupabase !== "function") return;

  const remoteProducts = await loadProductsFromSupabase();
  if (!remoteProducts || remoteProducts.length === 0) return;

  // Keep the existing vanilla-JS app compatible: app.js reads products
  // from localStorage on every page load. Caching the remote catalogue here
  // makes Supabase the source of truth without requiring a rewrite of the
  // cart/checkout/product-page code yet.
  localStorage.setItem("sk_products", JSON.stringify(remoteProducts));
  window.storeProducts = remoteProducts;

  window.dispatchEvent(new CustomEvent("products:loaded", {
    detail: { products: remoteProducts }
  }));
}

initSupabaseProducts();
