import React, { useState, useEffect} from "react"
import Income from "../components/Income"
import BankLoan from "../components/BankLoan"


const Calculator = (() => {
  const [income, setIncome] = useState("")

//console.log(income);
  const calculateLoan = function(income){
      setIncome(income * 3);
  }




    return(
        <div>
            <h1>Mortagage Calculator</h1>
                <Income calculateLoan = {calculateLoan}/>
            <BankLoan income = {income}/>
        </div>
    )
})

export default Calculator;