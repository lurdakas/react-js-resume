export default function HeroSection(){
    return (

        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hello, I'm Lurda </p>
                    <h1 className="hero--section-tittle--color">
                        <span className="hero--section-title--color">Full Stack </span>{" "}
                        <br />
                        Developer

                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        <br />  Quo, laborum? Debitis, nihil voluptatum.

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