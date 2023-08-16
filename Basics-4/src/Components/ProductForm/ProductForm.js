import { useState } from 'react';
import './ProductForm.css'

function ProductForm () {
    
    // function titleChangeHandler(event){
    //     console.log("title change hogya");
    //     console.log(event.target.value);
    // }
    // function dateChangeHandler(event){
    //     console.log("Date change hogyiiii");
    //     console.log(event.target.value);
    // }


    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
        console.log(newTitle);
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
        console.log(newDate);
    }

    function submitHandler(event){
        event.preventDefault(); //submit button pe click krke kuch bhi empty nhi hoga

        const productData = {
            title: newTitle,
            date: newDate
        };

        console.log(productData);

        //now data has been stored in object 'productData'....

        // now I want my input fields to get empty....

        setDate('');
        setTitle('');

        //newTitle & newDate now got empty in code but we need to render it to the UI....for that we have to link newTitle & newDate to the input fields via value attribute
    }


    return(
        <form className='form' onSubmit={submitHandler}>
            <div className='title'>
                <label>Title</label>
                <input type='Text' onChange={titleChangeHandler} value = {newTitle}></input>
            </div>
            <div className='date'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} value = {newDate}></input>
            </div>
            <div className='bttnForm'>
                <button className='hoverEffectBttn'>Submit</button>
            </div>
        </form>
    );
}

export default ProductForm;