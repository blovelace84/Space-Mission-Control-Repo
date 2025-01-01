import React from 'react';
import './MissionFilter.css';

const MissionFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="mission-filter">
      <label htmlFor="filter">Filter by Status: </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Scheduled">Scheduled</option>
        <option value="Launched">Launched</option>
        <option value="Completed">Completed</option>
        <option value="Aborted">Aborted</option>
      </select>
    </div>
  );
};

export default MissionFilter;
