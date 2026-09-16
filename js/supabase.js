/* Sherie Kollections - Supabase connection */
/*
  Add your Supabase Project URL and publishable/anon key here.
  Do NOT put a Supabase service_role/secret key in this file.
*/
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY";

const supabaseConfigured =
  SUPABASE_URL.startsWith("https://") &&
  !SUPABASE_URL.includes("YOUR_SUPABASE") &&
  SUPABASE_ANON_KEY &&
  !SUPABASE_ANON_KEY.includes("YOUR_SUPABASE");

const supabaseClient = supabaseConfigured
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

async function loadProductsFromSupabase() {
  if (!supabaseClient) {
    console.warn("Supabase is not configured. Using local product data.");
    return null;
  }

  const { data, error } = await supabaseClient
    .from("products")
    .select("id, legacy_id, name, category, price, stock, sizes, image_url, description")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase product load failed:", error);
    return null;
  }

  return data.map(product => ({
    id: product.legacy_id || product.id,
    name: product.name,
    category: product.category,
    price: Number(product.price),
    stock: product.stock,
    sizes: product.sizes || [],
    image: product.image_url || "",
    description: product.description || ""
  }));
}
