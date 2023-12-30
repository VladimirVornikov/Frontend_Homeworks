import React from "react";
import style from "./Item.module.css";
import { Link } from "react-router-dom";

export default function Item(props) {

    //was imported from HomePage
    function generateStars(num) {
        let arrayStars = [];
        for (let i = 0; i < 5; i++) {
            if (num > i) {
                arrayStars.push("fa fa-star active");
            } else {
                arrayStars.push("fa fa-star");
            }
        }
        return arrayStars;
    }


    return (
        <div className="Box">
            <div className={style.Container}>
                <h1>{props.productInfo.title}</h1>
                <img className={style.img} src={`${props.productInfo.image}`} />
                <p><b>Price:</b> {props.productInfo.price}$</p>
                <p><b>Description:</b> {props.productInfo.description}</p>
                <div>{generateStars(Math.round(props.productInfo.rating.rate)).map((element, index) => (
                        <span key={index} className={element}></span>
                    ))}
                </div>
            </div>

            <Link to = {`/products`}>
            
                <button>Back</button>
            </Link>
        </div>
    );
}
