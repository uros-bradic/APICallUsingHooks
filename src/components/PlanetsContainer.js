import React from "react";
import { PlanetPanel } from "./PlanetPanel";

export const PlanetsContainer = function PlanetsContainer(props) {
  const {
    planetList,
    isLoading,
    onNextClick,
    hasNext,
    onPreviousClick,
    hasPrevious,
    planet,
    onPlanetClick
  } = props;

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="loader">Loading results</div>
      ) : (
        <PlanetPanel
          planet={planet}
          planetList={planetList}
          hasNext={hasNext}
          onNextClick={onNextClick}
          hasPrevious={hasPrevious}
          onPreviousClick={onPreviousClick}
          onPlanetClick={onPlanetClick}
        />
      )}
    </React.Fragment>
  );
};
