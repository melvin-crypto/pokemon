export const getPokemons = async ({ page, limit, filters }: { page: number, limit: number, filters: any }) => {
    const { name, type } = filters;
    const res = await fetch(`https://nestjs-pokedex-api.vercel.app/pokemons?page=${page}&limit=${limit}&name=${name}&typeId=${type}`);
    const data = await res.json();
    return data;
  };
  
  export const getPokemonDetails = async (id: string) => {
    const res = await fetch(`https://nestjs-pokedex-api.vercel.app/pokemons/${id}`);
    const data = await res.json();
    return data;
  };
  
  export const getTypes = async () => {
    const res = await fetch('https://nestjs-pokedex-api.vercel.app/types');
    const data = await res.json();
    return data;
  };
  