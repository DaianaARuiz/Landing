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
