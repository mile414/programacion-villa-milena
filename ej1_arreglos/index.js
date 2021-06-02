
const mostrar_clasificaciones = () => {

    let clasificaciones =  ['ana', 'osvaldo', 'raul', 'celia', 'maria', 'antonio']

    clasificaciones.forEach(element => {

        document.write(" "+element)
    });
        for (indice in clasificaciones) {

            document.write(" "+clasificaciones[indice])


        }
}

const boton = document.querySelector("#bm")

boton.addEventListener("click", mostrar_clasificaciones)