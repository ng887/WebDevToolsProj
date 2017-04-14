/**
 * Created by khutaijashariff on 4/13/17.
 */
export function getLocationForDays(day, locationsOnDay) {
    let resultLocations = [];
    //console.log(locationsOnDay);
    locationsOnDay.map( (entry)=> {
        if(entry.day === day) {
            resultLocations.push(locationsOnDay.location);
        }
    });
    console.log(resultLocations);
    return resultLocations;
}