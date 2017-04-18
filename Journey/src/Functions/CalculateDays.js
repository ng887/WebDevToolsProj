/**
 * Created by khutaijashariff on 4/11/17.
 */
import moment from 'moment';

export function calculateDays(start, end) {
    const MINUTESINDAY = 1440;
    let startMoment = moment(start);
    let endMoment = moment(end);
    let duration = (endMoment.diff(startMoment,'minutes'))/MINUTESINDAY;
    return Math.ceil(duration);
}