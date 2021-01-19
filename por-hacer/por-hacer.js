
const fs = require('fs');

listadoPorHacer = [];


//guarda en el archivo json las tareas
const guardarDB = () => {
     let data = JSON.stringify(listadoPorHacer);

     fs.writeFile('db/db.JSON', data , (err) => {
        if (err) throw new Error('No se pudo guardar la tarea',err)
        console.log('The file has been saved!')
})
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/db.json')
      } catch (error) {
        listadoPorHacer = []};
}


const crear = (descripcion) => {

    let porHacer = {
        descripcion : descripcion,
        completado: false
    }

    cargarDB();//cargar base de datos antes de hacer el push para que no sobrescriba
    
    listadoPorHacer.push(porHacer)//pusheamos tarea

    guardarDB(); // guarda en BD

    return porHacer;

} 

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado=true) =>{
    cargarDB();
    
    let index = listadoPorHacer.findIndex(tarea =>tarea.descripcion === descripcion)
    
    if (index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    }else{
        return false;
    }
}
const borrar = (descripcion) => {
        cargarDB()
        let nuevolistado = listadoPorHacer.filter(tarea =>  tarea.descripcion !== descripcion)
        
        if (nuevolistado.length === listadoPorHacer.length){
            return false
        }else{
            listadoPorHacer = nuevolistado;
            guardarDB();
        }
    }

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}