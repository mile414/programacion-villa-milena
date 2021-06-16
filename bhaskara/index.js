
const numerador = () => {
    let a= document.getElementById("inp_a").value;
    let b= document.getElementById("inp_b").value;
    let c= document.getElementById("inp_c").value;
    let bloque = Math.pow(b,2) - (4*a*c);
    let numerador1 = Math.sqrt(bloque);
    console.log(bloque)
    return numerador1;
}

const denominador = () => {
    const a= document.getElementById("inp_a").value;
    let denominador1= (2*a);
    console.log(denominador1)
    return denominador1;
}

const calcular_raiz1 = () => {
    let b= document.getElementById("inp_b").value;
    let numerador1 = numerador();
    let denominador1 = denominador();
    let raiz1 = - b + (numerador1/denominador1);
    console.log(raiz1)
    return raiz1;
}

const calcular_raiz2 = () => {
    let b= document.getElementById("inp_b").value;
    let numerador1 = numerador();
    let denominador1 = denominador();
    let raiz2 = - b - (numerador1/denominador1);
    console.log(raiz2)
    return raiz2;
}

const mostrar_raices = () => {
    let r1= calcular_raiz1();
    let r2= calcular_raiz2();
    document.getElementById("mostrar_resultado").textContent='la raiz1 es igual a: '+ r1;
    document.getElementById("mostrar_resultado2").textContent='la raiz2 es igual a:'+ r2;

}
document.getElementById("calcular").addEventListener("click", mostrar_raices);