import gql from 'graphql-tag';

export const GET_POKEMON_LIST = gql`
  query getPokemonList($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      prevOffset
      params
      status
      message
      results {
        id
        image
        name
      }
    }
  }
`;
