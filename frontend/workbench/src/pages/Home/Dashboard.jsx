import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { CARD_BG } from "../../utils/data";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import SummaryCard from "../../Cards/SummaryCard";

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [sessions, setSessions] = useState([]);

  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    data: null,
  });

  const fetchAllSessions = async () => {};

  const deleteSession = async (sessionData) => {};

  useEffect(() => {
    fetchAllSessions();
  }, []);

  return (
    <div className="container mx-auto px-4 pt-4 pb-4">
      <div className="grid grid-cols-1 mdgrid-cols-3 gap-4 md:gap-7 pt-1 pb-6">
        <button
          className="h-12 mdh-12 flex items-center justify-center gap-3 bg-linear-to-br from-orange-50 to-orange-100 rounded-lg hover:bg-orange-200 transition-all duration-200 cursor-pointer"
          onClick={() => setOpenCreateModal(true)}
        >
          <LuPlus className="text-2xl text-white" />
          Add New
        </button>
      </div>
      <div className="grid grid-cols-1 mdgrid-cols-3 gap-4 md:gap-7 pt-1 pb-6">
        {sessions?.map((data, index) => (
          <SummaryCard
            key={data?._id}
            colors={CARD_BG[index % CARD_BG.length]}
            role={data?.role || ""}
            topicsToFocus={data?.topicsToFocus || ""}
            experience={data?.experience || ""}
            questions={data?.questions?.length || "-"}
            description={data?.description || ""}
            lastUpdated={
              data?.updatedAt
                ? moment(data?.updatedAt).format("DD-MMM-YYYY")
                : ""
            }
            onSelect={() => navigate(`/interview-prep/${data?._id}`)}
            onDelete={() => setOpenDeleteAlert({ open: true, data })}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
