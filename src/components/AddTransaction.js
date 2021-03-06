import React from 'react';
import { context } from './context';


function AddTransaction() {
    let {dispatch} = React.useContext(context);

    function Add(){
        if(document.getElementById("desc").value === "")
        {
            alert("Error! Enter a valid description!");
            return;
        }
        if(document.getElementById("amount").value === "" || parseInt(document.getElementById("amount").value) === 0)
        {
            alert("Error! Enter a valid amount!");
            return;
        }
        let trans = {desc:document.getElementById("desc").value,amount:document.getElementById("amount").value};
        document.getElementById("desc").value = "";
        document.getElementById("amount").value = "";
        dispatch({data:trans, type:"add"});
    }

  return (
    <div className="add-transaction">
      <h3>Add Transaction</h3>
      <hr/>
      <label>Description:</label>
      <input type="text" id="desc" placeholder="Enter description"/>
      <label>Amount:</label>
      <input type="number" id="amount" placeholder="-ive -> expense, +ive -> income"/>
      <button className="btn" onClick={Add}>Add</button>
    </div>
  );
}

export default AddTransaction;
