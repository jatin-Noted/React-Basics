import './Products.css'
import ProductItem from '../ProductItem/ProductItem';
import Cards from '../Cards/Cards';

const Products = (props) => {
    return (
        <div className="products">
            <ProductItem 
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}>
            </ProductItem>
            <ProductItem 
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}>
            </ProductItem>
            <ProductItem 
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}>
            </ProductItem>
            <ProductItem 
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}>
            </ProductItem>
        </div>
    );
}




export default Products;