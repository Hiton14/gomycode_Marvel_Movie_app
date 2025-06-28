import React from 'react';

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <input
        className="p-2 border rounded dark:bg-gray-800"
        type="text"
        placeholder="Search by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        className="p-2 border rounded dark:bg-gray-800"
        type="number"
        placeholder="Min rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;