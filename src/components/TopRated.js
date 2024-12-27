import { useState } from "react";
import { apiData } from "../resturant_db/res";

export const TopRated = ({ filterTopRated }) => {
  return (
    <div className="top-rated">
      <button className="filter-btn" onClick={filterTopRated}>
        Top Rated Restaurants
      </button>
    </div>
  );
};
