import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrAction, inctAction, newProductAction} from "../store/productReducer";

export default function Product() {

    const product = useSelector((store) => store.product);
    const dispatch = useDispatch();

    const handleAddProduct = (event) => {
        event.preventDefault();

        console.log(event.target.value);

        const formData = new FormData(event.target)

        const productName = formData.get('product');
        const productCount = formData.get('count');

        if(productName && productCount) {
            dispatch(newProductAction([productName, parseInt(productCount)]))
        }

        event.target.reset()


    }

    return (
        <div className="mainContainer">
            <h1>Products in the cart</h1>
            {product.map((elem) => {
                if ((elem.count > 0) && (elem.count <= 25)) {
                    return (
                        <div className="cartGoods" key={elem.id}>
                            <h2>{elem.title}</h2>
                            <button onClick={() => dispatch(inctAction(elem.id))}>+</button>
                            <h3>{elem.count}</h3>
                            <button onClick={() => dispatch(decrAction(elem.id))}>-</button>
                        </div>
                    );
                }
            })}
            <form onSubmit={handleAddProduct}>
                <input name = 'product' type = 'text' placeholder="Product's name"></input>
                <input name = 'count' type = 'number' placeholder="Number"></input>
                <button type = 'submit' className="buttonAdd">Add new product to the cart</button>
            </form>
        </div>
    );
}
