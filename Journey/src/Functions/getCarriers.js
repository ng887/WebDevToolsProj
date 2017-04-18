export function getCarrierName(carrier_id, carriers) {   
    for (let i = 0; i < carriers.length; i++) {
        if (carriers[i].CarrierId === carrier_id) {        	
            return carriers[i].Name
        }
    }
}
