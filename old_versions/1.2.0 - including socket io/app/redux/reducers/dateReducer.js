/**
 * Created by Roi on 28/07/2016.
 */
function dateReducer(date = {}, action) {
    switch(action.type) {
        case 'CHANGE_DATE':
            return date = {
              text: action.date.date
            };
        default:
            return date;
    }
}

export default dateReducer