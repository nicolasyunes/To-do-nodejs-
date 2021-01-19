const descripcion = {
    alias: 'd',
    demand:true,
    desc: 'descripcion de la tarea por hacer'

}

const argv = require('yargs')


.command('crear', 'crea una tarea por hacer', {
    descripcion 
})
.command('listar', 'lista todas las tareas', {
    descripcion})

.command('actualizar', 'actualiza una tarea', {
    descripcion,
    completado:{
        alias: 'c',
        default:true,
        desc: ' marca como completado una tarea'

    }
})
.command('borrar', 'elimina un elemento', {
    descripcion
})
.help()
.argv;



module.exports = {
    argv
}
