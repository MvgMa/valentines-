import Typewriter from "./typewriter.js";
export default function SectionTwo() {
  return (
    <div className="section-content section-two">
      <div className ="heart-container">
        <div id="ui">
          {Array.from({ length: 100 }).map((_, i) => (
              <div className="love" style={{ "--i": i + 1 }} key={i}>
                <div className="love_horizontal">
                    <div className="love_vertical">
                      <div className="love_word">I Love You</div>
                    </div>  
                </div>
          
            </div> 
          ))}
        </div>
      </div>
      <div className="section-two-text">
        <h1><Typewriter text="I Love YOU!" speed={50} delay={1500}></Typewriter></h1>
        <p style={{fontSize:"2rem"}}><Typewriter text="I cherish having you in my life so I want to give you my best. I will always treat you like a princess, because you deserve it, you absolutely make my heart sing whenever I think about you. <3" speed={50} delay={2500}></Typewriter></p>
        
      </div>
    </div>
  );
}
