import React from "react";
import "./WhatHot.css";
import WhatHotCard from "./WhatHotCard";
export default function WhatHot() {
  return (
    <div>
      <div className="dfc">
        <div className="wh-title">WHAT'S HOT</div>
        <div>
          <div className="dfr">
            <div>
              <WhatHotCard />
            </div>
            <div>
              <WhatHotCard />
            </div>
            <div>
              <WhatHotCard />
            </div>
            <div>
              <WhatHotCard />
            </div>
            <div>
              <WhatHotCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
