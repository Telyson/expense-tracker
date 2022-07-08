import React from 'react'
import Historyitem from './HistoryItem'

export default function ExpenseTracker() {
    const historyItems = ["Strawberries","Buy Football","Food","Transport",]
    const historyItem = []
    historyItems.forEach((hist) => {
        historyItem.push(<Historyitem history={hist} />)
    })

  return (  
    <div className='cover'>
        <div className='component'>
            <div className='main-cont'>
            <h1>Expense Tracker</h1>

            <div className='balance'>
                <h5>YOUR BALANCE</h5>
                <h1>$450.00</h1>
            </div>

            <div className='income'>
                <span>
                    <h5>INCOME</h5>
                    <h5>$520</h5>
                </span>

                <span>
                    <h5>EXPENSE</h5>
                    <h5>$60</h5>
                </span>
            </div>

            <h5>History</h5> 
            {historyItem}
            
            <h3 style={{marginTop:"40px"}}>Add New Transaction</h3>

            <div>
                <h4 style={{textAlign:"left", width:"250px", margin:"0 auto", marginTop:"10px"}}>Text </h4>
                <input style={{width:"250px", padding:"7px"}} type="text" placeholder='Enter text...' />
            </div>

            <div>
                <h4 style={{textAlign:"left", width:"250px", margin:"0 auto", marginTop:"15px"}}>Amount </h4>
                <p style={{textAlign:"left", width:"250px", margin:"0 auto", marginTop:"4px"}}>(negative-expense, positive-income) </p>
                <input style={{width:"250px", padding:"7px", marginTop:"10px"}} type="text" placeholder='0' />

            </div>

            <div>
                <MyBut />
            </div>
            </div>
        </div>

    </div>
  )
}

const MyBut = () => {
    return (
        <button style={{margin:'10px', width:'270px',padding:"9px", background:'purple',border:'purple', color:'white',}}>
    Add Transaction
    </button>
    )
}