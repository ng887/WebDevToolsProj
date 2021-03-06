/**
 * Created by khutaijashariff on 4/16/17.
 */
export function removeLocation(array, val1, val2) {
    const prop1 = "location";
    const prop2 = "day";
    var i = array.length;
    while(i--){
        if( array[i]
            && array[i].hasOwnProperty(prop1) && array[i].hasOwnProperty(prop2)
            && (arguments.length > 2 && array[i][prop1].name.toString() === val1.toString() && array[i][prop2].toString() === val2.toString()  ) ){
            array.splice(i,1);
        }
    }
    return array;
}