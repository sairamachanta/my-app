import React from 'react'
import { connect } from 'react-redux'
function Todolist(props){
    console.log(props)
    return(

<div className="border border-2 border-primary m-2 p-2">
   

   <h1>TODOLIST</h1>
   <input type="text" id="d1"/>
   
   <button class="badge bg-success  m-2 p-2" onClick={()=>{props.dispatch({type:"sai",payload:document.getElementById("d1").value})}} >
    ADD TO</button>
   {
    props.todosReducer.todo.map(a=>{return <li>{a}</li> })
   }
</div>



    )
}
export default connect(function (store) { return store })(Todolist)