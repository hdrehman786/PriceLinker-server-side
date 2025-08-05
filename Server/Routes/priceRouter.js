import { Router } from "express";
import  { getProducts, getProductsById, updateProductPrice } from "../Controller/Ppricecontroller.js";


const priceRouter = Router();


priceRouter.get("/products",getProducts);
priceRouter.get("/product/:id",getProductsById);
priceRouter.put("/updateProductPrice/:id",updateProductPrice);


export default priceRouter;