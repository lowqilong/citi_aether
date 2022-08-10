import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./PaymentSection.css";

export function PaymentSection() {
    const [success, setSuccess] = useState(false)
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://24bpm8rci1.execute-api.ap-southeast-1.amazonaws.com/dev/addTransaction",
                {
                    username: "keith",
                    transactionAmount: parseFloat(amount),
                    description: description
                }
            );
            console.log(response?.data);
            console.log(JSON.stringify(response))
            setSuccess(true);
        } catch (err) {
            console.log("API Call Failure")
            console.log(err)
        }
    };
    
    const makeAnotherPayment = (event) => {
        event.preventDefault();
        setSuccess(false)
    }

    return (
        <div className="paymentSec">
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <Link to={""}>
                        <Button onClick={makeAnotherPayment}>
                            Make Another Payment
                        </Button>
                    </Link>
                </section>
            ) : (
                <form onSubmit={handleSubmit} className="paymentForm">
                    <h1>Payment</h1>
                    <label>Pay To</label>
                    <input 
                        type="text" 
                        name="Paying To" 
                        />
                    <label>Description</label>
                    <input 
                        type="text" 
                        name="Description of transaction" 
                        autoComplete="off"
                        onChange={(event) => setDescription(event.target.value)}
                        />
                    <label>Amount</label>
                    <input 
                        type="float" 
                        name="Enter payment amount" 
                        autoComplete="off"
                        onChange={(event) => setAmount(event.target.value)}
                    />
                    <input type="submit"/>
                </form>
            )}
        </div>
    );
}

