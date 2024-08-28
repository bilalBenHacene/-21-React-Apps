import React, { useState } from "react";
import data from "./data";
import Item from "./Item";
import "./Accordion.css";
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [selectedList,setSelectedList]=useState([]);

  const switchMultiSelection=()=>{
    setMultiSelection(!multiSelection);
  }
  const handeleSelection = (id) => {
    id === selected ? setSelected(null) : setSelected(id);
  };
  const handeleMultiSelection = (id) => {
    let curruntArray = [...selectedList];
    const index = curruntArray.indexOf(id);
    index === -1 ? curruntArray.push(id) : curruntArray.splice(index, 1);
    setSelectedList(curruntArray);
  };
  return (
    <section className="accordion">
      <h1 className="font-bold text-xl">Accordion</h1>
      <button onClick={switchMultiSelection} className={multiSelection? "bg-red-500":"bg-green-500"}>{multiSelection?"Disable":"Enable"} Multi Selection</button>
      {data && data.length > 1 ? (
        data.map((item) => (
          <Item
            key={item.id}
            item={item}
            selected={selected}
            setSelectedList={setSelectedList}
            multiSelection={multiSelection}
            handeleMultiSelection={handeleMultiSelection}
            handeleSelection={handeleSelection}
          />
        ))
      ) : (
        <div className="text-red-100 capitalize">Data not found</div>
      )}
    </section>
  );
};

export default Accordion;
