import { profileActionTypes } from '../../../redux/action-types';

const InitialState = {
    userData: {}
}

export default function profileReducer(state=InitialState, action){
    switch(action.type){
        case profileActionTypes.UPDATE_USER_DATA: 
            return {
                ...state,
                userData: action.userData
            }
        
        default:
            return state;
    }
}