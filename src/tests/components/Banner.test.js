import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../../components/Banner';

describe('<Banner />', () => {
  const renderBanner = () => {
    const { container } = render(<Banner />);

    return { container };
  };

  it('renders the container', () => {
    const { container } = renderBanner();

    expect(container).toBeInTheDocument();
  });
});
