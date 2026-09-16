# Supabase setup — Sherie Kollections

## 1. Database

Open Supabase **SQL Editor** and run the complete contents of `supabase/schema.sql`.

The schema creates:

- `products` — the storefront catalogue
- `admin_users` — an explicit allow-list for dashboard users
- Row Level Security policies
- Admin insert/update/delete permissions
- Automatic `updated_at` timestamps

The public storefront can read active products. Only authenticated users whose UUID is in `admin_users` can manage products or view inactive products.

## 2. Product migration

If the existing products have not yet been imported, use `supabase/migrate-products.html` to generate SQL from the current `js/app.js` catalogue, then run that SQL in Supabase SQL Editor.

Review the generated SQL before running it.

## 3. Browser credentials

`js/supabase.js` contains the Supabase project URL and publishable/anon key.

A publishable/anon key is intended for browser use when Row Level Security is configured correctly.

**Never put a Supabase `service_role` or secret key in frontend JavaScript.**

## 4. Create the first admin account

In Supabase Dashboard:

1. Open **Authentication → Users**.
2. Create a user with the email/password you want to use for the Sherie Kollections admin dashboard.
3. Copy that user's **User UID**.
4. In **SQL Editor**, run:

```sql
insert into public.admin_users (user_id)
values ('PASTE_USER_UID_HERE');
```

Replace `PASTE_USER_UID_HERE` with the actual UUID.

After that, open the website's `/admin/` page and sign in with that account.

## 5. Admin dashboard features

The new `/admin/` dashboard supports:

- Secure Supabase Auth login
- Admin allow-list verification
- Product search
- Category and status filters
- Product statistics
- Add products
- Edit products
- Change price, stock, sizes and description
- Set an image URL
- Publish/hide products
- Delete products
- Existing local order-status view

Product changes are written directly to Supabase and are therefore used by the storefront on its next load.

## 6. Product images

For now, the dashboard accepts an image URL/path. Existing repository images can use paths such as:

```text
images/monks1.jpeg
```

A later storage stage can move these images into a Supabase Storage bucket and add image upload/replace/delete functionality.

## 7. Important

Run the updated `schema.sql` **before trying to save products from the dashboard**. Otherwise the dashboard will load products but database writes will be rejected by the existing read-only policies.
