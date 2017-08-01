//State argument is not appliaction state, only the state
//this reducer is responsible for

//this will be called when the action send in or pass
//if state not set default = null ; when  the app start , state will be undefined -> error
export default function(state =null, action){
    //state +=1;

    //when app boots up , state =null , action 會先踩一次 但是沒選東西, 回傳state = null
    switch(action.type)
    {
        case 'BOOK_SELECTED':
        return action.payload; //don't do any state change here , ex( state.title= XXXX return state) 
    
    }

    return state;

}