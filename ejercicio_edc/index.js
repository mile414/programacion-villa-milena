
const respuesta = window.prompt('sos culpable?')


if(respuesta == 'si')
{
    document.write('iras a la carcel')
}
else{
    if(respuesta == 'no')
    {
        document.write('iras a casa')
    }
    else{
        document.write('documentacion por favor')
    }
}