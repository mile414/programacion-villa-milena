const verificar = () => {
    const dato = document.getElementById("inp_dato").value;

    let resultado = calcular(dato)
    console.log(resultado)
}

const calcular = (numero) => {
    let resto = numero % 2;
    let respuesta = '';

    if(resto == 0)
    {
        respuesta = 'es par';
    }else{
        respuesta = 'es impar';
    }
    return respuesta
}

const boton= document.getElementById("btn_calcular");
boton.addEventListener("click", verificar);