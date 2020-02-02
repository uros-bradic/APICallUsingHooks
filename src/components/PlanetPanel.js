import React, { useState } from "react";

const Next = function({ onNextClick, disabled }) {
  return (
    <button className="button" disabled={disabled} onClick={onNextClick}>
      Next
    </button>
  );
};

const Previous = function({ onPreviousClick, disabled }) {
  return (
    <button className="button" disabled={disabled} onClick={onPreviousClick}>
      Previous
    </button>
  );
};

const PlanetList = function({
  planetNames,
  hasPrevious,
  onPreviousClick,
  hasNext,
  onNextClick
}) {
  return (
    <div>
      <h3>This is a list of planets</h3>
      <p>Click on a planet to see planet details</p>
      <Previous disabled={!hasPrevious} onPreviousClick={onPreviousClick} />
      <Next disabled={!hasNext} onNextClick={onNextClick} />
      <ul>{planetNames}</ul>
    </div>
  );
};

const Planet = function({ planetDetails, onBackClick }) {
  return (
    <div>
      <h3>Planet {planetDetails[0].name}</h3>
      <div>
        <p>
          Back to
          <button className="button-link" onClick={onBackClick}>
            planet list
          </button>
        </p>
      </div>
      <div className="planet">
        <pre>{JSON.stringify(planetDetails[0], null, 2)}</pre>
      </div>
    </div>
  );
};

export const PlanetPanel = function PlanetPanel(props) {
  const {
    planetList,
    onNextClick,
    hasNext,
    onPreviousClick,
    hasPrevious,
    planet,
    onPlanetClick
  } = props;

  const [planetListView, setPlanetListView] = useState(true);

  const handleClick = function(e) {
    setPlanetListView(false);
    onPlanetClick(e);
  };

  const handleBackClick = function(e) {
    e.preventDefault();
    setPlanetListView(true);
  };

  const planetNames = planetList.results
    ? planetList.results.map(result => (
        <li key={result.name} value={result.name}>
          <button
            className="button-link"
            onClick={handleClick}
            value={result.name}
          >
            {result.name}
          </button>
        </li>
      ))
    : null;

  const planetDetails = planetList.results
    ? planetList.results.filter(pl => pl.name === planet)
    : null;

  return (
    <React.Fragment>
      {planetListView ? (
        <PlanetList
          planetNames={planetNames}
          hasPrevious={hasPrevious}
          onPreviousClick={onPreviousClick}
          hasNext={hasNext}
          onNextClick={onNextClick}
        />
      ) : (
        <Planet planetDetails={planetDetails} onBackClick={handleBackClick} />
      )}
    </React.Fragment>
  );
};
