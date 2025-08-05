# 📦 Product Pricing API (MERN Backend)

This is a Node.js + Express backend service that integrates with the [Fake Store API](https://fakestoreapi.com) and augments product data with custom pricing stored in MongoDB.

## 🔧 Features

- Fetch all products with price overridden from your MongoDB.
- Fetch single product by ID with current price.
- Update the price of a product by ID.

## 🔗 API Endpoints

### GET /products
Fetch all products from Fake Store API and replace their prices with ones stored in MongoDB.

**Response:**
```json
{
  "message": "All products fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "Product Title",
      "description": "Product description...",
      "image": "https://...",
      "category": "electronics",
      "current_price": {
        "value": 39.99,
        "currency_code": "USD"
      }
    }
  ]
}
```

### GET /product/:id
Fetch one product with the overridden price from MongoDB.

**Example:** `GET /product/1`

### PUT /updateProductPrice/:id
Update the price of a product by its ID.

**Body:**
```json
{
  "price": 49.99
}
```

## 🗃️ Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- Axios
- Dotenv

## 📁 Project Structure

```
├── Controllers
│   └── priceController.js
├── Models
│   └── ProductPrice.js
├── Routes
│   └── priceRoutes.js
├── .env
├── app.js
└── README.md
```

## 🛠️ Setup Instructions

```bash
# Clone the repo
git clone <your-repo-url>

# Install dependencies
npm install

# Create a .env file and add your Mongo URI
MONGO_URI=your_mongodb_connection_string

# Start the server
npm start
```

## 📎 Notes

- Ensure your MongoDB is running and the URI is correct.
- This app is backend-only and built for demonstration purposes.
