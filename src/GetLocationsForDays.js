/**
 * Created by khutaijashariff on 4/13/17.
 */
export function getLocationForDays(day, locationsOnDay) {
    let resultLocations = [];
    if (locationsOnDay.length === 0) {
        return resultLocations;
    } else {
        for (let i = 0; i < locationsOnDay.length; i++) {
            if ( locationsOnDay[i].location != 'deactivated'  && locationsOnDay[i].day == day) { //strict comparision ===
                resultLocations.push(locationsOnDay[i]);
            }

        }
        return resultLocations;
    }
}
