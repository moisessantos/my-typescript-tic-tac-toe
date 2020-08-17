import React, { useState } from 'react';
import styled from 'styled-components';
import { Square } from '..';
import calculateWinner from '../calculations';

const StyledRow = styled.div`
    &:after {
        clear: both;
        content: "";
        display: table;
    }
`

const StyledStatus = styled.div`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
`

interface Props { handleWinner: Function }

const Board = ({ handleWinner } : Props) => {
    const [ n_plays, setPlays ] = useState(0);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const handleClick = (index : number) => {
        const newSquares = squares.slice();
        newSquares[index] = currentPlayer;
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        setSquares(newSquares);
        if(n_plays + 1 === 9) {
            handleWinner('no one')
        } else {
            const winner = calculateWinner(newSquares);
            if(winner) {
                handleWinner(winner);
                setPlays(9);
            } else {
                setPlays(n_plays+1);
            }
        }
    }
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const status = `Next player: ${currentPlayer}`;
    const disabled = n_plays === 9;

    return (
        <div>
            <StyledStatus data-testid='status'>{status}</StyledStatus>
            <StyledRow>
                <Square value={ squares[0] } handleClick={ () => handleClick(0) } disabled={disabled} />
                <Square value={ squares[1] } handleClick={ () => handleClick(1) } disabled={disabled} />
                <Square value={ squares[2] } handleClick={ () => handleClick(2) } disabled={disabled} />
            </StyledRow>
            <StyledRow>
                <Square value={ squares[3] } handleClick={ () => handleClick(3) } disabled={disabled} />
                <Square value={ squares[4] } handleClick={ () => handleClick(4) } disabled={disabled} />
                <Square value={ squares[5] } handleClick={ () => handleClick(5) } disabled={disabled} />
            </StyledRow>
            <StyledRow>
                <Square value={ squares[6] } handleClick={ () => handleClick(6) } disabled={disabled} />
                <Square value={ squares[7] } handleClick={ () => handleClick(7) } disabled={disabled} />
                <Square value={ squares[8] } handleClick={ () => handleClick(8) } disabled={disabled} />
            </StyledRow>
        </div>
    );
}

export default Board;