const Book = require('./models/course');
const {multipleMongooseToObject} = require('../../util/mongoose');
class homeControllers{
    index(req, res, next){
        Book.find({})
            .then(books => {
                res.render('index',{
                    data : multipleMongooseToObject(books)
                });
            })
            .catch(next)
              

    }
}
module.exports = new homeControllers;