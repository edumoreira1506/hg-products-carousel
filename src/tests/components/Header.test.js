import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('<Header />', () => {
  const renderHeader = () => {
    const { container } = render(<Header />);

    return { container };
  };

  it('renders the container', () => {
    const { container } = renderHeader();

    expect(container).toBeInTheDocument();
  });
});
