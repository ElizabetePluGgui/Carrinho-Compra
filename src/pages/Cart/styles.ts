import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #ffff;
  border-radius: 10px;
  box-shadow: -1px 0px 20px -2px rgba(0,0,0,0.75);

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #0066ff;
      color: #fff;
      border: 0;
      border-radius: 10px;
      padding: 12px 150px;
      font-weight: bold;
      font-size: 18px;
      margin-left: 135px;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#0066ff')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #1a1a1a;   
    padding: 5px;
    font-size: 15px;
    text-align: center;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    margin: 50px;
  }

  img {
    height: 100px;
    border: 1px solid #eee1ee
  }

  strong {
    font-size: 16px;
    color: #000;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #0066ff;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#0066ff')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#0066ff')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
    

  display: flex;
  align-items: center;
  font-size: 24px;
  margin-left: 120px;
  span {
    color: #000;
    font-weight: bold;
    margin-right: 300px;
  }
  strong {
    font-size: 24px;
  }
  #btn-green {
      color: red;
    }
`;
