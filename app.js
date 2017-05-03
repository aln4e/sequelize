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
