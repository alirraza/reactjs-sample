import Styled from 'styled-components';

const AuthWrapper = Styled.div`
.login-wrapper{
  display: flex;
  justify-content: center;
}
  .login-col {
    padding: 20px;
  }
  .login-form {
    padding: 130px;
    .create-account {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      span {
        margin-bottom: 10px;
      }
    }
    .link {
      cursor: pointer;
    }
  }
`;

export default AuthWrapper;
