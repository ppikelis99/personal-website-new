import './Contact.css'

export default function Contact() {

    const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
        try {
            const response = await fetch('./Contact.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.text();
            alert("Message sent!");
            e.target.reset();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return(
        <section className='contactBox'>
            <div className='contactInfo'>
                <h1>Contact Me</h1>
                <p>Send a message and i'll get back to you soon</p>
                <ul className='contactLink'>
                    <li className='contantLink'><a href="https://www.linkedin.com/in/paulius-pikelis-755a16381/">Linkedin</a></li>
                </ul>
            </div>

            <div className='formBox'>
                <p>Have something to discuss? Send me a message!</p>
                <form onSubmit={handleSubmit} method="POST" className="contactForm">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="message" placeholder="Your message" rows="5" required></textarea>
                    <div className='buttonBox'>
                        <button className='submitButton' type="submit">Sent message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}