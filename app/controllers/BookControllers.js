const Books = require('./models/course');
const {mongooseToObject} = require('../../util/mongoose');
class BookControllers{
    show(req, res, next){
        Books.findOne({slug : req.params.slug})
            .then((book) => {
                res.render('courses/show',{book :  mongooseToObject(book)});
            })
            .catch(next);
    }
    create(req, res, next){
        res.render('courses/create');
    }
    //[GET] /book/:id/edit
      
    store(req, res, next){
        const book = new Books(req.body);
        book.save()
            .then(()=>res.redirect('/me'))
            .catch(error => {
                console.log(error.message);
            })
    }
    //[PUT]
    update(req,res, next){
        Books.updateOne({_id : req.params.id},req.body)
            .then(() => res.redirect('/me'))
            .catch(next)
        }
        //[DELETE]  
    
    //[PATCH] /books/:id/restore
  
}
module.exports = new BookControllers();