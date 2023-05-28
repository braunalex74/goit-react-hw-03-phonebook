import styled from '@emotion/styled';

export const Form = styled.form`
  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    display: block;
    width: 400px;
    padding: 0.5rem;
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  button {
    display: block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #4caf50;
    color: white;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    background-color: #4caf50;
    color: #ffffff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;
