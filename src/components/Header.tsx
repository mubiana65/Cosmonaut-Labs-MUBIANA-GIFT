import React from "react";
import SearchBar from "./SearchBar";
import { ServiceUser } from "../types/ServiceUser";
import { serviceUsers } from "../mockData/serviceUsers";

const Header: React.FC = () => {
    const [filteredUsers, setFilteredUsers] = React.useState(serviceUsers);


  return (
    <header className="bg-black shadow-md fixed top-0 left-0 right-0 p-4 z-10 flex items-center justify-center flex-wrap sm:flex-nowrap">
      <h1 className="text-xl font-semibold w-full sm:w-auto  sm:text-left text-white">
        Service Users Dashboard
      </h1>
    
    </header>
  );
};

export default Header;
