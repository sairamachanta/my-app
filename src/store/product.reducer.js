const intialstate={
    cart:[]
}
function productReducer(state=intialstate,action){
    console.log("reducer",action.payload);
      if(action.type==="addtocart"){
       return {...state,cart:[...state.cart,action.payload]}

      }
      return state
}
export default productReducer