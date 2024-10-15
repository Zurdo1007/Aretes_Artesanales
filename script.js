// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    
    // Selecciona todos los botones con la clase 'btn-whatsapp'
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    
    // Recorre todos los botones de WhatsApp
    whatsappButtons.forEach(function (button) {
        
        // Agrega un evento 'click' a cada botón
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Evita que el enlace se abra inmediatamente
            
            // Obtiene los valores de los atributos personalizados 'data-producto' y 'data-imagen'
            const producto = this.getAttribute('data-producto');
            const imagen = this.getAttribute('data-imagen');
            
            // Número de WhatsApp del distribuidor (modificar según el distribuidor real)
            const numeroWhatsApp = '3117021947'; 
            
            // Genera el mensaje personalizado que se enviará
            const mensaje = `Estoy interesado en los ${producto} dame mas informacion. Aquí está la imagen: ${imagen}`;
            
            // Codifica el mensaje para que sea válido en una URL y genera el enlace de WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            
            // Abre el enlace de WhatsApp en una nueva pestaña
            window.open(urlWhatsApp, '_blank');
        });
    });
});
