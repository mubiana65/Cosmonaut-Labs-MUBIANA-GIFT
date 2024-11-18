import React from "react";
import { ServiceUser } from "../types/ServiceUser";

interface Props {
  users: ServiceUser[];
  setFilteredUsers: (users: ServiceUser[]) => void;
}

const SearchBar: React.FC<Props> = ({ users, setFilteredUsers }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  return (
    <input
      type="text"
      className="w-full p-3 border rounded-lg shadow-sm"
      placeholder="Search by name or ID..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
