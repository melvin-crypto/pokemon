import Link from 'next/link';

const PokemonCard = ({ pokemon }: { pokemon: any }) => {
  return (
    <Link href={`/pokemon/${pokemon.pokedexId}`}>
      <div className="pokemon-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer relative">
        <span className="absolute top-2 right-2 text-gray-400 text-sm font-semibold">
          #{pokemon.pokedexId}
        </span>

        <div className="flex justify-center bg-white">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-36 h-36 object-contain"
          />
        </div>

        <div className="bg-gray-100 flex flex-col items-center justify-center px-3 py-2">
          <h3 className="text-sm font-semibold text-center">{pokemon.name}</h3>

          <div className="flex justify-center space-x-2 mt-1">
            {pokemon.types.map((type: any) => (
              <img
                key={type.id}
                src={type.image}
                alt={type.name}
                className="w-6 h-6 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
