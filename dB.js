const mongoose = require('mongoose')

const connectDatabase = async()=> {
try {
    await mongoose.connect("mongodb://localhost:27017/test_clause")
    console.log("DataBase is connected..!!");
} catch (error) {
    console.log(error);
}
}
connectDatabase()