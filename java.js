const cuerpo = document.getElementById("seccionCursos");
const iconoCarro = document.getElementById("verCarro");
const btnArtes = document.getElementById("boton-artes");
const contenedorCarrito = document.getElementById("carritoEmerge");
const divCuros = document.getElementById("cursos-filtrados");
document.addEventListener("DOMContentLoaded", () =>{
    fetchData ()
})

const fetchData = async () =>{
    try {
        const res = await fetch('productos.json')
        const productos = await res.json()
        filtrado(productos)
        recorrer(productos)
    } catch (error) {
        console.log("error");
    }
    
}


let carro =[];
// arreglo para pintar en el html
const recorrer = productos =>{
 console.log( productos);
 productos.forEach((cursos)=>{
    let contenedor = document.createElement("div");
    contenedor.className = "divCursos";
    contenedor.innerHTML =`
       <img src="${cursos.img}">  
       <h3> ${cursos.nombre} </h3>
       <p> ${cursos.precio} $COP </>
    `;
       cuerpo.append(contenedor); 
   
       let btnComprar = document.createElement("button");
       btnComprar.innerText = "comprar";
       btnComprar.className = "boton";
       
       contenedor.append(btnComprar);
   //crear arreglo solo con los cursos elegidos
       btnComprar.addEventListener("click", () =>{
           carro.push({
               id: cursos.id,
               img: cursos.img,
               nombre: cursos.nombre,
               precio: cursos.precio, 
           })
               console.log(carro);
       }
   
       )
       
   });
}
//--------------------
//encabezado ventana carro

iconoCarro.addEventListener("click", () =>{ 
contenedorCarrito.innerHTML=""; 

contenedorCarrito.style.display = "flex";
if (carro.length !== 0) {
const ventanaCarrito  = document.createElement("div");
 ventanaCarrito.className = "ventana-carrito"
 ventanaCarrito.innerHTML = `
  <h1 class ="tituloCarro"> cursos en tu carrito </h1>
 `;
 contenedorCarrito.append(ventanaCarrito); 

 const btnCarrito = document.createElement("h1");
 btnCarrito.innerText = "X";
 btnCarrito.className ="botonCierre";
 btnCarrito.addEventListener("click",() => {
    ventanaCarrito.style.display = "none";

 });
 
 ventanaCarrito.append(btnCarrito);

//recorrer carro  para el cuerpo ventana carro
 carro.forEach((cursosEnCarro) => {
    let cuerpoVentanaCarrito = document.createElement("div");
    cuerpoVentanaCarrito.className = "cuerpo-ventana-carro";
    cuerpoVentanaCarrito.innerHTML =`
    <img src="${cursosEnCarro.img}">  
    <h3> ${cursosEnCarro.nombre} </h3>
    <p> ${cursosEnCarro.precio} $COP </>
    `;
    ventanaCarrito.append(cuerpoVentanaCarrito);

 })
    const factura = carro.reduce((suma,valor) => suma + valor.precio,0);
// crear pie ventana carro
    const facturatotal = document.createElement("div");
    facturatotal.className ="precio-total"
    facturatotal.innerHTML=`TOTAL: ${factura} $ COP`;
    ventanaCarrito.append(facturatotal);
}else{
    alert("el carrito esta vacio");
}});

const filtrado = productos =>{
    btnArtes.addEventListener("click", () =>{
        const cursosArtes = productos.filter(curso => curso.categoria === "arte");
        console.log(cursosArtes);
        cursosArtes.forEach((cursosDeArtes)=>{
        const divFiltrado = document.createElement("div");
        divFiltrado.className ="div-filtrado-artes"
        divFiltrado.innerHTML = `
        <img src="${cursosDeArtes.img}">  
        <h3> ${cursosDeArtes.nombre} </h3>
        <p> ${cursosDeArtes.precio} $COP </>
        `;
        divCuros.append(divFiltrado);
        })
        /*const divFiltrado = document.createElement("div");
        
        
        
        */
        
        })
        ;
}



