import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

import InputField from '../elements/InputField';

describe('<InputField />', () => {
  const defaultProps = {
    input: {},
    label: 'Test label',
    meta: {
      error: false,
      touched: false,
    },
    multiline: false,
  };

  it('renders without crashing', () => {
    shallow(<InputField {...defaultProps} />);
  });

  it('should render default status', () => {
    const tree = renderer
      .create(
        <InputField {...defaultProps} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render error status', () => {
    const preparedProps = {
      ...defaultProps,
      meta: {
        error: true,
        touched: true,
      },
    };

    const tree = renderer
      .create(
        <InputField {...preparedProps} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
