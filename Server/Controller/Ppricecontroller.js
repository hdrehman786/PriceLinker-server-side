import axios from 'axios';
import ProductPrice from '../Models/ProductPrice.js';


export const getProducts = async (req, res) => {
  try {
    const productResponse = await axios.get('https://fakestoreapi.com/products');
    const products = productResponse.data;
    const prices = await ProductPrice.find({});

    const mergedProducts = products.map((product) => {
      const matchingPrice = prices.find(p => p.productId === product.id);

      return {
        id: product.id,
        name: product.title,
        description: product.description,
        image: product.image,
        category: product.category,
        current_price: matchingPrice
          ? {
              value: matchingPrice.value,
              currency_code: matchingPrice.currency_code,
            }
          : null,
      };
    });

    res.status(200).json({
      message: 'All products fetched successfully',
      data: mergedProducts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Internal Server Error',
    });
  }
};





export const getProductsById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'Product ID is required' });
    }
    try {
        const productResponse = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const productPriceResponse = await ProductPrice.find({
            productId: id
        });


        if (!productResponse) {
            return res.status(404).json({ message: 'Product not found' });
        };
        if (!productPriceResponse) {
            return res.status(404).json({ message: 'Product Price not found' });
        }
        const product = productResponse.data;

        console.log("product",product);
        console.log("productPriceResponse",productPriceResponse[0]);

        res.json({
            message : "Product found successfully",
            data : {
                name :product.title,
                price : productPriceResponse[0],
                description : product.description,
                image : product.image,
                category : product.category,
            }
        })
    } catch (error) {
        res.json({
            message: error.message || error || 'Internal Server Error'
        })
    }

}


export const updateProductPrice = async (req, res) => {
    const { id } = req.params;
    const { price } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'Product ID is required' });
    }
    if (!price) {
        return res.status(400).json({ message: 'Product Price is required' });
    }
    try {
        const productPriceResponse = await ProductPrice.find({
            productId: id
            });
            if (!productPriceResponse) {
                return res.status(404).json({ message: 'Product Price not found' });
            }
            const productPrice = productPriceResponse[0];
            productPrice.value = price;
            await productPrice.save();
            res.json({
                message: "Product Price updated successfully",
                data: productPrice
            })
    }catch(error){
         res.json({
            message: error.message || error || 'Internal Server Error'
         })
    }
}