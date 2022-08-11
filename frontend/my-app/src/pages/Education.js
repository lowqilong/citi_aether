import Card from 'react-bootstrap/Card';
import { Button } from '../components/Button';
import { Intro1 } from '../images/imgIndex';
import { Link } from "react-router-dom";

export function Education() {
    return (
        <section>
            <section id='home'>
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
            </section>
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

            <h1>Investment 101</h1>
            <section>
                <div className="intro">
                        <div>
                            <div>
                            <h3>What is investing?</h3>
                            <p>
                            Investing, broadly, is putting money to work for a period of time in some sort of project or undertaking in order to generate positive returns
                            (i.e., profits that exceed the amount of the initial investment). It is the act of allocating resources, usually capital (i.e., money),
                            with the expectation of generating an income, profit, or gains.
                            </p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                Read more <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                            </div>
                        </div>
                </div>
                <div className="intro">
                        <div >
                            <div>
                            <h3>Intro to Equities</h3>
                            <p>
                            Equity, typically referred to as shareholders' equity (or owners' equity for privately held companies), represents the amount of money that would be returned to a company's shareholders if all of the assets were liquidated and all of the company's debt was paid off in the case of liquidation. In the case of acquisition, it is the value of company sales minus any liabilities owed by the company not transferred with the sale.
                            </p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                Read more <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                            </div>
                        </div>
                </div>
                <div className="intro">
                        <div >
                            <div>
                            <h3>Intro to Equities</h3>
                            <p>
                            Equity, typically referred to as shareholders' equity (or owners' equity for privately held companies), represents the amount of money that would be returned to a company's shareholders if all of the assets were liquidated and all of the company's debt was paid off in the case of liquidation. In the case of acquisition, it is the value of company sales minus any liabilities owed by the company not transferred with the sale.
                            </p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                Read more <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                            </div>
                        </div>
                </div>
            </section>

            {/* <h1>Why should you get started?</h1>
            <br />
            <p>
                If you want to make the most of your spare change and get the occasional retailer kickback,
                there’s really no better place to do that than here at Aether Finance.
                The automatic roundups makes saving and investing easy.
                As a retail investor, you will be surprised by how quickly those pennies accumulate.
            </p>
            <br />
            <br />
            <br />
            <h1>What is Investing?</h1>
            <br />
            <p>
                Investing, broadly, is putting money to work for a period of time in some sort of project or undertaking in order to generate positive returns
                (i.e., profits that exceed the amount of the initial investment). It is the act of allocating resources, usually capital (i.e., money),
                with the expectation of generating an income, profit, or gains.
            </p>
            <br />
            <p>
                One can invest in many types of endeavors (either directly or indirectly) such as using money to start a business,
                or in assets such as purchasing real estate in hopes of generating rental income and/or reselling it later at a higher price.
            </p>
            <br />
            <p>
                Investing differs from saving in that the money used is put to work, meaning that there is some implicit risk that the related project(s) may fail,
                resulting in a loss of money. Investing also differs from speculation in that with the latter, the money is not put to work per-se,
                but is betting on the short-term price fluctuations.
            </p>
            <br /> */}
        </section>
    );
}

