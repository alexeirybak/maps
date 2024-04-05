import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from '../images/icon-location.svg';
import { addOffset, addTileLayer, getAddress, validateIp } from './helpers';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
	iconUrl: icon,
	iconSize: [30, 40],
});

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
	center: [64.555, 39.85],
	zoom: 13,
	zoomControl: false,
});
addTileLayer(map);
L.marker([64.555, 39.85], { icon: markerIcon }).addTo(map);

function getData() {
	if (validateIp(ipInput.value)) {
		getAddress(ipInput.value).then(setInfo);
	}
}

function handleKey(e) {
	if (e.key === 'Enter') {
		getData();
	}
}

function setInfo(mapData) {
	let lat = mapData.latitude;
	let long = mapData.longitude;
	console.log(mapData);
	ipInfo.innerText = mapData.ip_address;
	locationInfo.innerText = mapData.country + ' ' + mapData.region;
	timezoneInfo.innerText =
		mapData.timezone.gmt_offset + ' ' + mapData.timezone.name;
	ispInfo.innerText = mapData.connection.isp_name;

	map.setView([lat, long]);
	L.marker([lat, long], { icon: markerIcon }).addTo(map);

	if (matchMedia('(max-width: 1023px)').matches) {
		addOffset(map);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	getAddress('102.22.22.1').then(setInfo);
});
