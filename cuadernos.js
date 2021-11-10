let totalCarrito = 0;
let productos = 0;

function agregarProductoAlCarrito (precioProducto){
    totalCarrito += precioProducto;
    productos += 1;
}

function valorCarrito(unidades, valor){
    alert(`Has agregado  ${productos} unidades al carrito por un valor total de $ ${totalCarrito}`)
   
}

const listaUtiles = [];
class Cuadernos{
    constructor (imagen, nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// cuadernos que vamos a vender
let CuadernoUno = new Cuadernos (src='Imagenes/cuadernos/agenda.jpg' , " Tipo Agenda ",  17000);
let CuadernoDos = new Cuadernos (src='Imagenes/cuadernos/argollados.jpg', " Argollado ", 5500);
let CuadernoTres = new Cuadernos (src='Imagenes/cuadernos/multimateria.jpg', " 5 Materias ", 10500);
let CuadernoCuatro = new Cuadernos (src='Imagenes/cuadernos/stickers.jpg', " Con Stickers", 4800);
let CuadernoCinco = new Cuadernos (src='Imagenes/cuadernos/cuadriculados.jpg', " Cuadriculados", 3500);
let CuadernoSeis = new Cuadernos (src='Imagenes/cuadernos/rayados.jpg', " Rayados", 3500);
let CuadernoSiete = new Cuadernos (src='Imagenes/cuadernos/cuadros.jpg', " Cuadros Grandes", 6000);
let CuadernoOcho = new Cuadernos (src='Imagenes/cuadernos/ferrocaril.jpg', " Ferrocarril", 3500);
let CuadernoNueve = new Cuadernos (src='Imagenes/cuadernos/economicos.jpg', " Económicos", 2000);

//Se agregan los cuadernos a listaUtiles
listaUtiles.push (CuadernoUno);
listaUtiles.push (CuadernoDos);
listaUtiles.push (CuadernoTres);
listaUtiles.push (CuadernoCuatro);
listaUtiles.push (CuadernoCinco);
listaUtiles.push (CuadernoSeis);
listaUtiles.push (CuadernoSiete);
listaUtiles.push (CuadernoOcho);
listaUtiles.push (CuadernoNueve);

// Para generar cards de productos
let cards = ``;
for (let i=0; i<listaUtiles.length;i++){
    cards += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div>
             <a href="cuadernos.html">
                <img class="fotos" src=${listaUtiles[i].imagen} alt="image1">
                
             </a>
            <div>
                <a class="" href="cuadernos.html">
                    <h3 class="nombreProducto"> ${listaUtiles[i].nombre}</h3>
                </a>
                <h4 class="precio"> $ ${listaUtiles[i].precio}</h4>
                 <button onclick="agregarProductoAlCarrito(${listaUtiles[i].precio})" class="menu">  Agregar al Carrito </button>
                <br><br>
            </div>
         </div>
        </div>`
}

//mostrar las cards de los productos
$('#productos').html(cards)

//cambiar color al carrito
$("#vcarrito").hover(function() {
    $(this).css({color: "red", background: "yellow"});
},
function() {
    $(this).css({color: "purple", background: "white"});
});

//cambiar estilo a botones de agregar al carrito
$(".menu").click(function() {
    $(this).css("background","silver");
    alert("Se agrego producto al carrito")
});

//animaciones titulo
$(".headerTitulo").hover(function() {
    $(".headerTitulo" ).animate({
        width: "100%",
        opacity: 0.6,
        marginLeft: "0.6in",// 
        // fontSize: "3em",
    }, 5000 );
});

//animaciones logo
$(".headerLogo").hover(function() {
    $(".headerLogo" ).slideUp();
    },
    function(){
        $(".headerLogo" ).slideDown(2000)
});
