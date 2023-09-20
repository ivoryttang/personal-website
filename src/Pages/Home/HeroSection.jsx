import ProfileImage from './img/profile.JPEG';
export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Ivory Tang</span>{" "}
            </h1>
            <p className="section--title"><b>Current:</b> full-time founder & creator</p>
            <p className="section--title"><b>Prev:</b> math/computer science and business major @ <a href="https://rss2022-13.github.io/website/">mit</a>, consultant @ <a href="https://www.bcg.com/">bcg</a>, co-founder @ parse (backed by <a href="">z fellows</a>, <a href="https://sandbox.mit.edu/">sandbox</a>, and <a href="prod.so">prod</a>), swe @ <a href="https://www.hubspot.com/">hubspot</a>, robotics research @ <a href="https://www.csail.mit.edu/node/2873">csail</a>, algorithms research @ <a href="https://www.media.mit.edu/">media lab</a>, program manager @ <a href="https://www.inspiritai.com/">inspirit ai</a>, data scientist/product @ <a href="https://climate.ai/">climateai</a>, quantum physics research @ <a href="http://web.mit.edu/fbml/">mit francis bitter magnet lab</a> </p>
            <p className="section--title">Palo alto-native, self-taught <a href="https://github.com/ivoryttang">engineer</a>, <a href="https://open.spotify.com/playlist/6XR5Eahiip3b8qmZuBxFSd?si=7cc4a75ee3514d56">marathon runner</a>, <a href="https://www.youtube.com/watch?v=R-HvcomK3DY&pp=ygUKaXZvcnkgdGFuZw%3D%3D">musician</a>, composer, writer, traveler</p>
            <p className="section--title">
            Writing & blogging @ &nbsp;
            <a href="https://www.instagram.com/ivoryttang/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" style={{ margin: '0.5px', color: 'purple' }}></i>
            </a>&nbsp;
            <a href="https://twitter.com/ivory_tang" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" style={{ margin: '0.5x', color: 'blue' }}></i>
            </a>&nbsp;
            <a href="https://www.linkedin.com/in/ivory-tang-83854918b/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" style={{ margin: '0.3px', color: 'dark-blue' }}></i>
            </a>&nbsp;
            <a href="https://medium.com/@ivoryttang" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-medium" style={{ margin: '0.5px', color: 'black' }}></i>
            </a>
          </p>
            <p className="hero--section-description">
              Reach out to me at <a href="mailto:ivory@mit.edu">ivory [at] mit.edu</a> or find a time on my <a href="https://calendly.com/ivoryttang">calendar</a>. Happy to meet or grab coffee ☕ 
            </p>
          </div>
        </div>
        <div className="hero--section--img" style={{ marginRight: '100px' }}>
            <img src={ProfileImage} alt="Ivory Tang" style={{borderRadius: '30%'}}/>
          </div>
      </section>
    );
  }
  