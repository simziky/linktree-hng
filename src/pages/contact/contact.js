import Footer from "../../components/footer/footer"
import "./contact.scss"

const Contact = () => {
    return (
        <>
        <div className="Contact-main">

            <div className="contact-inner">
                <h2>
                    Contact Me
                </h2>

                <p>
                Hi there, contact me to ask me about anything you have in mind.
                </p>

                <form>
                    <div className="form-first-section">
                        <div>
                            <label for="first_name">First Name</label>
                            <input type = "text" name="first_name"  placeholder="Enter Your First Name" id="first_name" required />
                        </div>

                        <div>
                        <label for="last_name">Last Name</label>
                        <input type = "text" name="last_name"  placeholder="Enter Your Last Name" id="last_name" required />
                        </div>
                    </div>

                    <div className="form-second-section">
                        <label for="email">Email</label>
                        <input type = "email" name="email"  placeholder="yourname@email.com" id="email" required />
                    </div>


                    <div className="form-third-section">
                        <label for="message">Message</label>
                        <textarea  name="message"  placeholder="Send me a message and I'll reply you as soon as possible..." id="message" required />
                    </div>

                    <div className="form-fourth-section">
                        <input type= "checkbox"  name="checkbox"  id="checkbox" required />
                        <label for="checkbox">You agree to providing your data to Simeon who may contact you.</label>
                    </div>

                    <button id="btn__submit">
                    Send message
                    </button>
                </form>

            </div>

    

        </div>

        <Footer />

     


        </>
    )
}

export default Contact