
const mostrar_longitud = () => {

    let marcas =  ["ford", "renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]

    console.log(marcas.length)

}

const boton1 = document.getElementById("btn_mostrar1");
boton1.addEventListener("click", mostrar_longitud);

const acceder_elemento = () => {
     
    let marcas =  ["ford", "renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]

    let primero = marca [0];
    console.log(primero);

    let ultimo = frutas [frutas.length - 1]
    console.log(ultimo);

}

const boton2 = document.getElementById("btn_mostrar2");
boton2.addEventListener("click", acceder_elemento);

const recorrer_array = () => {

    let marcas =  ["ford", "renault", "Volkswagen", "Seat", "Peugeot", "Chevrolet", "Fiat", "Toyota", "Chery"]
}