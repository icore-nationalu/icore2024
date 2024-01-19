import { Link } from "react-router-dom";
import Icon from "./Icon";
import TestImage from "../assets/test-image.png";

const SpeakerListItem = ({ name, link, position, institution }) => {
  return (
    <div className="speaker-item">
      <div className="photo">
        <img src={TestImage} alt="" />
      </div>
      <div className="content">
        <div className="speaker-name">
          <Link to={link} target="_blank">
            {name}
          </Link>
          <Icon
            iconName="ExternalLink"
            stroke="#8693A0"
            className="icon"
            height="20px"
            width="20px"
          />
        </div>
        <p className="position">
          <span>{position}</span>, {institution}
        </p>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dignissimos est atque. Alias earum dolorum voluptates quos suscipit
          culpa autem tempora iste quam optio minus quaerat, magnam doloribus
          incidunt possimus repudiandae explicabo saepe quibusdam voluptas
          molestias. Saepe magni reiciendis dolor doloremque facilis illum,
          rerum modi accusantium ratione! Laudantium incidunt assumenda
          mollitia, minus saepe quos doloribus, dolorum deserunt odio officiis
          debitis amet illum quis, repudiandae ut minima dolorem explicabo
          similique soluta. Velit vel nulla corporis voluptatum cumque? Quaerat
          dolores iure fugit.
        </p>
      </div>
    </div>
  );
};
export default SpeakerListItem;
