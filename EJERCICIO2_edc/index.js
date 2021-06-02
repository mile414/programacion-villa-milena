
const mostrar_respuesta = () => {

    const topping = window.prompt("que topping quiere agregarle al helado?");

    if (topping == 'oreo')
    {
        let precio= 250 + 40;
        document.write('el helado cuesta:',precio);
    }
    else{
        if (topping == 'kitkat')
        {
            let precio= 250 + 55;
            document.write('el helado cuesta:',precio);
        }
        else{
            if (topping == 'brownie')
            {
                let precio= 250 + 65;
                document.write('el helado cuesta:',precio);
            }
            else{
                if (topping == 'rocklets')
                {
                    let precio= 250 + 75;
                    document.write('el helado cuesta:',precio);
                }
                else{
                    if (topping == '')
                    {
                        document.write('el helado cuesta: 250');
                    }
                    else{
                        document.write('no tenemos este topping, lo siento.');
                    }
                }
            }
        }
    }

}

const btn = document.querySelector("#btn_mostrar");

btn.addEventListener("click", mostrar_respuesta)


