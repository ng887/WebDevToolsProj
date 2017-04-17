export function getCarrierPlaces(place_id, places) {
    console.log(place_id);
    for (let i = 0; i < places.length; i++) {
        if (places[i].PlaceId === place_id) {
        	console.log(places[i].CityName)
            return places[i].CityName
        }
    }
}
