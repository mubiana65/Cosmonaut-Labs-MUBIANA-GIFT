import React from "react";
import { ServiceUser } from "../types/ServiceUser";

interface Props {
  users: ServiceUser[];
}

const SummaryCards: React.FC<Props> = ({ users }) => {
  const totalActive = users.filter((user) => user.careStatus === "Active").length;
  const appointmentsToday = users.filter((user) => {
    const today = new Date().toDateString();
    return new Date(user.nextAppointment).toDateString() === today;
  }).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-center">
      <div className="p-4 bg-green-100 text-green-700 rounded-lg shadow">
        <h3 className="text-lg sm:text-xl font-bold">Total Active</h3>
        <p className="text-xl sm:text-2xl">{totalActive}</p>
      </div>
      <div className="p-4 bg-blue-100 text-blue-700 rounded-lg shadow">
        <h3 className="text-lg sm:text-xl font-bold">Appointments Today</h3>
        <p className="text-xl sm:text-2xl">{appointmentsToday}</p>
      </div>
    </div>
  );
};

export default SummaryCards;
