import { useState } from "react";
import Typewriter from "./typewriter.js";

export default function SectionFour() {
  const [showButton, setShowButton] = useState(false);
  const [showMap, setShowMap] = useState(false);

  if (showMap) {
    return (
      <div className="section-content section-four" style={{ justifyContent: "center" }}>
        <h1><Typewriter text="Yayy, I cannot wait for it!" speed={50} /></h1>

        <iframe
          title="Valentine Map"
          width="900"
          height="350"
          style={{ border: 0, marginTop: "1rem", borderRadius: "12px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/d/embed?mid=1AZeJd5O_YCYNkd5VkdUe61QiOdePAPY&ehbc=2E312F"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="section-content section-four" style={{ justifyContent: "center" }}>
      <h1>
        <Typewriter text="So After Hearing That.." speed={50} />
      </h1>

      <p style={{ fontSize: "2.5rem" }}>
        <Typewriter
          text=" Will you be my Valentine?"
          speed={50}
          delay={2000}
          onComplete={() => setShowButton(true)}
        />
      </p>

      {showButton && (
        <button
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1.5rem",
            borderRadius: "12px",
            background: "#ff6b81",
            color: "white",
            border: "none",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onClick={() => setShowMap(true)}
        >
          Yes ❤️
        </button>
      )}
    </div>
  );
}
