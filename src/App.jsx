import styles from "./App.module.css"
import Display from "./components/Display"
import ButtonContainer from "./components/ButtonContainer"
import { useState } from "react"
import { set } from "mongoose";
function App() {
  let [calval,setCalVal]=useState("");
  function handleOnClick(buttonText){
    if(buttonText==='C'){
      setCalVal("");

    }else if(buttonText=='='){
        const result=eval(calval);    /*eval is method which perform calculation of numbers in strings */
        setCalVal("= "+result);
    }else{
      const newCalval=calval + buttonText;
      setCalVal(newCalval);
    }
  }
  return (
    <div className={styles.calculator}>
      <h1 className={styles.heading}>Calculator</h1>
      <Display calval={calval}></Display>
      <ButtonContainer handleOnClick={handleOnClick}></ButtonContainer>
    </div>
  )
}

export default App
