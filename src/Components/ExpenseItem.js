import './ExpenseItem.css'


function ExpenseItem(){
    return (
        <div className='expense-item'>
            <div> March 28th 2021</div>
            <div className='expense-item_description'>
                <h2>Car Insurance</h2>
                </div>
                <div className='expense-item_price'>$235.34</div>
            
        </div>
    
    );
}

export default  ExpenseItem;