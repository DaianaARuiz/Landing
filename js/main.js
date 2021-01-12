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

//-------------------------------CAROUSEL DE CLIENTES-----------------------------------------//

window.addEventListener('load', function(){
    new Glider(document.querySelector('.clientes__carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots : '.clientes__carousel__indicadores',
      });
})