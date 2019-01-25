const actions = require('./src/actions')
// _ info del servidor
//args: recibe datos
//context: recibe meatdatos
//info: query o mutation ejecutado
const Users = (_, args, context, info) =>{
    return actions.getAllUsers.then((users) => {
        return users    
    }).catch((err) => {
        console.log(err);
    });
}


module.exports = { 
    Users
}