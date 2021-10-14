import React from "react";
import Button from "./Button";
import "./VideoBrand.css";
export default function VideoBrand() {
  return (
    <>
      <div
        className="container-fluid clearfix"
        style={{ padding: 0, margin: 0 }}
      >
        <video width="100%" autoPlay={true} controls={false} loop={true} muted>
          <source
            src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Horizontal/Impossible%20is%20nothing%20-%20II/Messi/horizontal-concepts-fw21-IIN-sustain-mh-small-lionelmessi-v1-d.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="dfc clearfix"
          style={{
            position: "relative",
            zIndex: 100,
            marginTop: "-352px",
            marginLeft: "20px",
            padding: 0,
          }}
        >
          <div className="vb-title" style={{ marginLeft: "10px" }}>
            SEE POSSIBILITIES
          </div>
          <div style={{ marginLeft: "12px" }}>
            <br />
            <Button bg="#ffffff" color="#000000" value="Explore More " />
          </div>
        </div>
      </div>
    </>
  );
}
