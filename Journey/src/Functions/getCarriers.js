export function getCarrierName(carrier_id, carriers) {
    console.log(carrier_id);
    for (let i = 0; i < carriers.length; i++) {
        if (carriers[i].CarrierId === carrier_id) {
        	console.log(carriers[i].Name)
            return carriers[i].Name
        }
    }
}
