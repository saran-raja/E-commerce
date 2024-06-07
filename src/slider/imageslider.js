import React from "react";
import { Carousel, Card } from "antd";
import slideimg1 from "./slideimg1.png";
import slideimg2 from "./slideimg2.png";
import slideimg3 from "./slideimg3.png";
const { Meta } = Card;
const contentStyle = {
  width: "100%",
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
function Imgslider() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img src={slideimg1} style={contentStyle}></img>
        </div>
        <div>
          <img src={slideimg2} style={contentStyle}></img>
        </div>
        <div>
          <img src={slideimg3} style={contentStyle}></img>
        </div>
      </Carousel>
    </div>
  );
}
export default Imgslider;
