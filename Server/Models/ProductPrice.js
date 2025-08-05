import mongoose from "mongoose";


const PriceSchema = new mongoose.Schema({
  productId: Number,
  value: Number,
  currency_code: {
    type: String,
    default: 'USD'
  }
});

const ProductPrice = mongoose.model('ProductPrice', PriceSchema);

export default ProductPrice;