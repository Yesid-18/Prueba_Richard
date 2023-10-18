const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://dbroot:1234@cluster0.x13uenf.mongodb.net/DBPruebanotas',{
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log("DB CONECTADA >>");

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = connectDB
