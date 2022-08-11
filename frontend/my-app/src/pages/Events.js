import Card from 'react-bootstrap/Card';
import { Button } from '../components/Button';
import { Intro1 } from '../images/imgIndex';
import { Link } from "react-router-dom";

export function Events() {
    return (
        <section>
            {/* <section id='home'>
                <div className="intro">
                    <div className="intro--wrapper">
                        <h2>One-to-One Consultations</h2>
                        <p>To provide you with personalised advice on how you can plan and improve your financial future. Our Financial Experts are available by appointment, to guide you towards a better future.</p>
                        <p>With years of financial consultation experience under their belt, they are well adept and will provide valuable insights on how you can achieve your financial goals</p>
                        <Link to="/booking" replace style={{textDecoration: 'none'}}>
                            <Button children="Book an Appointment" />
                        </Link>
                    </div>

                    <img src={Intro1} alt="intro img" />
                </div>
            </section> */}
            <section id='home'>
                <div className="intro">
                    <div className="intro--wrapper">
                        <h2>Live Interactive Seminars</h2>
                        <p>Aside from one-on-one consultations, our Financial Experts also conduct live interative seminars.</p>
                        <p>It is a great opportunity for you to get to know them better</p>
                        <p>Hear about their financial investment stories. Ask and have your questions answered live!</p>
                        <p>Get Inspired, learn and keep update to date with the latest events happening around!</p>
                        <Button children="Seminar Calendar" />
                    </div>

                    <img src={Intro1} alt="intro img" />
                </div>
            </section>

            <section id='home'>
                <div className="intro">
                    <div className="intro--wrapper">
                        <h2>Meetups/Social Events</h2>
                        <p>Conversations are a great way to gain knowledge</p>
                        <p>We host a multitude of meetups and social events in Asia, where our Aether community members get to meet and grow their network</p>
                        <p>It is also a great opportunity to meet the Aether team and get to know more about us!</p>
                        
                        <Button children="Upcoming Meetups" />
                    </div>

                    <img src={Intro1} alt="intro img" />
                </div>
            </section>
        </section>
    );
}

