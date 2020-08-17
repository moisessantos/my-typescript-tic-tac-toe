import React, { useState } from 'react';
import styled from 'styled-components';

import { Board } from './components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledBoard = styled.div`
  margin: 20px;
`;

const StyledInfo = styled.div`
  margin-left: 20px;
`;

const Game = () => {
    const [winner, setWinner] = useState(null); 
    return (
      <StyledWrapper>
        <StyledBoard>
          <Board handleWinner={setWinner} />
        </StyledBoard>
        <StyledInfo>
          <div data-testid='winner'>{winner && `The winner is: ${winner}`}</div>
        </StyledInfo>
      </StyledWrapper>
    );
}

export default Game;