import { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import ColorGenerator from "./components/color-generator/ColorGenerator";
import StarsRating from "./components/Stars-Rating/StarsRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreButton from "./components/Load-More-Button/LoadMoreButton";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";
import QRCodeGenerator from "./components/QRCodeGenerator/QRCodeGenerator";
import DarckLightMode from "./components/Darck-Light-Mode/DarckLightMode";
import ScrollIndicator from "./components/Scroll-Indicator/ScrollIndicator";
import Tabs from "./components/Tabs/Tabs";
import ModalPopup from "./components/Modal-Popup/Modal-Popup";
import ProfileFinder from "./components/Github-Profile-Finder/Profile-Finder";
import SearchAutocomplete from "./components/Search-Autocomplete/Search-Autocomplete";
import TicTacToe from "./components/Tic-Tac-Toe/Tic-Tac-Toe";
import FeatureFlagImplementation from "./components/Feature-Flag-Implementation/Feature-Flag-Implementation";
import FeatureFlagsGlobalState from "./components/Feature-Flag-Implementation/context";
import UseFetchHookTest from "./components/UseFetch-Coctum-Hook/UseFetch-Hook-Test";
import UseOutsideClickHookTest from "./components/UseOutsideClick-Costum-Hook/useOutsideClickHook-Test";
import UseWindowResizeHookTest from "./components/useWindowResize-useResponsive-hook/UseWindowResize-Hook-Test";
import ScrollToTopBottom from "./components/Scroll-To-Top-Bottom/Scroll-To-Top-Bottom";
import ScrollToParticularSection from "./components/Scroll-To-Particular-Section/Scroll-To-Particular-Section";

function App() {
  const [toggleDarck, setToggleDarck] = useState(false);

  return (
    <div className={`app px-3 ${toggleDarck ? "dark" : ""}`}>
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random Color Generator */}
      {/* <ColorGenerator /> */}

      {/* Stars Rating */}
      {/* <StarsRating numStars={10} /> */}

      {/* Image Slider */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}

      {/* Load More Button */}
      {/* <LoadMoreButton /> */}

      {/* Tree View / Menu Ui / Recrsive Navigation */}
      {/* <TreeView  menus={menus}/> */}

      {/* QR code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Darck Light Mode */}
      {/* <DarckLightMode toggleDarck={toggleDarck} setToggleDarck={setToggleDarck} /> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator /> */}

      {/* Tabs */}
      {/* <Tabs /> */}

      {/* Modal Popup */}
      {/* <ModalPopup /> */}

      {/* GitHub Profile Finder */}
      {/* <ProfileFinder /> */}

      {/* Search Atutocomplete with API impelemented */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe game */}
      {/* <TicTacToe /> */}

      {/* Feature Flags Implementation */}
      {/* <FeatureFlagsGlobalState>
        <FeatureFlagImplementation />
      </FeatureFlagsGlobalState> */}

      {/* useFetch costum Hook */}
      {/* <UseFetchHookTest /> */}

      {/* useOutsideClick costum hook */}
      {/* <UseOutsideClickHookTest /> */}

      {/* useWindowResize / useResponsive costum hook */}
      {/* <UseWindowResizeHookTest /> */}

      {/* scroll to top and bottom */}
      {/* <ScrollToTopBottom /> */}

      {/* scroll to particular section */}
      <ScrollToParticularSection />
    </div>
  );
}

export default App;
