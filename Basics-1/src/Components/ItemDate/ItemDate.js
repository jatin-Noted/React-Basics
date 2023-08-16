import './ItemDate.css'

function ItemDate(props) {
    // return(
    //     <div className='mfg'>
    //         <span>20 </span>
    //         <span>June </span>
    //         <span>1998</span>
    //     </div>
    // );

    // const day = 20;
    // const month = "June";
    // const year = 2001;

    // return (
    //     <div className='mfg'>
    //         <span> {day} </span>
    //         <span> {month} </span>
    //         <span> {year}</span>
    //     </div>
    // );

    
    const day = props.day;
    const month = props.month;
    const year = props.year;

    return (
        <div className='mfg'>
            <span> {day} </span>
            <span> {month} </span>
            <span> {year}</span>
        </div>
    );



}

export default ItemDate;