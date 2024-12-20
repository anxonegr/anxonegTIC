// Código para mostrar/ocultar la pestaña flotante con animación
document.getElementById('toggle-info').addEventListener('click', function() {
    let infoBox = document.getElementById('info-box');
    if (infoBox.style.opacity === '0' || infoBox.style.opacity === '') {
        infoBox.style.display = 'block';
        setTimeout(() => { infoBox.style.opacity = '1'; }, 10);
    } else {
        infoBox.style.opacity = '0';
        setTimeout(() => { infoBox.style.display = 'none'; }, 500);
    }
});

// Código para cambiar el tema de la página
document.getElementById('toggle-theme').addEventListener('click', function() {
    let body = document.body;
    if (body.style.backgroundColor === 'rgb(255, 248, 220)') {
        body.style.backgroundColor = '#2F4F4F';
        body.style.color = '#FFF8DC';
    } else {
        body.style.backgroundColor = '#FFF8DC';
        body.style.color = '#000000';
    }
});

// Código para la estela del ratón
document.addEventListener('mousemove', function(e) {
    let trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
});
