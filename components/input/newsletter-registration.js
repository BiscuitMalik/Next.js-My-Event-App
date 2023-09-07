import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
    const path = require('path');
    const currentWorkingDirectory = process.cwd();
    const filePath = path.join(currentWorkingDirectory, 'pages', 'api', 'newletter.js');

    const emailInputRef = useRef()
    function registrationHandler(event) {
        event.preventDefault(); //For not to reloading  
        const userEmail = emailInputRef.current.value
        fetch('/api/newsletter', {
            method: 'POST',
            body: JSON.stringify({ email: userEmail }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    return (
        <section className={classes.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={classes.control}>
                    <input
                        type='email'
                        id='email'
                        placeholder='Your email'
                        aria-label='Your email'
                        ref={emailInputRef} />
                    <button>Register</button>
                </div>
            </form>
        </section>
    );
}
export default NewsletterRegistration;