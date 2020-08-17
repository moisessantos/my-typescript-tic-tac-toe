import React from 'react';
import styled from 'styled-components';

interface Props { value: string, handleClick: (event: React.MouseEvent) => void, disabled?: boolean}

const StyledSquare = styled.button`
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;

    &:focus {
        outline: none;
        background: #ddd;
    }
`;

const Square = ({ value, handleClick, disabled }: Props) => {
    return (
        <StyledSquare onClick={handleClick} disabled={disabled}>
            {value}
        </StyledSquare>
    );
}

export default Square;