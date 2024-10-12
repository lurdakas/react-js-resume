import data from "../../data/index.json";

export default function MyPortfolio(){
    return <section className="portfolio--section" id="MyPortfolio">
<div className="portfolio--container-box">
<div className="portfolio--container">
<p className="sub--title">Recent Projects</p>
<h2 className="section--heading"> My Portfolio</h2>
</div>
<div>
    <a href="https://github.com/lurdakas" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-github">
            <img 
                src="./img/github.webp" 
                alt="GitHub" 
                style={{ width: '20px', marginRight: '8px' }}
            />
            Visit My GitHub
        </button>
    </a>
</div>

</div>
    </section>
}