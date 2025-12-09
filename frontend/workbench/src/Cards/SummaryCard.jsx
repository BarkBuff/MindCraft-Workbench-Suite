import React from "react";

const SummaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-200"
      onClick={onSelect}
    >
      <div
        className="p-6 rounded-lg"
        style={{
          background: colors.bgColor,
        }}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="bg-white bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
            GU
          </div>
          <button
            className="px-3 py-1 bg-red-100 text-red-600 rounded-md text-xs font-medium hover:bg-red-200 transition"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            delete
          </button>
        </div>

        {/* Title and Skills */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-1">{role}</h2>
          <p className="text-gray-600 text-sm">
            {topicsToFocus}
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-2 mb-4 bg-white bg-opacity-50 p-3 rounded">
          <div className="text-sm text-gray-700">
            Experience: {experience} {experience == 1 ? "Year" : "Years"}
          </div>

          <div className="text-sm text-gray-700">
            {questions} Q&A
          </div>

          <div className="text-sm text-gray-700">
            Last Updated: {lastUpdated}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
