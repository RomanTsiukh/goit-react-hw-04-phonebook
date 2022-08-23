import styled from 'styled-components';

export const Error = styled.div`
  margin-left: 90px;
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.offlineColor};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ButtonAddContact = styled.button`
  display: flex;
  margin-left: auto;
  width: 100px;
  justify-content: center;
  cursor: pointer;

  margin-top: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[1]}px;
  box-shadow: -1px 1px 4px 0px rgba(140, 14, 170, 1);
  transition: background-color 250ms cubic-bezier(0.2, 0, 0, 0.7),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: ${p => p.theme.colors.hoverBgColor};
    color: ${p => p.theme.colors.thirdTextColor};
    transform: scale(1.1);
  }
`;
