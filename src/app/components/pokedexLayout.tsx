import { ReactNode } from 'react';
import Filter from './filter';

interface PokedexLayoutProps {
  filters: any;
  setFilters: any;
  setPage: any;
  setLimit: any;
  children: ReactNode;
}

const PokedexLayout = ({
  filters,
  setFilters,
  setPage,
  setLimit,
  children,
}: PokedexLayoutProps) => {
  return (
    <div className="min-h-screen bg-red-500 p-4">
      <div className="flex items-center mb-6">
        <img src="../../../pokeball.png" alt="Globe" className="w-15 h-6 mr-2" />
        <h1 className="text-3xl font-bold text-white">Pokedex</h1>
      </div>
      <Filter filters={filters} setFilters={setFilters} setPage={setPage} setLimit={setLimit} />
      {children}
    </div>
  );
};

export default PokedexLayout;
