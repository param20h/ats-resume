import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%;

  &:focus {
    border-color: #4a6cf7;
    box-shadow: 0 0 0 3px rgba(74, 108, 247, 0.1);
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

const StyledTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  min-height: 100px;
  resize: vertical;

  &:focus {
    border-color: #4a6cf7;
    box-shadow: 0 0 0 3px rgba(74, 108, 247, 0.1);
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

const ErrorMessage = styled.p`
  color: #ff5470;
  font-size: 0.8rem;
  margin-top: 4px;
`;

const Input = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error,
  multiline = false,
  rows = 4,
  ...rest
}) => {
  return (
    <InputContainer>
      {label && (
        <Label htmlFor={id}>
          {label} {required && <span style={{ color: '#ff5470' }}>*</span>}
        </Label>
      )}

      {multiline ? (
        <StyledTextarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          {...rest}
        />
      ) : (
        <StyledInput
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          {...rest}
        />
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
