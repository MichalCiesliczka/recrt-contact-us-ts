import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
};

type Global = NodeJS.Global & {
  localStorage: {
    getItem: (key: string) => string,
    setItem: (key: string, value: string) => void,
  }
}

(global as Global).localStorage = localStorageMock;
