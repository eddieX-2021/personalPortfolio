import React, { useState, useRef } from 'react';
import "./ContactMe.css";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    const [bool, setBool] = useState(false);
    const form = useRef();

    const submitForm = async (e) => {
        e.preventDefault();
        setBool(true);

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE,
            process.env.REACT_APP_TEMPLATE,
            form.current,
            process.env.REACT_APP_PUBKEY
        )

            .then(
                () => {
                    toast.success("Thank you for contacting Eddie.");
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("An error occurred. Please try again later.");
                }
            )
            .finally(() => {
                setBool(false);
            });
    };

    return (
        <div id="contact" className="main-container">
            <div className="central-form">
                <div className="back-form">
                    <div className="img-back">
                        <h4>Message Me Here!</h4>
                        <img src={require("../../assets/ContactMe/contactBackground.jpg")} alt="image not found" />
                    </div>
                    <form ref={form} onSubmit={submitForm}>
                        <p>Thanks for Contacting</p>
                        <label htmlFor="from_name">Name</label>
                        <input type="text" name="from_name" required />

                        <label htmlFor="user_email">Email</label>
                        <input type="email" name="user_email" required />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" required />

                        <div className="send-btn">
                            <button type="submit">
                                send
                                <i className="fa fa-paper-plane" />
                                {bool ? (
                                    <b className="load">
                                        <img src={require("../../assets/ContactMe/load2.gif")} alt="image not responding" />
                                    </b>
                                ) : (
                                    ""
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}