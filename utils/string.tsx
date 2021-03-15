import { startCase, lowerCase } from 'lodash';

export const getFormattedId = (id: number) => {
  return id ? `#${id.toString().padStart(3, '0')}` : '';
};

export const formatText = (value: string) => {
  return startCase(lowerCase(value));
};
