import Styled from 'styled-components';
import { Button } from 'antd';

const ButtonWrapper = Styled(Button)`
  &.ant-btn-primary {
    background-color: ${({ theme }) => theme?.colors?.primaryColor};
    padding: 4px 24px;
    min-width: 100px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    min-width: ${(props) => (props.width ? `${props.width}` : '')};
    height: ${(props) => (props.height ? `${props.height}` : '38px')};
    &:hover {
      background-color: ${({ theme }) => theme?.colors?.primaryColor};
    }
  }
`;

export default ButtonWrapper;
