import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  border: solid 1px #7d6b40;
  padding: 5px 15px;
  border-radius: 10px;
  margin-bottom: 5px;
  &:hover,
  &:focus {
    background-color: #f7e3c0;
  }
`;

export const StyledText = styled.p`
  color: #7d6b40;
`;

export const StyledBtn = styled.button`
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
