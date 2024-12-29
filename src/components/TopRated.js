import { useState } from "react";

export const TopRated = ({ filterTopRated }) => {
  return (
    <div className="top-rated">
      <button className="filter-btn" onClick={filterTopRated}>
        Top Rated Restaurants
      </button>
    </div>
  );
};
