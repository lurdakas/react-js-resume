export default function HeroSection(){
    return (

        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hello, 
                        <br/>I'm Lurda Kasilevičiūtė</p>
                    <h1 className="hero--section-tittle--color">
                        <span className="hero--section-title--color">Full-Stack 
                        <br />
                        Developer
                        </span>{" "}
                    </h1>

                    <p className="hero--section-description">
                        As a new developer, I have experience working across both front-end and back-end development. 
                        
                        <br /> My front-end expertise includes HTML, CSS, JavaScript, and popular libraries/frameworks like React.

                        <br /> On the back-end, I have a solid understanding of JAVA, Node.js and databases(MongoDB, MySQL), giving me a well-rounded skill set. I'm eager to apply my skills in a dynamic team environment where I can continue to grow.

                        <br /> Currently, I'm actively seeking job opportunities to further improve my knowledge in frontend development.

                    </p>

                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section-img">
                <img src="./img/Profile.jpg" alt="Profile Pic" />
            </div>
        </section>
    );
}