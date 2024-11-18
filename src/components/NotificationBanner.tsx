import React from "react";

const NotificationBanner: React.FC = () => {
  return (
    <div className="p-4 bg-yellow-200 text-yellow-800 rounded-md shadow mb-4">
      <p className="text-lg">
        ⚠️ Some users require urgent attention. Check their profiles for updates.
      </p>
    </div>
  );
};

export default NotificationBanner;
