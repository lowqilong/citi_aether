import axios from "axios";
import { useState } from "react";

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
    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        Make Another Payment
                    </p>
                </section>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h1>Payment</h1>
                    <label>Pay To</label>
                    <input type="text" name="Paying To" />
                    <label>Description</label>
                    <input type="text" name="Description of transaction" />
                    <label>Amount</label>
                    <input type="float" name="Enter payment amount" />
                    <input type="submit" value="Submit" />
                </form>
            )}
        </>
    );
}

