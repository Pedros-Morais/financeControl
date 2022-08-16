import styled from "styled-components";

export const Container = styled.div`
  background-color: #0b1421;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  display: flex;
  align-items: center;
`;
export const CenterContent = styled.div`
  color: #fafafa;
`;
export const EndContent = styled.div``;
export const Text = styled.span`
  color: #fafafa;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0px 20px;
  cursor: pointer;
  :hover {
    color: #da2535;
    transition: 0.3s;
    animation: pulse 1s infinite;
  }
`;
export const Button = styled.button`
  color: #fafafa;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #da2535;
  padding: 15px;
  border-radius: 5px;
  :hover {
    background-color: #fafafa;
    color: #da2535;
    transition: 0.3s;
    animation: pulse 1s infinite;
  }
`;
