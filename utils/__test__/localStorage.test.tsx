import {
  countPokemon,
  getMyPokemon,
  releaseMyPokemon,
  saveMyPokemon,
  validatePokemonName,
} from '@utils/localStorage';

describe('countPokemon()', () => {
  it(`Returns pokemon quantity by name and calls getItem in localStorage once`, () => {
    const TEST = 'charizard';
    const RESULT = 0;
    const spy = jest.spyOn(Storage.prototype, 'getItem');

    expect(countPokemon(TEST)).toBe(RESULT);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('getMyPokemon()', () => {
  it(`Calls getItem in localStorage once`, () => {
    const spy = jest.spyOn(Storage.prototype, 'getItem');

    getMyPokemon();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('saveMyPokemon()', () => {
  it(`Calls getItem and setItem in localStorage once`, () => {
    const TEST_POKE = {
      id: 1,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      name: 'bulbasaur',
    };
    const TEST_NICKNAME = 'kodok';
    const spySet = jest.spyOn(Storage.prototype, 'setItem');
    const spyGet = jest.spyOn(Storage.prototype, 'setItem');

    saveMyPokemon(TEST_POKE, TEST_NICKNAME);
    expect(spySet).toHaveBeenCalledTimes(1);
    expect(spyGet).toHaveBeenCalledTimes(1);
  });
});

describe('releaseMyPokemon()', () => {
  it(`Calls get and setItem in localStorage once`, () => {
    const TEST_NICKNAME = 'kodok';
    const spySet = jest.spyOn(Storage.prototype, 'setItem');
    const spyGet = jest.spyOn(Storage.prototype, 'setItem');

    releaseMyPokemon(TEST_NICKNAME);
    expect(spySet).toHaveBeenCalledTimes(1);
    expect(spyGet).toHaveBeenCalledTimes(1);
  });
});

describe('validatePokemonName()', () => {
  it(`Returns is valid nickname values and calls getItem in localStorage once`, () => {
    const TEST_NICKNAME = 'kodok';
    const RESULT = true;
    const spy = jest.spyOn(Storage.prototype, 'getItem');

    expect(validatePokemonName(TEST_NICKNAME)).toBe(RESULT);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
