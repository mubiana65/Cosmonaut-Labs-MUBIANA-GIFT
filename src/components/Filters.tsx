import React, { useState } from "react";
import { ServiceUser } from "../types/ServiceUser";

interface Props {
  users: ServiceUser[];
  setFilteredUsers: (users: ServiceUser[]) => void;
}

const Filters: React.FC<Props> = ({ users, setFilteredUsers }) => {
  const [careStatus, setCareStatus] = useState("");
  const [ageRange, setAgeRange] = useState<[number, number] | null>(null);

  const handleFilter = () => {
    let filtered = users;

    if (careStatus) {
      filtered = filtered.filter((user) => user.careStatus === careStatus);
    }

    if (ageRange) {
      filtered = filtered.filter(
        (user) => user.age >= ageRange[0] && user.age <= ageRange[1]
      );
    }

    setFilteredUsers(filtered);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white shadow rounded-md">
      <select
        value={careStatus}
        onChange={(e) => setCareStatus(e.target.value)}
        className="w-full sm:w-auto p-2 border rounded"
      >
        <option value="">All Statuses</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="On Hold">On Hold</option>
      </select>
      <input
        type="number"
        placeholder="Min Age"
        onChange={(e) =>
          setAgeRange([Number(e.target.value), ageRange?.[1] ?? 100])
        }
        className="w-full sm:w-auto p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Max Age"
        onChange={(e) =>
          setAgeRange([ageRange?.[0] ?? 0, Number(e.target.value)])
        }
        className="w-full sm:w-auto p-2 border rounded"
      />
      <button
        onClick={handleFilter}
        className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
