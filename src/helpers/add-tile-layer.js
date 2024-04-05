import L from 'leaflet'

export function addTileLayer(map) {
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Challenge by <a href="https://www.frontendmentor ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/alexeirybak">Alexei Rybak</a>.',
}).addTo(map);
}