'use client';

import { useEffect, useState } from 'react';
import { getTypes } from '../utils/api';

const Filter = ({ filters, setFilters, setPage, setLimit }: { filters: any, setFilters: any, setPage: any, setLimit: any }) => {
  const [types, setTypes] = useState<any[]>([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const data = await getTypes();
      setTypes(data);
    };

    fetchTypes();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setPage(1);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, type: e.target.value }));
    setPage(1);
  };

  return (
    <div className="flex flex-wrap space-x-2 p-2">
      <div className="relative flex-1 max-w-[250px]">
        <input
          type="text"
          name="name"
          placeholder="Search"
          value={filters.name}
          onChange={handleFilterChange}
          className="pl-8 py-1 text-sm border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-red-500 w-full"
        />
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-red-500">
          <i className="fas fa-search"></i>
        </span>
      </div>

      <div className="flex-1 max-w-[150px]">
        <select name="type" onChange={handleTypeChange} value={filters.type} className="p-1 py-1 text-sm border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-red-500 w-full">
          <option value="">Tous</option>
          {types.map(type => (
            <option key={type.id} value={type.id}>{type.name}</option>
          ))}
        </select>
      </div>

      <div className="flex-1 max-w-[150px]">
        <select onChange={(e) => setLimit(Number(e.target.value))} className="p-1 py-1 text-sm border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-red-500 w-full">
          <option value={0}>Tous</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
