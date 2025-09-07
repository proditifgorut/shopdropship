import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  Tags,
  Users,
  BarChart,
} from 'lucide-react';
import DashboardOverview from '../components/admin/DashboardOverview';
import ProductManagement from '../components/admin/ProductManagement';
import CategoryManagement from '../components/admin/CategoryManagement';

const AdminPage = () => {
  const [activeView, setActiveView] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'categories', label: 'Categories', icon: Tags },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart },
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'products':
        return <ProductManagement />;
      case 'categories':
        return <CategoryManagement />;
      case 'overview':
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Admin Panel</h2>
          </div>
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li key={item.id} className="mb-2">
                  <button
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      activeView === item.id
                        ? 'bg-indigo-600'
                        : 'hover:bg-gray-700'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {activeView}
            </h1>
          </header>
          <div>{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
