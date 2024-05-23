import Styled from 'styled-components';

const LayoutWrapper = Styled.section`
  background-color: ${({ theme }) => theme.colors.bodyColor};
  height:100vh ;
`;

export default LayoutWrapper;
