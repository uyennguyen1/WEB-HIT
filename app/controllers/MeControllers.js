const Books = require('./models/course');
const {multipleMongooseToObject,mongooseToObject} = require('../../util/mongoose');
class MeControllers{
    //[GET] /me/stored/books
    storedBooks(req, res, next){
        Books.find({})
            .then(books => res.render('me/stored-book',{book : multipleMongooseToObject(books)}))
            .catch(next)
    }
    TrashBooks(req, res, next){
        Books.findDeleted({})
        .then(books => res.render('me/trash-book',{book : multipleMongooseToObject(books)}))
        .catch(next)
    }
    restore(req, res,next){
        Books.restore({_id : req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next);
    }
    edit(req, res, next){
        Books.findById(req.params.id)
            .then(book =>   res.render('courses/edit',{book : mongooseToObject(book)}))
            .catch(next)
        } 
    delete(req, res, next){
            const _id = req.params.id;
            Books.delete({_id : _id},req.body)
                .then(()=>res.redirect('back'))
                .catch(next);
        }
    //[DELETE] /me/:id/force
    forceDestroy(req,res,next){
            Books.deleteOne({_id : req.params.id})
                .then(()=> res.redirect('back'))
                .catch(next);
    }
}
module.exports = new MeControllers;