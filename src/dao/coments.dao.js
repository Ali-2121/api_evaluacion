import Comment from '../models/coments.model.js';
const commentsDAO = {};

commentsDAO.insertOne = async(comment) =>{ 
    console.log("hola estás en insertOne")
    console.log(comment)
    return await Comment.create(comment);
};

commentsDAO.getAll = async() =>{ 
    console.log("hola estás en getAll")
    const comments = await Comment.find();
    return comments;
};
commentsDAO.deleteOne= async(num_identif) =>{ 
    console.log(num_identif)
    return await Comment.findOneAndDelete({barcode:num_identif})
     
};

export default commentsDAO;
