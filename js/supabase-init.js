/* Loads Supabase products without breaking the existing storefront fallback. */
window.storeProducts = Array.isArray(window.products) ? window.products : [];

async function initSupabaseProducts() {
  if (typeof loadProductsFromSupabase !== "function") return;

  const remoteProducts = await loadProductsFromSupabase();
  if (!remoteProducts || remoteProducts.length === 0) return;

  window.storeProducts = remoteProducts;
  window.dispatchEvent(new CustomEvent("products:loaded", {
    detail: { products: remoteProducts }
  }));
}

initSupabaseProducts();
