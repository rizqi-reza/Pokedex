import { startCase, lowerCase } from 'lodash';

export const getFormattedId = (id: number) => {
  return id ? `#${id.toString().padStart(3, '0')}` : '';
};

export const formatText = (value: string) => {
  return startCase(lowerCase(value));
};

export const parseUrlParam = (url: string) => {
  const urls = url?.split('/');
  const params = urls ? urls[urls?.length - 2] : '';
  return params;
};
