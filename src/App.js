import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [getPlayerSymbol, setPlayerSymbol] = useState("")
    const [getComputerSymbol, setComputerSymbol] = useState("")
    // const [getResult, setResult] = useState([0, 0])
    const [getPlayerResult, setPlayerResult] = useState(0)
    const [getComputerResult, setComputerResult] = useState(0)

    function updateResult(player, computer) {
        if (player === "scissors" && computer === "paper"
            || player === "scissors" && computer === "rock"
            || player === "rock" && computer === "scissors") {

            setPlayerResult(getPlayerResult + 1)

            // const oldResult = getResult
            // oldResult[0] +=1
            // setResult(oldResult)
        }
        if (computer === "scissors" && player === "paper"
            || computer === "scissors" && player === "rock"
            || computer === "rock" && player === "scissors") {

            setComputerResult(getComputerResult + 1)

            // const oldResult = getResult
            // oldResult[1] +=1
            // setResult(oldResult)
        }
    }
    function generateComputerSymbol() {
        const arr = ["scissors", "paper", "rock"]
        const random = Math.floor(Math.random() * arr.length)
        setComputerSymbol(arr[random])
        updateResult(getPlayerSymbol, arr[random])
    }
// images sudetos kaip klases .css. Padarytas images state (isivaizduojam, kad jame yra 3 states ("scissors", "rock", "paper")). Images dedam i divus, ant kuriu
// dedam eventa setPlayerSymbol su argumentu - vienu is 3 states.
    return (
        <div className="App">
            <div className="d-flex spc-evenly">
                <div className="box">
                    <h3>Player</h3>
                    <div className="d-flex">
                        <div className={getPlayerSymbol === "scissors" ? "scissors symbolSelected" : "scissors"} onClick={() => setPlayerSymbol("scissors")}></div>
                        <div className={getPlayerSymbol === "rock" ? "rock symbolSelected" : "rock"} onClick={() => setPlayerSymbol("rock")}></div>
                        <div className={getPlayerSymbol === "paper" ? "paper symbolSelected" : "paper"} onClick={() => setPlayerSymbol("paper")}></div>
                    </div>
                </div>
                <div>
                    {/*<h1>{getResult[0]}/{getResult[1]}</h1>*/}
                    <h1>{getPlayerResult}/{getComputerResult}</h1>
                </div>
                <div className="box">
                    <h3>Computer</h3>
                    <div className="d-flex">
                        <div className={getComputerSymbol === "scissors" ? "scissors symbolSelected" : "scissors"}></div>
                        <div className={getComputerSymbol === "rock" ? "rock symbolSelected" : "rock"}></div>
                        <div className={getComputerSymbol === "paper" ? "paper symbolSelected" : "paper"}></div>
                    </div>
                </div>
            </div>
            <div className="spc-center">
                <button onClick={generateComputerSymbol}>PLAY</button>
            </div>
        </div>
    );
}

export default App;
