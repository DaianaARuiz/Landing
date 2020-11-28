//-------------------------------OVERLAY-----------------------------------------//

const overlay = document.getElementById('overlay');
document.querySelectorAll('.portafolio .contenedor .galeria-port .imagen-port img').forEach((elemento) => {
    const ruta = elemento.getAttribute('src');

    elemento.addEventListener('click', ()=> {
        overlay.classList.add('activo');
        document.querySelector('#overlay img').src = ruta;
    });
});

document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
    overlay.classList.remove('activo');
})

overlay.addEventListener('click', (evento) =>{
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
});

//-------------------------------FORMULARIO-----------------------------------------//

var label = document.querySelectorAll('.input__label');
var input = document.querySelectorAll('.input__field');
var labelContenido = document.querySelectorAll('.input__label-content');

// input.addEventListener('blur', (evento) =>{
//     if(evento.target.value.trim() !== ''){
//         label.no-after;
//     }else{
//         ''
//     }
// });


//-------------------------------CAROUSEL DE CLIENTES-----------------------------------------//


window.addEventListener('load', function(){
    new Glider(document.querySelector('.cards_carousel'), {
        slidesToShow: 1,
        dots: '.cards_carousel__indicadores',
        draggable: true,
        arrows: {
        prev: '.cards__anterior',
        next: '.cards__siguiente'
        }
      });
})