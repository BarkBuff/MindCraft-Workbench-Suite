import React from "react";
import { LuPlus } from "react-icons/lu";
import { CARD_BG } from "../../utils/data";
import toast from "react-hot-toast";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Interview Prep AI
        </h2>
        <p className="text-gray-600">
          Create a new session or continue with your existing ones
        </p>
      </div>

      {/* Create New Session Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div
          className="p-6 rounded-lg border-2 border-dashed border-orange-300 hover:border-orange-500 cursor-pointer transition-all duration-200 flex items-center justify-center min-h-[200px] hover:bg-orange-50"
          onClick={() => toast.success("Create new session")}
        >
          <div className="text-center">
            <LuPlus className="text-4xl text-orange-500 mx-auto mb-2" />
            <p className="text-gray-700 font-semibold">Create New Session</p>
          </div>
        </div>

        {/* Sample Session Cards */}
        {CARD_BG.slice(0, 2).map((card) => (
          <div
            key={card.id}
            style={{ backgroundImage: card.bgColor }}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Interview Session {card.id}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Continue preparing for your interview
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">5 questions</span>
              <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm">
                Continue →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
