import React, { useRef, useState } from "react";
import "./../headerStyle.css";
import UseOutsideClickHook from "./UseOutsideClickHook";

const UseOutsideClickHookTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClickHook(ref, () => setShowContent(false));
  return (
    <div>
      <h1 className="title">useOutsideClick Hook Test</h1>

      {showContent ? (
        <section
          ref={ref}
          className="bg-green-200 border-green-600 text-green-600 border-l-4 p-4"
        >
          <h1 className="font-bold">Random Title </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut
            incidunt dolor, laudantium ipsa inventore accusantium .<br/> click
            outside the content...
          </p>
        </section>
      ) : (
        <button
          type="button"
          className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 hover:border-blue-500 bg-blue-500 hover:bg-blue-400"
          onClick={() => setShowContent(true)}
        >
          Show Content
        </button>
      )}
    </div>
  );
};

export default UseOutsideClickHookTest;
