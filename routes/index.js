const homeRouter = require('./home');
const BookRouter = require('./courses');
const meRouter = require('./me');
function Router(app){
    //app.use('/courses/',coursesRouter);
    app.use('/me/',meRouter);
    app.use('/books/',BookRouter);
    app.use('/',homeRouter);
}
module.exports = Router;