import React from "react";
import { ServiceUser } from "../types/ServiceUser";

interface Props {
  users: ServiceUser[];
}

const ServiceUserList: React.FC<Props> = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      {/* Table for larger screens */}
      <table className="hidden md:table w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Age</th>
            <th className="p-3">Care Status</th>
            <th className="p-3">Next Appointment</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.age}</td>
              <td
                className={`p-3 ${
                  user.careStatus === "Active"
                    ? "text-green-500"
                    : user.careStatus === "Inactive"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {user.careStatus}
              </td>
              <td className="p-3">
                {new Date(user.nextAppointment).toLocaleString()}
              </td>
              <td className="p-3 space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
                  Edit
                </button>
                <button className="px-3 py-1 bg-gray-500 text-white rounded-md">
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Card-based layout for mobile screens */}
      <div className="md:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 mb-4 bg-white shadow-md rounded-lg space-y-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <span
                className={`text-sm font-medium ${
                  user.careStatus === "Active"
                    ? "text-green-500"
                    : user.careStatus === "Inactive"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {user.careStatus}
              </span>
            </div>
            <p className="text-sm">
              <strong>Age:</strong> {user.age}
            </p>
            <p className="text-sm">
              <strong>Next Appointment:</strong>{" "}
              {new Date(user.nextAppointment).toLocaleString()}
            </p>
            <div className="flex space-x-2 mt-2">
              <button className="flex-grow px-4 py-2 bg-blue-500 text-white rounded-md">
                Edit
              </button>
              <button className="flex-grow px-4 py-2 bg-gray-500 text-white rounded-md">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceUserList;
