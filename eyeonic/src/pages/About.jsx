import './About.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Eyeonic</h1>
            </div>
            <div className="about-content">
                <div className="about-content-pic">
                    <img src={process.env.PUBLIC_URL + '/images/about1.jpg'} alt="" />
                </div>
                <div className="about-content-text">
                    Cartier is a French luxury goods conglomerate which designs, manufactures, distributes, and sells jewelry
                    and watches. It was founded in Paris, France in 1847 by Louis-François Cartier. Cartier is known for its
                    jewelry and wristwatches, including the “Bestiary” (best illustrated by the Panthère brooch of the 1940s
                    created for Wallis Simpson), the diamond necklace created for Bhupinder Singh the Maharaja of Patiala and
                    the Santos wristwatch of 1904. Cartier has a long history of sales to royalty and celebrities.
                </div>
                <div className="about-content-pic">
                    <img src={process.env.PUBLIC_URL + '/images/about1.jpg'} alt='' />
                </div>
                <div className="about-content-text">
                    Montblanc is a German company that manufactures and distributes luxury products such as pens, watches, bags
                    and other leather products. The company was founded in Berlin in 1906 and is currently headquartered in Hamburg1.
                    Montblanc is well known for its high-end pen products2. In addition, the company designs and distributes handbags,
                    small leather products and watches
                </div>
            </div>
        </div>
    );
}

export default About;