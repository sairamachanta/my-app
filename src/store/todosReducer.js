const intialstate={
     todo:["sai","ram","achanta","siva"]
}
function todosReducer(state=intialstate,action){
    if(action.type==="sai"){
        return {...state ,todo:[...state.todo,action.payload]}
    }
    return state;
}
export default todosReducer;