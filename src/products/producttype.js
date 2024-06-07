import React from "react";
import { List, Card } from "antd";
import "./product.css";
import { Link } from "react-router-dom";
const Producttype = () => {
  const data = [
    {
      id: 1,
      title: "Mobiles",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Wireless/Samsung/Tiles/23rdFeb/01_1.jpg",
      link: "/products/mobiles",
    },
    {
      id: 2,
      title: "Electronics",
      image:
        "https://m.media-amazon.com/images/G/31/img22/pcacc/bau/zAmazon-Banner-970x900._SS900_QL85_FMpng_.png",
      link: "/products/electronics",
    },
    {
      id: 3,
      title: "Laptops",
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Laptops/May/Art/24/GW/MSO/Creatives/Shop/by/Brand/PC_CC_758x6082x._SY608_CB559787247_.jpg",
      link: "/products/laptops",
    },
    {
      id: 4,
      title: "Telivisions",
      image: "https://m.media-amazon.com/images/I/71G3w6wIhZL.AC_SX500.jpg",
      link: "/products/televisions",
    },
  ];

  return (
    <div className="type-container">
      {data.map((item) => (
        <List.Item key={item.id}>
          <Link to={item.link}style={{ textDecoration: 'none' }}>
            <Card
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  style={{ height: 200 }}
                />
              }
            >
              <p className="item_title">{item.title}</p>
            </Card>
          </Link>
        </List.Item>
      ))}
    </div>
  );
};

export default Producttype;
