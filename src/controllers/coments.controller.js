import commentsDAO from "../dao/coments.dao.js";

export const home = (req,res)=>{
    res.render('../src/views/index')
}
export const getAll=(req,res)=>{
    commentsDAO.getAll()
        .then(comments=> res.render('../src/views/complaints_suggestions',{comments}))
        .catch(err=> res.json({status:"Server not available"}))
 }

export const insertOne = (req,res)=>{
    console.log(req.body)
    commentsDAO.insertOne(req.body)
    .then(result=> 
        res.redirect('/comments'))
    .catch(err=> res.json({ status:"comment not saved"}))
}

export const deleteOne = (req,res)=>{
    commentsDAO.deleteOne(req.params.num_identif)
        .then(result => {
            !result ? res.redirect('/comments')
             : res.redirect('/comments')
        })
        .catch(err=> res.redirect('/comments'))
 }
