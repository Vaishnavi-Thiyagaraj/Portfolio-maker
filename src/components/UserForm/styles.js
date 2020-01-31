import styled from 'styled-components'

export const InputField = styled.input`
  /* width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 6px;
  height: max-content; */
  width: 60%;
  padding: 6px;
  margin: 5px 0 22px 0;
  display: block;
  border:none;
  border-radius: 10px;
  background: #c6c6c6;
`;

export const Container = styled.div`
  /* padding: 30px;
  width: 60%;
  background-color: #161616; */
  padding: 16px;
  background-color: #f4f4f4;
  color:black;
  margin:30px;
`;

export const Header = styled.div`
  padding: 10px;
    width: 100%;
    background-color: #161616;
    margin: 10px 0;
    color: white;
`;

export const Button = styled.button`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2ecc40;
  }
  /* svg {
    fill: white;
    margin-left: 8px;
  } */
`;