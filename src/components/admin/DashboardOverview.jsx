import React from 'react';
import { Package, Users, BarChart, DollarSign } from 'lucide-react';
import { products } from '../../data/mockData';

const StatCard = ({ icon, title, value, change, color }) => {
  const Icon = icon;
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
      {change && (
        <p className="text-sm text-gray-500 mt-2">
          <span className="text-green-600 font-medium">{change}</span> vs last month
        </p>
      )}
    </div>
  );
};

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={DollarSign}
          title="Total Revenue (Affiliate Clicks)"
          value="1,254"
          change="+12%"
          color="green"
        />
        <StatCard
          icon={Package}
          title="Total Products"
          value={products.length}
          color="indigo"
        />
        <StatCard
          icon={Users}
          title="Total Users"
          value="3,456"
          change="+5.4%"
          color="blue"
        />
        <StatCard
          icon={BarChart}
          title="Most Clicked Product"
          value="Ergonomic Chair"
          color="yellow"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Affiliate Clicks</h3>
          {/* Placeholder for a chart */}
          <div className="h-64 bg-gray-100 flex items-center justify-center rounded-md">
            <p className="text-gray-500">Clicks chart placeholder</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Top Products</h3>
          <ul className="space-y-4">
            {products.slice(0, 5).map(p => (
              <li key={p.id} className="flex items-center">
                <img src={p.images[0]} alt={p.name} className="w-10 h-10 rounded-md object-cover mr-4" />
                <div>
                  <p className="font-medium text-sm text-gray-800 line-clamp-1">{p.name}</p>
                  <p className="text-xs text-gray-500">{p.brand.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
