import {
  formatText,
  getDescription,
  getFormattedId,
  getMoveEffects,
  parseUrlParam,
} from '@utils/string';

describe('getFormattedId()', () => {
  it(`Returns formatted id`, () => {
    const TEST_1 = 1;
    const TEST_2 = 10;
    const TEST_3 = 100;
    const RESULT_1 = '#001';
    const RESULT_2 = '#010';
    const RESULT_3 = '#100';

    expect(getFormattedId(TEST_1)).toBe(RESULT_1);
    expect(getFormattedId(TEST_2)).toBe(RESULT_2);
    expect(getFormattedId(TEST_3)).toBe(RESULT_3);
  });
});

describe('formatText()', () => {
  it(`Returns formatted text`, () => {
    const TEST_1 = 'test-1 value1';
    const TEST_2 = 'test-2 value-2';
    const TEST_3 = 'test3 value-3';
    const RESULT_1 = 'Test 1 Value 1';
    const RESULT_2 = 'Test 2 Value 2';
    const RESULT_3 = 'Test 3 Value 3';

    expect(formatText(TEST_1)).toBe(RESULT_1);
    expect(formatText(TEST_2)).toBe(RESULT_2);
    expect(formatText(TEST_3)).toBe(RESULT_3);
  });
});

describe('parseUrlParam()', () => {
  it(`Returns params from url`, () => {
    const TEST = 'https://pokeapi.co/api/v2/pokemon-species/5/';
    const RESULT = '5';

    expect(parseUrlParam(TEST)).toBe(RESULT);
  });
});

describe('getDescription()', () => {
  it(`Returns flavor text for pokemon version and language`, () => {
    const TEST_1 = [
      {
        flavor_text: 'Description Ruby',
        language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
        version: { name: 'ruby', url: 'https://pokeapi.co/api/v2/version/7/' },
      },
      {
        flavor_text: 'Description Saphire',
        language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
        version: { name: 'saphire', url: 'https://pokeapi.co/api/v2/version/2/' },
      },
    ];
    const TEST_2 = [
      {
        flavor_text: 'Description Ruby',
        language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
        version_group: { name: 'ruby', url: 'https://pokeapi.co/api/v2/version/7/' },
      },
      {
        flavor_text: 'Description Saphire',
        language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
        version_group: { name: 'saphire', url: 'https://pokeapi.co/api/v2/version/2/' },
      },
    ];
    const RESULT = 'Description Ruby';

    expect(getDescription(TEST_1)).toBe(RESULT);
    expect(getDescription(TEST_2)).toBe(RESULT);
  });
});

describe('getMoveEffects()', () => {
  it(`Returns formatted text`, () => {
    const TEST_EFFECT =
      'Inflicts regular damage.  Has a $effect_chance% chance to burn the target.';
    const TEST_CHANCE = 10;
    const RESULT = 'Inflicts regular damage.  Has a 10% chance to burn the target.';

    expect(getMoveEffects(TEST_EFFECT, TEST_CHANCE)).toBe(RESULT);
  });
});
