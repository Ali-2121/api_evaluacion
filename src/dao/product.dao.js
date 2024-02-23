import Product from '../models/products.model.js';
const productDAO = {};
productDAO.getAll = async() =>{ 
    console.log("hola estás en getAll de Product")
    const products = await Product.find();
    return products;
};
productDAO.insertOne = async(product) =>{ 
    console.log("hola estás en insertOne de product")
    console.log(product)
    return await Product.create(product);
};

productDAO.updateOne= async(barcode,product) =>{ 
    console.log("hola estamos en update")
    const actualizar = await Product.findOneAndUpdate({barcode:barcode},product)
    console.log(actualizar)
    return actualizar
};

productDAO.getOne = async(barcode) =>{
    const product = await Product.findOne({barcode: barcode});
    return product;
};
export default productDAO;