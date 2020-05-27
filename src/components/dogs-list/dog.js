// dog list item

import React from "react";

function DogsListItem(props) {
  function handleClick() {
    props.onSelect(props.item);
  }

  return (
    <li key={props.item.id} className="card" onClick={handleClick}>
      <div className="card-content">
        <div className="card-avatar">
          <img src={props.item.avatar} alt={`${props.item.dogsName}`} />
        </div>

        <div className="card-personal-data">
          <p className="card-name">{props.item.dogsName}</p>
          <span className="card-name">{props.item.cityArea}</span>
        </div>
      </div>
    </li>
  );
}

export default DogsListItem;
