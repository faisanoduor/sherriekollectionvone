# Supabase setup — Stage 1

Stage 1 moves the Sherie Kollections **product catalogue** toward Supabase while keeping the existing local catalogue as a fallback.

## 1. Create a Supabase project

Create a project in Supabase and open **SQL Editor**.

## 2. Create the products table

Run:

```text
supabase/schema.sql
```

The table is protected by Row Level Security and the storefront is allowed to read only active products.

## 3. Add products

The current website still contains the original catalogue in `js/app.js`. Add those products to the new `products` table before relying on Supabase as the main catalogue.

Use these mappings:

- `id` — leave blank so Supabase generates a UUID
- `legacy_id` — existing product ID such as `p1`
- `name` — product name
- `category` — product category
- `price` — price in KES
- `stock` — available quantity
- `sizes` — array such as `{S,M,L,XL}`
- `image_url` — existing GitHub image path, for example `images/monks1.jpeg`
- `description` — product description
- `is_active` — `true`

## 4. Add the Supabase browser credentials

Open:

```text
js/supabase.js
```

Replace:

```js
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY";
```

with the project's URL and **publishable/anon key**.

Do **not** put a `service_role` or secret key in this repository or in browser JavaScript.

## 5. What is already wired

- `index.html` loads active products from Supabase for New Arrivals.
- `shop.html` loads active products from Supabase for search, category, price and sorting.
- If Supabase is not configured or returns no products, the existing local catalogue remains available.
- Product objects are normalized back to the same shape used by the current storefront, so the existing rendering/cart code can continue to work.

## 6. Next stage

After the catalogue is confirmed working, Stage 2 can move product management into the admin area and add Supabase Storage for product images. Stage 3 can then add the AI shopping assistant through a server-side Edge Function so an AI API secret is never exposed in the browser.
