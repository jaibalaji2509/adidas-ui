import React from "react";

export default function Footer() {
  return (
    <div
      className="container-fluid"
      style={{
        padding: "50px",
        backgroundColor: "#363739",
        color: "#ffffff",
        marginTop: "20px",
      }}
    >
      <div className="container">
        <div className="dfr">
          <div style={{ marginRight: "600px" }}>
            <div className="dfc">
              <div style={{ marginBottom: "30px" }}>India</div>
              <div>©2021 adidas India Marketing Pvt. Ltd</div>
            </div>
          </div>
          <div>
            <div>Privacy Policy | Terms and Conditions | Cookies</div>
          </div>
        </div>
      </div>
    </div>
  );
}
