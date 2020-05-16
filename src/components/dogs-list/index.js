import React from "react";
import DogsListItem from "./dog";
import "./styles.css";

function DogsList(props) {
  function selectItem(item) {
    props.onSelectedItem(item);
  }

  return (
    <ul className="card-list">
      {props.data.map((item) => {
        return <DogsListItem key={item.id} item={item} onSelect={selectItem} />;
      })}
    </ul>
  );
}

export default DogsList;
