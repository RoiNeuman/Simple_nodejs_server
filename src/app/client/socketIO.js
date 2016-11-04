/**
 * Created by Roi on 01/08/2016.
 */
import actions from '../redux/actions'

function socketIO(socket, store) {
    
    socket.on('date', date =>
        store.dispatch(actions.changeDate(date))
    );
    
}

export default socketIO