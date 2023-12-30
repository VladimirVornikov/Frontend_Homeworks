import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(props) {

    function generateStars(num) {
        let arrayStars = [];
        for (let i = 0; i < 5; i++) {
            if (num > i) {
                arrayStars.push('fa fa-star active');
            } else {
                arrayStars.push('fa fa-star');
            }
        }
        return arrayStars;
    }
    

    return (
        <div className="main">
            {props.products.map((elem) => (
                <Link to={`/products/${elem.id}`} key={elem.id} className="productsBox">
                    <p>{elem.title}</p>
                    <div>
                        {generateStars(Math.round(elem.rating.rate)).map((element, index) => (
                            <span key={index} className={element}></span>
                        ))}
                    </div>
                </Link>
            ))}
        </div>
    );
}
