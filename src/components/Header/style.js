import Styled from 'styled-components';

const HeaderWrapper = Styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  position: sticky;
  top: 0;
  z-index: 99;
  .header-main {
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1128px;
    margin: 0 auto;
    .logo {
      cursor: pointer;
    }
    .header-menu {
      display: flex;
      align-items: center;
      gap: 20px;
      ul {
        display: flex;
        margin: 0;
        margin-top:9px;
        li {
          padding-right: 47px;
          list-style: none;
          cursor: pointer;
          a {
            color: black;
            text-decoration: none;
            transition: color 0.3s ease-in-out;
            padding-bottom: 20px;
            &:hover {
              color: #fc6254;
            }
          }
          .active-link {
            color: #fc6254;
            border-bottom: 3px solid #fc6254;
          }
        }
      }
      .menu-avatar {
        display: flex;
        align-items: center;
        gap: 30px;
        svg {
          cursor: pointer;
        }
      }
    }
  }
`;

export default HeaderWrapper;
