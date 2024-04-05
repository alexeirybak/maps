export async function getAddress(ip = '8.8.8.8') {
	const response = await fetch(
		`https://ipgeolocation.abstractapi.com/v1/?api_key=d562065c0b8f4145b6512b6bfad22420&ip_address=${ip}`
	)

	return await response.json();
}
