import React from 'react';
import { render } from '@testing-library/react';
import ReduxContainer from '../../containers/ReduxContainer';

describe('ReduxContainer', () => {
  const renderReduxContainer = (overrideProps) => {
    const defaultProps = { children: 'children' };
    const { container, getByText } = render(<ReduxContainer  {...defaultProps} {...overrideProps} />);

    return { container, getByText };
  };

  it('renders the container', () => {
    const { container } = renderReduxContainer();

    expect(container).toBeInTheDocument();
  });

  it('renders the children', () => {
    const children = 'I am the children!';
    const { getByText } = renderReduxContainer({ children });

    expect(getByText(children)).toBeInTheDocument();
  });
});
