export default function HeroSection() {
    return (

        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hello,
                        <br />I'm Lurda Kasilevičiūtė</p>
                    <h1 className="hero--section-tittle--color">
                        <span className="hero--section-title--color">Full-Stack 
                            <br />
                             Developer
                        </span>{" "}
                    </h1>

                    <p className="hero--section-description">
                        As a new developer, I'm passionate about creating user-friendly web experiences. While I have knowledge in both front-end and back-end development, my main interest lies in front-end work, where I can focus on crafting intuitive and visually appealing interfaces. I'm excited to continue learning and growing within programming and am currently seeking opportunities to deepen my expertise in front-end development.
                    </p>
                </div>
                <a href="https://www.linkedin.com/in/lurda-kasilevi%C4%8Di%C5%ABt%C4%97/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">Get In Touch</button></a>
            </div>
            <div className="hero--section-img">
                <img src="./img/profile_pic.jpg" alt="Profile Pic" />
            </div>
        </section>
    );
}