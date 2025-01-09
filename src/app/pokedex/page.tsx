'use client';

import { useEffect, useState } from 'react';
import { getPokemons } from '../utils/api';
import PokemonCard from '../components/pokemonCard';
import PokedexLayout from '../components/pokedexLayout';

const Page = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [limit, setLimit] = useState(50);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<{ name: string; type: string }>({
    name: '',
    type: '',
  });

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons({ page, limit, filters });
      setPokemons(data);
    };

    fetchPokemons();
  }, [page, limit, filters]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (
      e.currentTarget.scrollTop + e.currentTarget.clientHeight ===
      e.currentTarget.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <PokedexLayout
      filters={filters}
      setFilters={setFilters}
      setPage={setPage}
      setLimit={setLimit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 bg-gray-100 p-6 rounded-lg shadow-md"
        onScroll={handleScroll}
      >
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.pokedexId} pokemon={pokemon} />
        ))}
      </div>
    </PokedexLayout>
  );
};

export default Page;
