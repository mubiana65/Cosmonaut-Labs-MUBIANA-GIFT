import React from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import ServiceUserList from "./ServiceUserList";
import SummaryCards from "./SummaryCards";
import NotificationBanner from "./NotificationBanner";
import { serviceUsers } from "../mockData/serviceUsers";
import Header from "./Header";

const Dashboard: React.FC = () => {
  const [filteredUsers, setFilteredUsers] = React.useState(serviceUsers);

  return (
    <div className="p-4 md:p-8 space-y-6">
        <Header/>
        <br />
        <SearchBar users={serviceUsers} setFilteredUsers={setFilteredUsers} />
      <SummaryCards users={serviceUsers} />
      <Filters users={serviceUsers} setFilteredUsers={setFilteredUsers} />
      <ServiceUserList users={filteredUsers} />
    </div>
  );
};

export default Dashboard;
