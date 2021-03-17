const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.fetch = jest.fn();
global.console.error = jest.fn();
global.URL.createObjectURL = jest.fn();
global.localStorage = localStorageMock;
