import React, { useState } from 'react'
import "./App.css"

const App = () => {
    const [result, setresult] = useState("");

    const handle = (e) => {
        
        setresult("");
        setresult(result.concat(e.target.value));
        
    }
    const clear =() =>{
        setresult("");

    }
    const backspace = () =>{
        setresult(result.slice(0, - 1)); // or result.length -1
    }
    const calculate = () =>{
        try{
            setresult(eval(result).toString());
        }catch(err){
            setresult("Error")
        }
       
        
    }
    return (
        <>
            <div className='container'>
                <form>
                    <input type="text" placeholder='0' value={result} />
                </form>
                <div className='keypad'>
                    <button id='clear' onClick={clear}>AC </button>
                    <button id='backspace' onClick={backspace}>C</button>
                    <button value="%" onClick={handle}>%</button>
                    <button value="/" onClick={handle}>&divide;</button>
                    <button value="7" onClick={handle}>7</button>
                    <button value="8" onClick={handle}>8</button>
                    <button value="9" onClick={handle}>9</button>
                    <button value="*" onClick={handle}>&times;</button>
                    <button value="4" onClick={handle}>4</button>
                    <button value="5" onClick={handle}>5</button>
                    <button value="6" onClick={handle}>6</button>
                    <button value="-" onClick={handle}>&ndash;</button>
                    <button value="1" onClick={handle}>1</button>
                    <button value="2" onClick={handle}>2</button>
                    <button value="3" onClick={handle}>3</button>
                    <button value="+" onClick={handle}>+</button>
                    <button value="0" onClick={handle}>0</button>
                    <button value="." onClick={handle}>.</button>
                    <button onClick={calculate}  id="equal" >=</button>


                </div>

            </div>
        </>
    );
}

export default App;
