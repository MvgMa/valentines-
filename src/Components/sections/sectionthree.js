import Stack from './Stack/stack.js'
import Typewriter from "./typewriter.js";

import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image5.jpg";
import img6 from "./images/image6.jpg";

export default function SectionThree() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="section-content section-three">
      <div className="pictures-container">
        <div style={{ width: 208, height: 408 }}>
          <Stack
            randomRotation={false}
            sensitivity={200}
            sendToBackOnClick={true}
            cards={images.map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt={`card-${i + 1}`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            ))}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
        />
        </div>
      </div>
      <div className="section-three-text">
        <h1><Typewriter text="We Can Make Even More Memories!" speed={50} delay={1500}></Typewriter></h1>
        <p style={{fontSize:"2rem"}}><Typewriter text="In only a bit over 3 months of us dating we have already made so many memories, and I cannot wait to make even more! I am so grateful we can capture these moments, and I would like to take even more of them with you. <3" speed={50} delay={3500}></Typewriter></p>
      </div>
    </div>
  );
}
