
const productos = [
    {
    imagenPrincipal: "https://picsum.photos/id/0/200/300",
    imagenFondo:"https://picsum.photos/id/1/200/300",
    nombre: "Computadora portatil",
    precio: "$20000",
},
{
    imagenPrincipal: "https://picsum.photos/id/1062/200/300",
    imagenFondo:"https://picsum.photos/id/1025/200/300",
    nombre: "Cobija para perro",
    precio: "$150",
},
{
    imagenPrincipal: "https://picsum.photos/id/111/200/300",
    imagenFondo:"https://picsum.photos/id/133/200/300",
    nombre: "Automovil",
    precio: "$15000",
},
{
    imagenPrincipal: "https://picsum.photos/id/250/200/300",
    imagenFondo:"https://picsum.photos/id/319/200/300",
    nombre: "Camara",
    precio: "$100",
},
{
    imagenPrincipal: "https://picsum.photos/id/30/200/300",
    imagenFondo:"https://picsum.photos/id/326/200/300",
    nombre: "Taza",
    precio: "$900",
},
{
    imagenPrincipal: "https://picsum.photos/id/75/200/300",
    imagenFondo:"https://picsum.photos/id/674/200/300",
    nombre: "Kilo de uva",
    precio: "1500",
}
];

let carrito =[]; //*Aqui se almacenaran los productos agregados al carrito


//1.- Primero localizamos el body para poder insertar elementos html dentro de el
const body = document.getElementsByTagName("body")[0];
// console.log(body);

//Creamos un titulo, agregamos su textcontent
const title = document.createElement("h1");
title.textContent = "Mi tiendita";

// añadimos sus id`s y clases
title.classList.add("blue", "mx-0");
title.id = "main-title";
body.prepend( title );



const seccion = document.getElementById("products-section");
const lista = document.getElementById("lista");

// console.log(lista);

// // const contenedor = document.createElement("div");
// // contenedor.classList.add("contenedor");


// // const div_cantidad = document.createElement("div");
// // div_cantidad.id= "div_cantidad";
// // contenedor.appendChild(div_cantidad);
// // const cantidad = document.createElement("p");
// // cantidad.textContent = "cantidad";
// // div_cantidad.appendChild(cantidad);


// // const div_productos = document.createElement("div");
// // div_productos.id= "div_productos";
// // contenedor.appendChild(div_productos);
// // const producto = document.createElement("p");
// // producto.textContent = "producto";
// // div_productos.appendChild(producto);



// // const div_precio = document.createElement("div");
// // div_precio.id= "div_precio";
// // contenedor.appendChild(div_precio);
// // const precio = document.createElement("p");
// // precio.textContent = "precio";
// // div_precio.appendChild(precio);


// // lista.appendChild(contenedor);


//Crear un fragmento para hacer una sola renderizacion
//new crea instancias, se utiliza cada vez que se quiere crear algo nuevo de un constructor
let fragment  = new DocumentFragment();//?es un nodo, un objeto minimo en el html, NO CORRESPONDE A NINGUNA ETIQUETA


productos.forEach(actualElement =>{
    //todo A PARTIR DE AQUI VA EL FOR
    //Creamos y añadimo el div a la section
    const div = document.createElement("div");
    div.classList.add("card");
    fragment.appendChild(div);

    const div_wrapper = document.createElement("div");
    div_wrapper.classList.add("img-wrapper");
    //creamos una imagen y luego añadimos su propiedad source
    const img = document.createElement("img");
    div_wrapper.appendChild(img);
    img.src = actualElement.imagenPrincipal;
    // img.classList.add("principal-img");
    div.appendChild(div_wrapper);

    const nombre = document.createElement("h1");
    nombre.textContent = actualElement.nombre;
    div.appendChild(nombre);

    const precio = document.createElement("p");
    precio.textContent = actualElement.precio
    div.appendChild(precio);

    const btn = document.createElement("button");
    btn.textContent = "comprar";
    div.appendChild(btn);


    //!Aqui se ejecuta el callback
    callback(fragment);

});


function callback(f){
    seccion.appendChild(f)
};




seccion.addEventListener("click",(evento)=>{
    //matches es un metodo que permite identificar si un elemento es de una etiqueta en especifico.
    if(evento.target.matches("button")){

        //trae a todos los elementos relacionados al evento, en este caso nos interesa saber unicamente su nombre y precio
        let elemento=evento.target.parentElement;

        const h1 = elemento.querySelector("h1");

        const precio = elemento.querySelector("p");



        //almacecnamos el nombre y precio de cada producto
        let producto = {
            nombre: h1.textContent,
            precio: precio.textContent
        }


        carrito.push(producto) ;


        //para almacenar la cantidad de elementos
        let objetosDelCarrito ={};


        const li= document.getElementsByTagName("li")[0];
        ul = document.createElement("ul");

        carrito.forEach(objeto=>{
        // console.log(objeto.nombre);
            //* almacenamos el nombre del objeto que esta iterando 
            let nameObject= objeto.nombre;
            // let precioObject = objeto.precio;

            
            //?Si dentro del objeto no existe nameObject lo agregamos
            if(objetosDelCarrito[nameObject]==null){
                // ul = document.createElement("ul");


                objetosDelCarrito[nameObject] =1;

                ul.textContent=` ${nameObject} :  ${ objetosDelCarrito[nameObject]}`;    
            
            }    
            
            
            //?Si ya esta agregado aumentamos su valor en uno
            else{
                
                objetosDelCarrito[nameObject]++;
                ul.textContent=` ${nameObject} :  ${ objetosDelCarrito[nameObject]}`;
            };
        
            
        })

        li.appendChild(ul);     

        
        console.log(objetosDelCarrito);
    

    }


    
})




