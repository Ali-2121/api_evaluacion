import productsDAO from "../dao/product.dao.js";

export const getAll=(req,res)=>{
    productsDAO.getAll()
        .then(products=> res.render('../src/views/products.ejs',{products}))
        .catch(err=> res.json({status:"Server not available"}))
 }

 export const insertOne = (req,res)=>{
    console.log(req.body)
    productsDAO.insertOne(req.body)
    .then(result=> 
        res.json("Product saved"))
    .catch(err=> res.json({ status:"Product not saved"}))
}
export const getOne=(req,res)=>{
    productsDAO.getOne(req.params.barcode)
        .then(result=> res.render('../src/views/editProduct',{result}))
        .catch(err=> res.redirect('../src/views/editProduct'))
 }

 export const updateOne = (req,res)=>{
    productsDAO.updateOne(req.params.barcode, req.body)
        .then(result => {
            !result ? res.json({
                message:"Product not found"
            }) : res.redirect('/products')
        })
        .catch(err=> res.status(500).json({ error: err }))
 }