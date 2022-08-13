import { FC } from "react";
import "./Hero.scss";

// Images
import family from "../../assets/family.jpg";

export const Hero: FC = () => {
  return (
    <div className="Hero">
      <div className="Hero__main">
        <h1>Main Heading Here</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
          doloremque repudiandae aliquid saepe perferendis nihil praesentium,
          dolor illo reprehenderit, pariatur.
        </p>
        <div className="Hero__cta">
          <button>Call</button>
          <button>Email</button>
        </div>
      </div>
      <div className="Hero__img"></div>
      {/* <img src={family} alt="Family cooking" /> */}
    </div>
  );
};
