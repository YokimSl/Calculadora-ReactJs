import React, { useState } from "react";

import './Calculator.css'

export default function Calculator(){
        const [num, setNum] = useState(0);
        const [oldnum, setOldNum] = useState(0);
        const [operator, setOperator] = useState();


        function inputNum(e){
            var input = e.target.value;
            if(num === 0){
                setNum(input)
            }else{
            setNum( num + input)
            }
        }
        function clear(){
            setNum(0)
        }
        function porcentage(){
            setNum(num/100)
        }
        function operatorHandler(){
            if (num > 0){
                setNum(-num);
            }else{
                setNum(Math.abs(num));
            }
        }
        function hadlerOperator(e){
            var operatorInput=e.target.value
            setOperator(operatorInput);
            setOldNum(num);
            setNum(0)
        }
        function calculate(){
            if (operator === "/"){
                setNum(oldnum / num);
            } else if (operator === "+"){
                setNum(parseFloat(oldnum) + parseFloat(num));
            } else if (operator === "X"){
                setNum(oldnum * num);
            } else if (operator === "-"){
                setNum(oldnum - num);
          
            }}
    return (
        <div className="all">
    
        <div className="wrapper">
            <h1 className="result">{num}</h1>

            <div className="row">
           <button className="gray-black" onClick={clear}>AC</button>
           <button className="gray-black" onClick={operatorHandler}>+/-</button>
           <button className="gray-black" onClick={porcentage}>%</button>
           <button className="Orange" onClick={hadlerOperator} value={"/"}>/</button>
           </div>

           <div className="row">
           <button className="gray" onClick={inputNum} value={7}>7</button>
           <button className="gray" onClick={inputNum} value={8}>8</button>
           <button className="gray" onClick={inputNum} value={9}>9</button>
           <button className="Orange" onClick={hadlerOperator} value={"X"}>X</button>
           </div>

           <div className="row">
           <button className="gray" onClick={inputNum} value={4}>4</button>
           <button className="gray" onClick={inputNum} value={5}>5</button>
           <button className="gray" onClick={inputNum} value={6}>6</button>
           <button className="Orange" onClick={hadlerOperator} value={"-"}>-</button>
           </div>

           <div className="row">
           <button className="gray" onClick={inputNum} value={1}>1</button>
           <button className="gray" onClick={inputNum} value={2}>2</button>
           <button className="gray" onClick={inputNum} value={3}>3</button>
           <button className="Orange" onClick={hadlerOperator} value={"+"}>+</button>
           </div>

           <div className="final">
           <button className="gray" id="teste" onClick={inputNum} value={0}>0</button>
           <button className="gray" onClick={inputNum} value={"."}>,</button>
           <button className="Orange" onClick={calculate}>=</button>
           </div>
        </div>
        </div>
    )
}