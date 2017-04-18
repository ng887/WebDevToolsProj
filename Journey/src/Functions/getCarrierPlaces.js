export function getCarrierPlaces(place_id, places) {    
    for (let i = 0; i < places.length; i++) {
        if (places[i].PlaceId === place_id) {        	
            return places[i].CityName
        }
    }
}
