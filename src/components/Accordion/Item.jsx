import React from "react";
import "./Accordion.css";
const Item = ({
  item,
  selected,
  multiSelection,
  selectedList,
  handeleMultiSelection,
  handeleSelection
}) => {
  // const handeleSelection = (id) => {
  //   id === selected ? setSelected(null) : setSelected(id);
  // };
  // const handeleMultiSelection = (id) => {
  //   let curruntArray = [...selectedList];
  //   const index = curruntArray.indexOf(id);
  //   index === -1 ? curruntArray.push(id) : curruntArray.splice(index, 1);
  //   console.log(curruntArray);
  //   setSelectedList(curruntArray);
  // };
  return (
    <div className="accordion-item">
      <h3
        onClick={
          multiSelection
            ? () => handeleMultiSelection(item.id)
            : () => handeleSelection(item.id)
        }
      >
        <span>{item.question}</span>
        <span>+</span>
      </h3>
      {multiSelection
        ? selectedList.indexOf(item.id) !== -1 && <p>{item.answer}</p>
        : selected === item.id && <p>{item.answer}</p>}
    </div>
  );
};

export default Item;
