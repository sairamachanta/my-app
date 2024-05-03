import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
function Product(props) {
    console.log(props)
    var [sai, setSai] =useState()
    useEffect(() => {
        fetch("https://fakestoreapi.in/api/products")
            .then((res) => {
                return res.json()
                    .then((data) => {
                        
                        var temp=data.products.map((t)=>{return{...t,hai:false}})
                        setSai(temp);
                    })
            })
    }, [])
    function addcart(ele,i){
        sai[i].hai=true
        setSai([...sai])
        props.dispatch({type:"addtocart",payload:ele})

    }
    return (
        <div className="border border-5 border-success">
            <h1 class="text-center text-danger">PRODUCTS</h1><h1>CART:{props.productReducer.cart.length}</h1>
            <div className="d-flex flex-wrap m-2 ">
                {
                    sai?.map((ele,i) => {
                        return (
                            <div key={i} className="border border-2 border-info p-5 w-25 badge text-bg-primary">
                                <p>{ele.title.slice(0, 20)}</p>
                                <p>BRAND:{ele.brand}</p>
                                <img src={ele.image} width="150px" />
                                <p>PRICE:${ele.price}.00</p>
                               {!ele.hai? <button class="btn btn-success" onClick={() => { addcart(ele,i)}}>
                                ADD TO CART
                                </button>:<button class="btn btn-danger" >REMOVE YOUR CARD</button>}
                            </div>
                        )
                    })
                }
            </div>

        </div>)
}
export default connect(store => store)(Product)