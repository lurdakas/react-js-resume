export default function ContactMe(){
    return(
        <section id="Contact" className="contact--section"> 
            <div className="contact--">
                <p className="sub--title"> Get In Touch</p>
                <h2>Contact Me</h2>
            </div>
            <form className="contact--form--container">
            <div className="container">
                <label htmlFor="first-name" className="contact--label">
                <span className="text-md"> First Name</span>
                <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
                </label>
                <label htmlFor="last-name" className="contact--label">
                <span className="text-md"> Last Name</span>
                <input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
                </label>
                <label htmlFor="email-name" className="contact--label">
                <span className="text-md"> Email Name</span>
                <input type="email" className="contact--input text-md" name="email" id="email" required />
                </label>
                <label htmlFor="phone-number" className="contact--label">
                <span className="text-md"> Phone-number </span>
                <input type="number" className="contact--input text-md" name="phone-number" id="phone-number" required />
                </label>
            </div>
            <label htmlFor="choose-topic" className="contact--label">
                <span className="text-md"> Choose a topic </span>
                <select id="choose-topic" className="contact--input text-md">
                    <option>Select One... </option>
                    <option>Front-End </option>
                    <option>Back-End </option>
                    <option>Embeded </option>
                </select>
                </label>
                <label htmlFor="message" className="contact--label">
                <span className="text-md"> Message </span>
                <textarea  className="contact--input text-md" id="message" rows="9" placeholder="Type your message..."/>
                </label>
                <div> 
                    <button className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>
        </section>
    )
}