
const calcular= () =>{

    const a= document.querySelector("#inp_a").value;
    const b= document.querySelector("#inp_b").value;
    const c= document.querySelector("#inp_c").value;

    let bloque1= (Math.pow(b,2))-(4*a*c);
    let raiz= Math.sqrt(bloque1)
    let bloque2= (2*a);
    let bloque3= (raiz/bloque2);

    let x1= -b+bloque3;
    let x2= -b-bloque3;

    const parrafo =document.querySelector("#p_resultado")

    parrafo.textContent= `
    raiz1= ${x1}
    raiz2= ${x2}
    `
}

const boton=document.querySelector("#calcular")

boton.addEventListener("click", calcular)