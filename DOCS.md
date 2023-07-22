# E-commerce Development Task

Deployed here:
https://onlinestorerad.netlify.app/

---

### Technologies

The e-commerce application uses these technologies:

- React.js
- Vite with React
- React Query (Tanstack query)
- Redux Toolkit
- Axios
- React Router
- TailwindCSS

Uses fake api from here: https://dummyjson.com/docs/products

---

### Running the application locally

1.  Git clone this repo
2.  Go to application's root directory `onlinestore` in terminal
3.  Run the command to install the node dependencies:
    ```
    npm install
    ```
4.  Run the command to start development serveer:
    ```
    npm run dev
    ```
5.  Go to `http://localhost:5173/` on your browser
    > Be sure to have `.env` file in the directory `onlinestore` and set the given environment variable
        ```
        VITE_API_URL=https://dummyjson.com
        ```
        OR
        Set the environment variable on your machine by any means

---

### Features

1. Home Page

   - Displays lists of products with their images, names, and prices by categories.
   - Dsiplays pagination for a list of all products.

2. Search Page
   - Include a search bar where users can input the name of a product.
   - On form submission, display a list of search results (products) fetched from the API endpoint.
3. Product Details Page
   - Displays detailed information about the product, including the product images, name, price, and description.
   - Has add to cart button.
4. Cart Page
   - Displays a list of added cart items.
   - Displays the total amount with discounted price.
   - Has update and delete functionality.
