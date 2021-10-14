import React from "react";
import "./WhoYouShoppingFor.css";
import ImageWYS from "./ImageWYS";
export default function WhoYouShoppingFor() {
  return (
    <div>
      <div className="dfc">
        <div className="wys-title">WHO ARE YOU SHOPPING FOR</div>
        <div>
          <div className="dfr">
            <div>
              <ImageWYS
                value="Men"
                source="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/evergreen-homepage-gender-navigation-men-dt_tcm209-761437.jpg"
              />
            </div>
            <div>
              <ImageWYS
                value="Women"
                source="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/evergreen-homepage-gender-navigation-women-dt_tcm209-761431.jpg"
              />
            </div>
            <div>
              <ImageWYS
                value="Kids"
                source="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/evergreen-homepage-gender-navigation-kids-dt_tcm209-761436.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
