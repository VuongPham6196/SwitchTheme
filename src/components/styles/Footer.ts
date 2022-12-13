import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 20px;
  text-align: center;

  color: ${({ theme }) => theme.colors.text};

  a {
    color: ${({ theme }) => theme.colors.text};
  }
`;
