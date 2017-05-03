let connection = require('./models/sequelize-connection')
let Country = require('./models/country')

// connection.authenticate()
//   .then(function(){
//     console.log('success!')
//   })
//   .catch(function(error){
//     console.log(error)
//   })

//using get() by itself returns entire object for particular country. specifying the desired column returns that particular item value
  // Country.findById(1).then(function(country){
  //   console.log(country.get('createdAt'))
  // }).catch(function(error){
  //   console.log(error)
  // })


//map method displays countries as an array of objects
//   Country.all().then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// }).catch(function(error){
//     console.log(error)
//   })

//to limit the selection, introduce that as a parameter in country.all()
// Country.all({limit: 2}).then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })

//to access the middle portion of the table, introduce offset
// Country.all({limit: 2, offset: 1})
//   .then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })

// //To introduce sql filtering, we can add where as an argument of country.all()
// Country.all({
//   where: {continent: 'North America'}
// }).then(function(countries){
//   let mapped = countries.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })

//Build does not save the record right away, where create does. This is build:
// let genovia = Country.build({
//   code: 'GEN',
//   name: 'Genovia',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//
// genovia.save()
//   .then(function(){
//     console.log("Genovia has been built!")
//   })
//   .catch(function(error){
//     console.log(error)
//   })

//Create works much the same way as build, only it persists the record right away.
// let florin = Country.create({
//   code: 'FLR',
//   name: 'Florin',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//   .then(function(){
//     console.log("Florin has been created!");
//   })
//   .catch(function(error){
//     console.log(error);
//   })

//to delete records, use the destroy method
// Country.all({
//   where: {
//     region: 'Storyland'
//   }
// })
//   .then(function(records){
//     let promises = records.map(function(country){
//       return country.destroy()
//     })
//
//     return Promise.all(promises)
//   })
//   .then(function(results){
//     console.log("They're gone!")
//   })
//   .catch(function(error){
//     console.log(error)
//   })

//To update a record, we'll re-create Florin then update it:
// let florin = Country.create({
//   code: 'FLR',
//   name: 'Florin',
//   continent: 'Europe',
//   region: 'Make Believe'
// })
//   .then(function(country){
//     country.region = "Storyland"  // <-- this is where we update its values
//     console.log("The Florin record was updated!");
//     return country.save() // a promise
//   })
//   .catch(function(error){
//     console.log(error)
//   })

//To show the entire table:
// Country.findAll().then(function(results){
//   let mapped = results.map(function(country){
//     return country.get()
//   })
//   console.log(mapped)
// })
//   .catch(function(error){
//     console.log(error);
//   })

//add a attributes: [] section to your query to modify which attributes are displayed. To present something readable, we must invoke the map method
  // Country.findAll({
  //   attributes: ['code','name']
  // }).then(function(results){
  //   let mapped = results.map(function(country){
  //     return country.get()
  //   })
  //   console.log(mapped)
  // })
  //   .catch(function(error){
  //     console.log(error);
  //   })

//To pull a selected group of records from the database, pass in a where: {} clause to .findAll():
Country.findAll({where:{region: 'Europe'}})
  .then(function(results){
  let mapped = results.map(function(country){
    return country.get()
  })
  console.log(mapped)
})
  .catch(function(error){
    console.log(error);
  })
