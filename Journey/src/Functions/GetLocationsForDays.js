/**
 * Created by khutaijashariff on 4/13/17.
 */
export function getLocationForDays(day, locationsOnDay) {
    let resultLocations = [];
    if (locationsOnDay.length === 0) {
        return resultLocations;
    } else {
        for (let i = 0; i < locationsOnDay.length; i++) {
            if (locationsOnDay[i].day.toString() === day.toString()) { //strict comparision ===
                resultLocations.push(locationsOnDay[i].location);
            }

        }
    }
    return resultLocations;
}
