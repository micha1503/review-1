const guardarContacto = (db, Contacto) =>{
    db.setItem(Contacto.id,JSON.stringify(Contacto))
    window.location.href = '/'

}

const cargarContactos = () =>{
    let claves = object.keys(db)
    
     for(claves of claves){
         let contacto = Json.parse(db.getItem(claves))
         crearContacto(parentNode, contacto, db )
          
     }
}      

 const crearContacto = (parentNote, Contacto, db) =>{

    let divContacto = document.createElement('div')
    let NombreContacto = document.createElement('h3')
    let NúmeroContacto = document.createElement('p')
    let DirecciónContacto = document.createElement('p')
    let icinoBorrar = document.createElement('span')


    NombreContacto.innerHTML = contacto.nombre
    NúmeroContacto.innerHTML = contacto.numero
    DirecciónContacto.innerHTML = contacto.direccionContacto
    iconoBorrar.innerHTML = 'delete forever'
  
    divContacto.calassList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    divContacto.appendChild(NombreContacto)
    divContacto.appendChild(NúmeroContacto)
    divContacto.appendChild(DireeciónContacto)
    divContacto.appendChild(iconoBorrar)

    parentNote.appendChild(divContacto)




     


 }