import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./PaymentSection.css";

export function PaymentSection() {
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log({
                username: "keith",
                transactionAmount: 3,
                description: "Payment for Koufu"
            })
            // const response = await axios.post("localhost:4000/addTransaction",
            //     {
            //         username: "keith",
            //         transactionAmount: 3,
            //         description: "Payment for Koufu"
            //     }
            // );
            const response = await axios.post("http://localhost:4000/getUserDetails",
                // JSON.stringify({
                //     username: "keith"
                // })
                {
                    username: "keith"
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

    const submitDummy = (event) => {
        event.preventDefault();
        setSuccess(true)
    }
    
    const makePaymentDummy = (event) => {
        event.preventDefault();
        setSuccess(false)
    }

    return (
        <div className="paymentSec">
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <Link to={""}>
                        <Button onClick={makePaymentDummy}>
                            Make Another Payment
                        </Button>
                    </Link>
                </section>
            ) : (
                <form onSubmit={submitDummy} className="paymentForm">
                    <h1>Payment</h1>
                    <label>Pay To</label>
                    <input type="text" name="Paying To" />
                    <label>Description</label>
                    <input type="text" name="Description of transaction" />
                    <label>Amount</label>
                    <input type="float" name="Enter payment amount" />
                    <input type="submit"/>
                </form>
            )}
        </div>
    );
}

