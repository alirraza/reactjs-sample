import styled from 'styled-components';

const LoaderWrapper = styled.div`
  background: rgb(249, 250, 252, 1);
  position: absolute;
  width: 100%;
  height: calc(100% - 64px);
  left: 0;
  z-index: 12;
  top: 64px;
  transition: 0.3s all ease-in;
  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 98px;
    overflow: hidden;
  }
  @keyframes loader {
    0% {
      left: -100px;
    }
    100% {
      left: 110%;
    }
  }
  #box {
    width: 50px;
    height: 50px;
    background: #2a68cc;
    animation: animate 0.5s linear infinite;
    margin: 0 auto;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }
  #shadow {
    width: 50px;
    height: 5px;
    background: #000;
    opacity: 0.1;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 50%;
    animation: shadow 0.5s linear infinite;
  }
  @keyframes shadow {
    50% {
      transform: scale(1.2, 1);
    }
  }
  p {
    margin-top: 10px;
    text-align: center;
    color: ${({ theme }) => theme['body-text']};
  }
`;
export default LoaderWrapper;
