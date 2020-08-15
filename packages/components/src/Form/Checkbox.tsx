import React from 'react';
import styled from 'styled-components';

interface Props {
  checked: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    padding-left: 8px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

const StyledCheckbox = styled.input`
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;
  border-collapse: separate;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  appearance: none;
  &:checked {
    background-color: #1890ff;
    border-color: #1890ff;
    &::after {
      position: absolute;
      top: 50%;
      left: 22%;
      display: table;
      width: 5.71428571px;
      height: 9.14285714px;
      content: ' ';
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      opacity: 1;
      transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
      transform: rotate(45deg) scale(1) translate(-50%, -50%);
    }
  }
  &:focus {
    outline: 0;
  }
`;

const Checkbox: React.FC<Props> = (props) => {
  return (
    <Wrapper className={props.className}>
      <StyledCheckbox
        type="checkbox"
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <span>{props.children}</span>
    </Wrapper>
  );
};

export default Checkbox;
export { Checkbox };
