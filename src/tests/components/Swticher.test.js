import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switcher from '../../components/Switcher';

describe('<Switcher />', () => {
  const renderSwitcher = (overrideProps = {}) => {
    const defaultProps = {
      onChange: jest.fn(),
      options: [],
    };
    const { container, getByText } = render(<Switcher {...defaultProps} {...overrideProps} />);

    return { container, getByText };
  };

  it('renders the container', () => {
    const { container } = renderSwitcher();

    expect(container).toBeInTheDocument();
  });

  it('renders the options', () => {
    const options = [ { label: 'I am the label!', value: 'Fake value' } ];
    const { getByText } = renderSwitcher({ options });

    expect(getByText(options[0].label)).toBeInTheDocument();
  });

  it('calls onChange', () => {
    const onChange = jest.fn();
    const options = [ { label: 'I am the label!', value: 'Fake value' } ];
    const { getByText } = renderSwitcher({ options, onChange });

    fireEvent.click(getByText(options[0].label));

    expect(onChange).toHaveBeenCalledWith(options[0].value);
  });
});
