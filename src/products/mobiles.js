import React from "react";

function Mobiles(){
    return (
        <div>
          <List
            className="products"
            grid={{ gutter: 16, column: 5 }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Link to={item.link}>
                  <Card
                    cover={
                      <img
                        alt={item.title}
                        src={item.image}
                        style={{ height: 200 }}
                      />
                    }
                  >
                    <p>{item.title}</p>
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </div>
      );
}
export default Mobiles