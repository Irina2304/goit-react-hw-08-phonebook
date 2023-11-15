import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #7d6b40;
`;

export const Input = styled.input`
  border-radius: 10px;
  background-color: #fbf5ea;
  border: 1px solid;
  border-color: #efd7a0;
  color: #7d6b40;
  padding: 9px 21px;
`;

export const Btn = styled.button`
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #7d6b40;
  background-color: #f7e3c0;
  min-width: 100px;
  height: 41px;
  padding: 9px 21px;
  border: none;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #f0b348;
  }
`;
