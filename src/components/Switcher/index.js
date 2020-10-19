import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Switcher = ({ onChange, options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChangeSelectedOption = (index) => {
    const option = options[index];

    onChange(option.value);
    setSelectedIndex(index);
  };

  const switcherOptionWidth = 100 / options.length;

  return (
    <div className="Switcher">
      {options.map((option, index) => {
        const isChecked = selectedIndex === index;

        return (
          <button
            onClick={() => handleChangeSelectedOption(index)}
            className={classNames('Switcher__option', { 'Switcher__option--checked': isChecked })}
            key={option.value}
            style={{ width: `${switcherOptionWidth}%` }}
          >
            <input type="radio" checked={isChecked} className={classNames('Switcher__option-check', { 'Switcher__option-check--checked': isChecked })} />
            <p className="Switcher__option-label">{option.label}</p>
          </button>
        );
      })}
    </div>
  );
};

Switcher.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Switcher;
