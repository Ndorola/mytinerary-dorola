const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB,
    {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser : true,
        useFindAndModify: false
    }
)
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))

// en server require('./config/databsee')
// porque quiero que lo ejecute no quiero que lo guarde 
// y se va a reiniciar

// primero se da de alta al servidor o puerto y despues se cumple loadpromesa de databse

// en .env pongo el MONGODB Y EL URL y reemplazo el url con proccess.env.MONGODB


