import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    //const name = "Shaurk";
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1>Welcome to Brack.it, {message}</h1>
            <CreateBracketButton />
        </div>
    );
}

function CreateBracketButton() {
    const [clicked, setClicked] = useState(false);
    function bracketForm() {
        setClicked(true);
        alert("To Make Into Bracket Form");
    }
    if (clicked) {
        return (<button onClick={bracketForm}>Bracket creating...</button>);
    }
    else {
        return (<button onClick={bracketForm}>Create Bracket</button>);
    }
    
}

export default App
