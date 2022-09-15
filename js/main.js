class Juego {
    constructor(id, desarrollador, nombreJuego, precio){
        this.id = id,
        this.desarrollador = desarrollador,
        this.nombreJuego = nombreJuego,
        this.precio = precio
    }
    
    mostrarData(){
        console.log(`El nombre del juego es ${this.nombreJuego}, el estudio desarrollador es ${this.desarrollador} y su precio es de $${this.precio} `)
    }
}

const juego1 = new Juego(1,"Santa Monica Studio","God of war", 4200);
const juego2 = new Juego(2,"Ubisoft","Assassin's Creed Odyssey", 3000);
const juego3 = new Juego(3,"Rockstar Games", "Red Dead Redemption 2", 2500);
const juego4 = new Juego(4,"Square Enix","Final Fantasy VII Remake Intergrade", 7700);
const juego5 = new Juego(5,"Rockstar Games", "Grand Theft Auto V: Edición Premium", 315);
const juego6 = new Juego(6,"Insomniac Games", "Marvel’s Spider-Man Remastered", 2000);
const numeros = [1,2,3,4,5,6,7,8,9];

const biblioteca= []
biblioteca.push(juego1, juego2, juego3, juego4, juego5, juego6);


function mostrarBiblioteca(array){
    alert("En la consola puedes ver nuestra biblioteca de juegos");
    console.log("Disfruta de nuestra biblioteca:");
    array.forEach((juego)=>{
        juego.mostrarData()
    })
}

function buscarPorNombre(){
    let buscarNombreJuego = prompt("Ingrese el nombre del juego que desea buscar")
    let nombreJuegoEncontrado = biblioteca.find((juego)=> juego.nombreJuego.toLowerCase() == buscarNombreJuego.toLowerCase())
    if(nombreJuegoEncontrado == undefined){
        alert("Su juego no fue encontrado")
    }else{
        console.log(`Su juego fue encontrado, es:`)
        console.log(nombreJuegoEncontrado)
    }
}

function buscarPorDesarrollador(){
    let buscarDesarrollador = prompt("Ingrese el desarrollador que desea encontrar")
    let busqueda = biblioteca.filter((videojuego)=>videojuego.desarrollador.toLowerCase() == buscarDesarrollador.toLowerCase())
    if(busqueda.length == 0){
        alert("No se encontro ningún juego de este desarrollador")
    }else{
        console.log("Las coincidencias con este estudio desarrollador son:")
        console.log(busqueda)
        for(let juegoEncontrado of busqueda){
            juegoEncontrado.mostrarData()
        }
    }
}

function nuevoJuego(array){
    let desarrolladorIngresado = prompt("Ingrese el nombre del estudio desarrollador")
    let nombreJuegoIngresado = prompt("Ingrese el nombre del juego")
    let precioIngresado = parseInt(prompt("Ingrese el precio"))
    let juegoCreado = new Juego (biblioteca.length+1, desarrolladorIngresado, nombreJuegoIngresado, precioIngresado)
    array.push(juegoCreado)
}

function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver biblioteca de juegos
                        2 - Agregar un juego a nuestra biblioteca 
                        3 - Eliminar un libro de nuestra biblioteca 
                        4 - Encontrar por nombre del juego:
                        5 - Buscar juego de un mismo desarrollador:
                        0 - Para salir
                        `))
    menu(opcion)
}

function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por visitarnos, vuelva pronto :D`)
        break    
        case 1:
            mostrarBiblioteca(biblioteca)
        break 
        case 2: 
            nuevoJuego(biblioteca)
        break 
        case 3: 
            
        break
        case 4: 
            buscarPorNombre()
        break
        case 5: 
            buscarPorDesarrollador()
        break 
        default: 
        alert(`Ingrese una opción correcta`)
    }
}

let salir
while(salir != true){
    preguntarOpcion();
}