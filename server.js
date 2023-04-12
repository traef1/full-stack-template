
const express = require('express');
const app = express();
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'star-wars',
    collection 

MongoClient.connect(dbConnectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    db = client.db(dbName)
    collection = db.collection('city_names')
  })
     app.set('view engine', 'ejs')

     app.use(express.urlencoded({ extended: true }))

     app.use(express.static('public'))
     app.use(express.json())
     app.use(cors())
    // app.put('/city_names',(req, res)=>{
    //     quotesCollection.findOneAndUpdate(
    //         {name: 'yoda'},
    //         {
    //             $set: {
    //                 name:req.body.name,
    //                 quote: req.body.quote
    //             }
    //         },
    //         {
    //             upsert:true
    //         }
           
    //     )
    //     .then(results => {
    //         console.log(results)
    //         res.json('success')
    //     })
    //     .catch(error => console.error(error))
    // })
    app.listen(process.env.PORT || PORT, function(){
        console.log(`listening on port`)
    })
    
//     app.get('/', (req, res) =>{
//         quotesCollection.find().toArray()
//             .then(results =>{
//                 console.log(results)
//                 res.render('index.ejs',{quotes: results})
//             })
//             .catch(error => console.error(error))
        
//     })
    
//     app.post('/quotes', (req, res)=> {
//         quotesCollection.insertOne(req.body)
//         .then(result =>{
//            res.redirect('/')
//         })
//         .catch(error => console.error(error))
//     })

//     app.delete('/quotes',(req,res) =>{
//         quotesCollection.deleteOne(
//         {name: req.body.name}
//         )
//         .then(result => {
//             if (result.deletedCount === 0){
//                 return res.json('No quote to delete')
//             }
//             res.json("Delete Darth Vader's quote")
//         })
//         .catch(error => console.error(error))
//     })
    
//   })
//   .catch(error => console.error(error))
  




