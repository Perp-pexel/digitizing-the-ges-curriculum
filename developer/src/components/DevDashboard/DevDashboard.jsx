import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Use Routes and Route for nested routing
import Sidebar from './Sidebar';  // Import Sidebar component
import DeveloperHome from './DeveloperHome';
import Settings from './Settings';
import AddedAPI from './AddedAPIs';
import APIDocumentation from './APIDocumentation';
import APIUsageAnalytics from './APIUsageAnalytics';
import APIKeysManagement from './APIKeysManagement';
import SupportCommunity from './SupportCommunity';
import Notifications from './Notifications';


const DevDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-4/5 p-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">Welcome to the Developer's Dashboard</h1>
        <p className="text-lg text-gray-700">This is where you can manage your APIs, view usage analytics, and adjust your settings.</p>

        {/* Nested routes */}
        <Routes>
          <Route path="/" element={<DeveloperHome/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/added-apis" element={<AddedAPI/>} />
          <Route path="/api-documentation" element={<APIDocumentation/>} />
          <Route path="/api-usage-analytics" element={<APIUsageAnalytics/>} />
          <Route path="/api-keys-management" element={<APIKeysManagement/>} />
          <Route path="/support-community" element={<SupportCommunity/>} />
          <Route path="/notifications" element={<Notifications/>} />
        </Routes>
      </div>
    </div>
  );
};

export default DevDashboard;
