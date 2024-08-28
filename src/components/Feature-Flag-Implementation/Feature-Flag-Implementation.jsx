import React, { useContext } from "react";
import "./../headerStyle.css";
import Accordion from "../Accordion/Accordion";
import ColorGenerator from "../color-generator/ColorGenerator";
import LoadMoreButton from "../Load-More-Button/LoadMoreButton";
import { FeatureFlagsContext } from "./context";
import TicTacToe from "../Tic-Tac-Toe/Tic-Tac-Toe";
import ProfileFinder from "../Github-Profile-Finder/Profile-Finder";
const FeatureFlagImplementation = () => {
  const { isLoading, eanbledFeatures } = useContext(FeatureFlagsContext);
  const componentToRender = [
    {
      key: "showProfileFinder",
      component: <ProfileFinder />,
    },
    {
      key: "showAccordion",
      component: <Accordion />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showColorGenerator",
      component: <ColorGenerator />,
    },
    {
      key: "showLoadMoreButton",
      component: <LoadMoreButton />,
    },
  ];
  return (
    <div className="feature-flag-implementation">
      <h1 className="title">Feature Flag Implementation</h1>
      {isLoading ? (
        <p> Loading Data ...</p>
      ) : (
        componentToRender.map((componentItem, index) =>
          componentItem.key ? componentItem.component : null
        )
      )}
    </div>
  );
};

export default FeatureFlagImplementation;
