import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
      font-family: 'Source Sans 3', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    h2 {
      margin-top: 0;
    }
    .primary-text{
     color: ${({ theme }) => theme.colors.primaryColor};
    }
    .modal-box{
      .ant-modal-content{
      padding:0 ;
    }
    .ant-modal-close {
      top: 22px;
      width: 42px;
      svg {
        width: 22px;
        height: 22px;
      }
    }
    .modal-header{
      background-color: ${({ theme }) => theme.colors.primaryColor};
      color:${({ theme }) => theme.colors.whiteColor};
      padding: 22px 26px 18px;
      border-top-left-radius:8px;
      border-top-right-radius:8px;
      display:flex;
      align-items: center;
      justify-content:space-between;
      span {
        font-size: 18px;
        letter-spacing: 0.3px;
      }
      .ant-steps-item-content {
        margin-top: 0;
      }
    }
    .ant-modal-content{
      .ant-modal-close-x{
        svg{
      filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(320deg) brightness(105%) contrast(101%); 
      fill:unset;
        }
      }
    }
    .ant-steps {
      width:25%;
      .ant-steps-item {
        .ant-steps-icon-dot{
              width: 14px;
              height: 14px;
            }
        &.ant-steps-item-active{
            .ant-steps-item-container{
          .ant-steps-icon{
            .ant-steps-icon-dot{
              width: 14px;
              height: 14px;
              background:${({ theme }) => theme.colors.whiteColor};
            }
          }
        }
        }
        .ant-steps-item-container{
          .ant-steps-icon{
            .ant-steps-icon-dot{
                 background:transparent;
              border:1px solid ${({ theme }) => theme.colors.whiteColor};
            }
          }
        }
          .ant-steps-item-tail{
            top: 5px;
            width: 87%;
            margin-top: 0;
            margin-bottom: 0;
            padding: 0;
            background-color: beige;
            height: 1px;
            margin-left: 81.5px;
            &::after{
              background-color:transparent; 
            }
          }
      }
    }
    .ant-modal-footer{
      border-top:1px solid #ccc;
      padding:24px;
    }
    .modal-content{
      padding:28px 26px;
    }
    .match-types {
    .check-box{
      text-align:center;
      margin-bottom:16px;
      margin-left:6px;
      span{
      color: ${({ theme }) => theme.colors.labelColor};
    }
    } 
  }
    }
    .fs-12{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    }
    .fw-semibold {
      font-weight: 600;
    }
    .d-flex{
      display:flex;
    }
    .flex-column{
      flex-direction: column;
    }
    .justify-content-between{
      justify-content: space-between;
    }
    .fw-bold{
      font-weight: 600;
    }
    .mb-2{
      margin-bottom:8px;
    }
     .inline-block{
      display:inline-block ;
    }
    .textarea{
      resize:none;
    }
`;

export default GlobalStyles;
