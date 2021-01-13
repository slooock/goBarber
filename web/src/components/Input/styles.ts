import styled, { css } from 'styled-components';
import Toltip from '../Toltip';
interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    color: #666360;
    border: 2px solid #232129;

    display: flex;
    align-items: center;
    & + div{
        margin-top: 8px;
    }

    svg {
        margin-right: 16px;
    }

    ${props => props.isErrored && css `
      border-color: #c53030;
    `}

    ${props => props.isFocused && css `
      color: #ff9000;
      border-color: #ff9000;
    `}

    ${props => props.isFilled && css `
      color: #ff9000;
    `}



   input {
      flex: 1;
      background: transparent;
      border: 0;
      color: #f4ede8;

      &::placeHolder{
        color: #666360;
      }



    }
`;

export const Error = styled(Toltip) `
  height: 20px;
  svg{
    margin: 0;
  }

  span {
    background: #c53030;
    color: #FFF;

    &::before{

      border-color: #c53030 transparent;
  }
`;
