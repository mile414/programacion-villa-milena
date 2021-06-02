
const calcular_promedio = () => {

    let prom =  [1, 2, 3, 4, 5, 6]

    prom.push(7);

    prom.push(8);

    let suma = 0;

    prom.forEach(element => {
        
        suma= suma+element;

        document.write(" "+element)
    });

    document.write("la suma de los elementos es:"+suma)

    promedio = suma/prom.length;

    document.write("el promedio de los elementos es de:"+promedio)
}

const boton = document.querySelector("#mostrar")
boton.addEventListener("click", calcular_promedio)