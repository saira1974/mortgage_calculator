import React from "react";
import Income from "./Income"
import Calculator from "../containers/Calculator"; 

const BankLoan = (({income}) => {

    const calculateLoan = function({income}){
        //console.log(income * 3);
    }

    const handleChange = function(event){
        const output = income[event.target.value];
        calculateLoan(output)
    }
    return (
        <div>
            <h2>Mortgage Borrowing Limit</h2>
            
            <h3>{income}</h3>
        </div>
        
    )
})

export default BankLoan;
