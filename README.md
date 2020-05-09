## ThemeKit Boilerplate

A boilerplate for Shopify ThemeKit using [Tailwind](https://tailwindcss.com/) and [Laravel Mix](https://laravel.com/docs/7.x/mix)

### Installation
1. Login to Shopify and create a private app. Set the permissions of `Theme templates` and `Theme assets` to `Read and write`
2. Add a new `variables` file (no extension) at the root of the project
3. Add your API password, theme ID and store URL:
  ```
  DEV_PASSWD=[your-dev-password] 
  DEV_THEMEID=[your-theme-id]
  DEV_SHOP=[your-store.myshopify.com]
  ```
4. Add a new `.env` file containing the URL of your store (this is for Browsersync)
  ```
  STORE=https://[storename].myshopify.com
  ```
5. Run `npm install` to install dependencies
6. Run `npm run dev` to start development
7. Run `npm run deploy` to push production files to Shopify
