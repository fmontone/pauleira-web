import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MdExpandMore } from 'react-icons/md';

import { Container, Title, Options, Option, ButtonToggle } from './styles';

export default function DropDown({ options, firstAsTitle }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(
    firstAsTitle === true ? options[0] : 'Escolha uma opção...'
  );

  function handleOptionClick(item) {
    setTitle(item);
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Options open={open} onClick={() => setOpen(!open)}>
        {options.map((item, index) => {
          return (
            <Option key={String(index)} onClick={() => handleOptionClick(item)}>
              {item}
            </Option>
          );
        })}
      </Options>
      <ButtonToggle open={open} onClick={() => setOpen(!open)}>
        <MdExpandMore />
      </ButtonToggle>
    </Container>
  );
}

DropDown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  firstAsTitle: PropTypes.bool,
};

DropDown.defaultProps = {
  options: ['Opção 1', 'Opção 2'],
  firstAsTitle: true,
};
