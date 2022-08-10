import { Button } from "../components/Button";
export function Setting() {
    return (
        <div>
            <h1>Settings</h1>
            <section>
                <h1>Change Rounding Value</h1>
                <h3>Your Current Rounding Value is:</h3>

                <Button>Update</Button>
            </section>
            <section>
                <h1>Change Main Investment</h1>
                <h3>When you make payments for online purchases, we will round to the nearest:</h3>
                <h3>The difference will be contributed to your Aether Account</h3>
                <Button>Update</Button>
            </section>
            
        </div>
    );
}