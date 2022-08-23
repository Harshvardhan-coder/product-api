import mongoose from 'mongoose';


//This is a schema which tells the database that how to store the data
const productSchema = mongoose.Schema({
    imgUrl: String,
    title: String,
    description: String,
    price: Number
})

export default mongoose.model('products', productSchema);