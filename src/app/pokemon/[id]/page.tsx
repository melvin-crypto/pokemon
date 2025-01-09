'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getPokemonDetails } from '../../utils/api';
import PokedexLayout from '../../components/pokedexLayout';

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState<any>(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (params && params.id) {
        const data = await getPokemonDetails(params.id);
        setPokemon(data);
      }
    };

    fetchPokemonDetails();
  }, [params]);

  if (!pokemon) return <div className="text-center">Loading...</div>;

  return (
    <PokedexLayout
      filters={{ name: '', type: '' }}
      setFilters={() => {}}
      setPage={() => {}}
      setLimit={() => {}}
    >
      <div className="bg-white min-h-screen p-6">
        <button
          onClick={() => router.back()}
          className="mb-6 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
        >
          Retour
        </button>

        <div className="flex gap-12 mt-6">
          <div className="w-1/3 bg-white shadow-lg rounded-lg p-6">
          <p className="text-center text-xl font-semibold">{pokemon.name}</p>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-full h-64 object-contain rounded-md mb-4"
            />
          </div>

          <div className="w-2/3 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Statistiques</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-left">HP</span>
                <span className="text-right">{pokemon.stats.HP}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-left">Speed</span>
                <span className="text-right">{pokemon.stats.speed}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-left">Attack</span>
                <span className="text-right">{pokemon.stats.attack}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-left">Defense</span>
                <span className="text-right">{pokemon.stats.defense}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-left">Special Attack</span>
                <span className="text-right">{pokemon.stats.specialAttack}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-left">Special Defense</span>
                <span className="text-right">{pokemon.stats.specialDefense}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PokedexLayout>
  );
};

export default PokemonDetail;
