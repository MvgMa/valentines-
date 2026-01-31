import Typewriter from "./typewriter.js";
export default function SectionOne() {
  return (
    <div className="section-content" style={{ justifyContent: "center" }}>
      <h1> 
         <Typewriter text="Hello Aaliyah :>" speed={50} />
      </h1>
      <p style={{fontSize:"2.5rem"}}><Typewriter text=" I made this for you to ask you to be my Valentine!" speed={50} delay={2000}></Typewriter> <br/>
      <Typewriter text=" However, first I need to tell you why that would be a good idea :P" speed={50} delay={5200}></Typewriter>
      </p>
    </div>
  );
}
