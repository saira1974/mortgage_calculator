import React, { useState } from "react";


    const Income = ({calculateLoan}) => {

        const [income, setIncome] = useState("")

        const handleIncomeChange =event => {
        setIncome(event.target.value);
    }
        const handleIncomeSubmit = (event)=> {
        event.preventDefault();
        const incomeToSubmit = parseInt(income.trim());
        //console.log(incomeToSubmit);
        calculateLoan(incomeToSubmit)
    }


        return(
            <div>
                <form>
                <label for= "income">Annual Income</label>
                <input type="text" id = "income" name = "income" onChange = {handleIncomeChange} ></input>
                <button onClick={handleIncomeSubmit}>Calculate</button> 
                </form>
            </div>
        )

    }
    export default Income;