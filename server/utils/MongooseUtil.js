const mongoose = require('mongoose');
const MyConstants = require('./MyConstants');
const uri = 'mongodb+srv://' + MyConstants.DB_USER + ':' + MyConstants.DB_PASS + '@' +
    MyConstants.DB_SERVER + '/' + MyConstants.DB_DATABASE;
mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to ' + MyConstants.DB_SERVER + '/' + MyConstants.DB_DATABASE) ;
    })
    .catch((err) => { console.error(err); });


    // mongodb+srv://ronm250304:RoN13141516@cluster0.xn5xe.mongodb.net/