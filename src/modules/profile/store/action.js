import { profileActionTypes } from '../../../redux/action-types';
import { addUser, fetchUsers } from '../../firebase/crud-operations.js';

export const profileActions = {
    getUserData: () => {
        return (dispatch) => {
            fetchUsers(
                'userData', 
                data=>{
                    let userData = {};
                    let userDataKeys = Object.keys(data);
                    if(userDataKeys.length>0){
                        userData = data[ userDataKeys[0] ]
                    }
                    dispatch({
                        "type": profileActionTypes.UPDATE_USER_DATA,
                        "userData": userData
                    })
                }
            );
        }
    }
};