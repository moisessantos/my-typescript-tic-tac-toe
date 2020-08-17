import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from './Game';

describe('Game', () => {
    it('renders component', () => {
        const screen = render(<Game />);
        const buttons = screen.getAllByRole('button');
        for (let index = 0; index < 4; index++) {
            fireEvent.click(buttons[index]);
            fireEvent.click(buttons[4]);
        }
        const winner = screen.getByTestId('winner');
        expect(winner).toHaveTextContent('The winner is: X');
    });
});