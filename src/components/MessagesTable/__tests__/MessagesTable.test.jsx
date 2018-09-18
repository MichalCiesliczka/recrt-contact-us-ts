import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

import MessagesTable from '../MessagesTable';
import { tableColumns } from '../../../features/contactUs/contactUs.constans';

describe('<MessagesTable />', () => {
  const defaultProps = {
    messages: [
      {
        id: '1',
        name: 'Test Name',
        email: 'email@domain.com',
        message: 'Test message',
      },
    ],
    columns: tableColumns
  };

  it('renders without crashing', () => {
    shallow(<MessagesTable {...defaultProps} />);
  });

  it('should render default status', () => {
    const tree = renderer
      .create(
        <MessagesTable {...defaultProps} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
