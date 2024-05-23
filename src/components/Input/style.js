import Styled from 'styled-components';

const InputWrapper = Styled.div`
  margin-bottom: 8px;
  .ant-form-item {
    margin-bottom: 32px;
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '')};
  }
  .ant-input-password {
    background-color: ${(props) => (props.background ? props.background : '#f2f4f7')};
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #d7d7d7;
    padding: 0;
    padding-right: 8px;
    &.ant-input-affix-wrapper-focused {
      box-shadow: none;
    }
    &:hover {
      border-color: #d7d7d7;
    }
    .ant-input {
      padding: 8px;
    }
  }
  .ant-input {
    background-color: ${(props) => (props.transparent ? props.transparent : '#f2f4f7')};
    border-radius: ${(props) => (props.transparent ? '4px' : '0')};
    border: ${(props) => (props.transparent ? '1px solid #ccc' : '#f2f4f7')};
    border-bottom: 1px solid #d7d7d7;
    padding: 8px;
    height: ${(props) => (props.height ? `${props.height}` : '32px')};
    min-width: ${(props) => (props.minWidth ? `${props.minWidth}` : '')};
    &::placeholder {
      font-weight: 600;
    }
    &:focus {
      box-shadow: none;
    }
  }
  .ant-form-item-label {
    padding-bottom: 0;
  }
  .ant-form-item-label label {
    font-size: ${({ theme }) => theme?.fonts?.baseFontSizeMediumSmal};
    color: ${({ theme }) => theme?.colors?.labelColor};
    margin-bottom: 8px;
  }
  .invalid-input {
    border: 1px solid red;
  }
`;

export default InputWrapper;
