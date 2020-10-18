import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../../components/Logo';

describe('<Logo />', () => {
  const renderLogo = () => {
    const { container } = render(<Logo />);

    return { container };
  };

  it('renders the container', () => {
    const { container } = renderLogo();

    expect(container).toBeInTheDocument();
  });
});
