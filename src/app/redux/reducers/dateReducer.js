/**
 * Created by Roi on 28/07/2016.
 */
function dateReducer(date = {}, action) {
    switch(action.type) {
        case 'CHANGE_DATE':
            let newDate = Object.assign({}, date);
            newDate.text = action.date.date;
            return newDate;
        default:
            return date;
    }
}

export default dateReducer