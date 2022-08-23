import PropTypes from 'prop-types';
import { SectionBox, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionBox>
    <Title>{title}</Title>
    {children}
  </SectionBox>
);

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
