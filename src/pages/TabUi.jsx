import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function TabUi() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Description" title="Description">
        <div>
          Description Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Odit laboriosam illum, ex, explicabo excepturi id, vel soluta eius
          velit rerum quidem! Repudiandae necessitatibus enim, tempore
          consequatur velit incidunt itaque consequuntur? Ut tenetur
          consequuntur perferendis dolores ducimus, asperiores quae beatae
          molestiae ullam sequi dolor, et cumque! Nobis ducimus voluptatem ipsa
          maxime.
        </div>
      </Tab>
      <Tab eventKey="Aditional" title="Aditional information">
        <div>
          Aditional Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eos alias cum, sequi cumque cupiditate distinctio necessitatibus
          dolore fuga voluptas illum fugit corporis sint. Dolorem excepturi
          tempore voluptatem esse, corporis recusandae illum, iure odio vero
          laudantium officia in sed dicta dolores cumque et tempora alias
          corrupti cum animi amet consectetur dolor.
        </div>
      </Tab>
      <Tab eventKey="Reviews" title="Reviews">
        <div>
          Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          dolore dolor maiores deserunt totam, delectus cumque? Magnam,
          praesentium! Error provident nostrum iste deserunt nulla consequuntur
          necessitatibus tempora nihil voluptatum. Amet praesentium in quod
          animi fugit explicabo magni, eaque, soluta repellat maxime alias.
          Cupiditate at unde voluptas eaque corrupti assumenda consequatur.
        </div>
      </Tab>
    </Tabs>
  );
}

export default TabUi;
