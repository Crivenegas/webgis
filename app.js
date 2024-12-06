// Inicializar el mapa en una ubicación y nivel de zoom
var map = L.map('map').setView([-36.82, -73.05], 10);

// Agregar capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Ejemplo de marcador de punto
L.marker([-36.82, -73.05]).addTo(map)
    .bindPopup('Posible Punto de Posada')
    .openPopup();
