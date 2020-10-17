import React from 'react';
import { render } from '@testing-library/react';
import I18NextContainer from '../../containers/I18NextContainer';

describe('I18NextContainer', () => {
  const renderI18NextContainer = (overrideProps) => {
    const defaultProps = { children: 'children' };
    const { container, getByText } = render(<I18NextContainer  {...defaultProps} {...overrideProps} />);

    return { container, getByText };
  };

  it('renders the container', () => {
    const { container } = renderI18NextContainer();

    expect(container).toBeInTheDocument();
  });

  it('renders the children', () => {
    const children = 'I am the children!';
    const { getByText } = renderI18NextContainer({ children });

    expect(getByText(children)).toBeInTheDocument();
  });
});
