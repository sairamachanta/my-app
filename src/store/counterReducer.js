const intialstate={
    count:0
}
function counterreducer(state=intialstate,action){
    if(action.type==="INCREMENT"){
        return {...state,count:state.count+1};
    }
    if(action.type==="DECREMENT"){
        return {...state,count:state.count-1};
    }
       return state
}
export default counterreducer;