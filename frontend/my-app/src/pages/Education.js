import Card from 'react-bootstrap/Card';
import { Button } from '../components/Button';
import { Intro1 } from '../images/imgIndex';
import { Link } from "react-router-dom";

export function Education() {
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
             </section> */}

            {/* <section id='home'>
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
            </section> */}

            <h1>Educational articles that might interest you</h1>
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
                            <h3>What is ESG Investing?</h3>
                            <p>
                            Environmental, social and corporate governance (ESG) investing focuses on companies that support environmental protection, social justice, and ethical management practices. Like all investors, ESG investors value returns. However, they do not prioritize profits above supporting companies that fit into their ethical frameworks.
                            </p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                Read more <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                            </div>
                        </div>
                </div>
            </section>
        </section>
    );
}

