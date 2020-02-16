import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Item, Heading, Button, Content, Icon } from './styles';

const AccordionItem = ({ item, isOpen }) => (
  <Item key={item}>
    <Heading>
      <Button>
        <p>Abrir</p>{' '}
        <Icon
          alt="Icone"
          className="icon"
          isOpen={isOpen}
          src={require('src/assets/icons/chevron-down.svg')}
        />
      </Button>
    </Heading>

    <Content>ooo</Content>
  </Item>
);

export default function Accordion({ categories, items }) {
  const [openAccordions, setOpenAccordions] = useState([]);

  const handleExpand = useCallback(index => {
    setOpenAccordions(index);
  }, []);

  const isOpen = useCallback(
    index => {
      return openAccordions.filter(item => item === index).length > 0;
    },
    [openAccordions]
  );

  return (
    <Container uuid="1" onChange={index => handleExpand(index)}>
      {[1, 2, 3].map((item, index) => (
        <AccordionItem
          key={item}
          item={item}
          index={index}
          isOpen={isOpen(index)}
        />
      ))}
    </Container>
  );
}

AccordionItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  item: PropTypes.number.isRequired,
};

Accordion.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
