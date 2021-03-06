const actions = require('../actions/userActions')
// _ info del servidor
//args: recibe datos
//context: recibe meatdatos
//info: query o mutation ejecutado

const User = (_, args, context, info) =>{
    return actions.getAllUsers().then((users) => {
        return users    
    }).catch((err) => {
        console.log(err);
    });
}
 const Movie = (_, args,context, info) =>{
     return actions.getAllMovies().then((movies) =>{
         return movies
     }).catch((err) => {
         console.log(err);
     })
 }

module.exports = { 
    User,
    Movie
}