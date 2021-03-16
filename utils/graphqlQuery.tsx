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

export const GET_POKEMON = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
      status
      message
      weight
      height
      base_experience
      species {
        url
        name
      }
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
          url
        }
      }
      abilities {
        ability {
          name
        }
        is_hidden
      }
      sprites {
        back_default
        front_default
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
    }
  }
`;

export const GET_EVOLUTION = gql`
  query getEvolution($id: String!) {
    evolutionChain(id: $id) {
      status
      message
      response
    }
  }
`;

export const GET_MOVE = gql`
  query getMove($move: String!) {
    move(move: $move) {
      status
      message
      response
    }
  }
`;
