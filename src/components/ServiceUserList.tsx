import React, { useState } from "react";
import { ServiceUser } from "../types/ServiceUser";

interface Props {
  users: ServiceUser[];
}

const ServiceUserList: React.FC<Props> = ({ users }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<ServiceUser | null>(null);
  const [updatedUser, setUpdatedUser] = useState<ServiceUser | null>(null);

  const handleEditClick = (user: ServiceUser) => {
    setSelectedUser(user);
    setUpdatedUser({ ...user }); // Create a copy of the user data for editing
    setIsEditModalOpen(true);
  };

  const handleProfileClick = (user: ServiceUser) => {
    setSelectedUser(user);
    setIsProfileModalOpen(true); // Open the profile modal
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (updatedUser) {
      setUpdatedUser({
        ...updatedUser,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSaveChanges = () => {
    if (updatedUser) {
      // Here, you can update the user in the state or make an API call to update the data
      console.log("Updated User: ", updatedUser);
      setIsEditModalOpen(false);
    }
  };

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
                <button
                  onClick={() => handleEditClick(user)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleProfileClick(user)}
                  className="px-3 py-1 bg-gray-500 text-white rounded-md"
                >
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
              <button
                onClick={() => handleEditClick(user)}
                className="flex-grow px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleProfileClick(user)}
                className="flex-grow px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit User Modal */}
      {isEditModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={updatedUser?.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="age">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={updatedUser?.age}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="careStatus"
                >
                  Care Status
                </label>
                <select
                  id="careStatus"
                  name="careStatus"
                  value={updatedUser?.careStatus}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="nextAppointment"
                >
                  Next Appointment
                </label>
                <input
                  type="datetime-local"
                  id="nextAppointment"
                  name="nextAppointment"
                  value={updatedUser?.nextAppointment}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-between space-x-2">
                <button
                  type="button"
                  onClick={handleSaveChanges}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Profile Modal */}
      {isProfileModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
            <div className="space-y-2">
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Age:</strong> {selectedUser.age}</p>
              <p><strong>Care Status:</strong> {selectedUser.careStatus}</p>
              <p><strong>Next Appointment:</strong> {new Date(selectedUser.nextAppointment).toLocaleString()}</p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsProfileModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceUserList;
