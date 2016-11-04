/**
 * Created by Roi on 24/07/2016.
 */
function userReducer(user = {}, action) {
    switch (action.type) {
        case 'CREATE_USE_ID':
            return {
                    username: user.username,
                    id: action.id
            }
        default:
            return user;
    }
}

export default userReducer