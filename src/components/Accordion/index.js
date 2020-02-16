import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import FoodCard from '../FoodCard';
import { Container, Item, Heading, Button, Content, Icon } from './styles';

const AccordionItem = ({ category, isOpen, items }) => (
  <Item>
    <Heading>
      <Button>
        <p>{category}</p>{' '}
        <Icon
          alt="Icone"
          className="icon"
          isOpen={isOpen}
          src={require('src/assets/icons/chevron-down.svg')}
        />
      </Button>
    </Heading>

    <Content isOpen={isOpen}>
      {items.map(item => (
        <FoodCard key={item.name} {...item} />
      ))}
    </Content>
  </Item>
);

export default function Accordion({ categories, items }) {
  const [openAccordions, setOpenAccordions] = useState([]);

  const handleExpand = useCallback(index => {
    setOpenAccordions(index);
  }, []);

  const isOpen = useCallback(
    index => {
      console.log('isOpen', openAccordions);

      return openAccordions.filter(item => item === index).length > 0;
    },
    [openAccordions]
  );

  return (
    <Container uuid="0" onChange={index => handleExpand(index)}>
      {categories.map((category, index) => (
        <AccordionItem
          key={category}
          category={category}
          items={items}
          index={index}
          isOpen={isOpen(index)}
        />
      ))}
    </Container>
  );
}

AccordionItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  category: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

Accordion.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
