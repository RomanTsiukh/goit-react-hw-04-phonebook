import styled from 'styled-components';

export const SectionBox = styled.section`
  margin-top: ${p => p.theme.space[4]}px;
`;

export const Title = styled.p`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
