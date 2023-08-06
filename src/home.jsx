import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export const Calculator = () => {
  
    const [loan, setLoan] = useState();
    const [loanAmount, setLoanAmount] = useState();
    const [interest, setInterest] = useState();

    const loanCalculation = (loan) => {
    if(loan>0){
    let another = (loan*4000);
    setLoanAmount(another);
    }}

    const interestCalculation = (loan) => {
        if(loan>0){
        let obj =((12/100)*Number(loan*4000)) ;
        setInterest(obj);
    }

        }



    return (
    <div className="container-fluid main">

        <h1>GET DETAILS ABOUT JEWEL LOAN <span><img width="48" height="48" src="https://img.icons8.com/emoji/48/money-bag-emoji.png" alt="money-bag-emoji"/>
</span>  </h1><br />


    <div class="input-group">
  <input  onChange={(e)=>setLoan(e.target.value)} type="number" class="form-control" placeholder="Enter your gram details and get results" aria-label="Recipient's username with two button addons"/>
  <button onClick={()=>loanCalculation(loan)} class="btn btn-outline-secondary" type="button">Loan Amt</button>
  <button onClick={()=>interestCalculation(loan)} class="btn btn-outline-secondary" type="button">Intrst Amt</button>



 



</div>

<div class="card cards">
  <img src="https://images.pexels.com/photos/730647/pexels-photo-730647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={200} height={350} class="card-img-top" alt="..."/>
  <div class="card-body">
     <h3>Rate of interest per month is 12%</h3>
        {loanAmount&&<p >Your loan amount is <b>₹{loanAmount}</b> for above entered grams</p>}
        {interest&& <p >Your interest amount is <b>₹{interest}</b> for above entered grams</p>}
  </div>
</div>


</div>


  )
}

