# Sherie Kollections — Standalone HTML/CSS/JS

Open `index.html` in a browser. No build step is required.

## Included
- Noir & Gold responsive design system
- Light/dark theme
- Product catalogue with search/filter/sort
- Product detail pages, sizes, quantities and related products
- localStorage cart, wishlist-ready store structure, reviews-ready structure and orders
- M-Pesa configuration block in `js/app.js`
- WhatsApp checkout links
- Free delivery above KES 5,000
- Admin catalogue editor with image upload → data URL
- Admin order status management

## Configuration
Edit `js/app.js`:
- `CONFIG.mpesa.paybill`
- `CONFIG.mpesa.account`
- `CONFIG.whatsapp`
- `CONFIG.deliveryFee`
- `CONFIG.freeDeliveryAt`

## Demo images
The bundle includes lightweight placeholder SVG artwork. Replace them in `images/` with the real Sherie Kollections hero/clothing/shoe photographs using the same filenames:
`hero.jpg`, `dress.jpg`, `shoes.jpg`, `set.jpg`, `top.jpg`.

For production use, add real authentication and a server/database; the included admin is intentionally browser-local and is not secure for public deployment.
