//connect the app with a database (monfgodb)

const connectDB=require("./config/connectDB")
const Contacts = require("./models/Contacts")
connectDB()

//create the model 
const Contcats=require('./models/Contacts')

//manipulation of the database : 
//CRUD
//creation
//create the new person 
const person =new Contcats({
    name:"oumayma",
    email:"oumayma1@gmail.Com",
    phone:216849676
})
//save the new person in the db 
// person.save((err,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })

//creata multiple records 
// Contcats.create([{
//     name:"Rihab",
//     email:"Rihab12@gmail.Com",
//     phone:216849676
// },{
//     name:"wala",
//     email:"wala21@gmail.Com",
//     phone:216849676
// }], (error,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }) 

///Read the data from the database 
// Contcats.find((error,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// })

//Read one record 
// Contcats.findOne({name:'Raoua'},(error,data)=>{
//     try {
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// })

//delete one record 
Contacts.findOneAndDelete({name:'Raoua'},(error,data)=>{
    try {
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})