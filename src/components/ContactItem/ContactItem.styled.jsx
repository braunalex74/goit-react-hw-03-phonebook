import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f5f5f5;
  margin-bottom: 0.5rem;
  width: 100%;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span`
  color: #888;
`;

export const DeleteButton = styled.button`
  background-color: #ff4f4f;
  display: block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1rem;
  border: none;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
