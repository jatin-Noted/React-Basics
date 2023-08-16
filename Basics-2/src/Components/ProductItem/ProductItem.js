import './ProductItem.css'
import Cards from '../Cards/Cards';
import ProductDate from '../ProductDate/ProductDate';

// import { useState } from 'react';

const ProductItem = (props) => {

    // const[title, setTitle] = useState(props.title);

    // function clickHandler(){
    //     console.log("Button Clicked");
    //     setTitle("POPCORN"); 
    // }

    return (
        <Cards className="product-item">
            <ProductDate date={props.date}></ProductDate>
            <div className="product-item_description">
                <h2>{props.title}</h2>
            </div>
            <button className='bttn'>Add to Cart</button>
            {/* <button onClick={clickHandler} className='bttn'>Add to Cart</button> */}
        </Cards>
    );
}

export default ProductItem;