const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/hadepchai', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
        console.log('Connect to mongoose successfully !');
    } catch (error) {
        console.log('Connect to mongoose failure !');
    }
}

module.exports = {connect};