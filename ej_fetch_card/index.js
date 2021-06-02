const construir_catalogo = async() => {

    const resultados= await fetch("https://jsonplaceholder.typicode.com/photos?albumId=1");

    const fotografias=await resultados.json();
    
    const total_columnas = [];

    fotografias.forEach(element => {
        const columna= `
            <div class="col-lg-3">
                <div class="card" >
                    <img src="${element.url}".https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png.." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`;    
        
        total_columnas.push(columna);

    });
    
    document.getElementById("row_catalogo").innerHTML = total_columnas.join("");

}


const boton = document.getElementById("btn_mostrar")
boton.addEventListener("click", construir_catalogo)

