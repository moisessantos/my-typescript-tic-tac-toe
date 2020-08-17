import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Board } from '../';

describe('Board', () => {
    it('renders component with X winning', () => {
        const handleWinner = jest.fn();
        const screen = render(<Board handleWinner={handleWinner} />);
        const status = screen.getByTestId('status');
        expect(status).toBeInTheDocument();
        expect(status).toHaveTextContent('Next player: X');
        const buttons = screen.getAllByRole('button');
        for (let index = 0; index < 4; index++) {
            fireEvent.click(buttons[index]);
            fireEvent.click(buttons[4]);
        }
        expect(handleWinner).toHaveBeenCalledWith('X');
    });

    it('renders component with draw', () => {
        const handleWinner = jest.fn();
        const screen = render(<Board handleWinner={handleWinner} />);
        const status = screen.getByTestId('status');
        expect(status).toBeInTheDocument();
        expect(status).toHaveTextContent('Next player: X');
        const buttons = screen.getAllByRole('button');
        // X O X
        // X O O
        // O X X
        fireEvent.click(buttons[0]);
        fireEvent.click(buttons[1]);
        fireEvent.click(buttons[2]);
        fireEvent.click(buttons[4]);
        fireEvent.click(buttons[3]);
        fireEvent.click(buttons[5]);
        fireEvent.click(buttons[7]);
        fireEvent.click(buttons[6]);
        fireEvent.click(buttons[8]);
        expect(handleWinner).toHaveBeenCalledWith('no one');
    });

    it('sets the next player', () => {
        const screen = render(<Board handleWinner={jest.fn()} />);
        const status = screen.getByTestId('status');
        expect(status).toBeInTheDocument();
        expect(status).toHaveTextContent('Next player: X');
        fireEvent.click(screen.getAllByRole('button')[0]);
        expect(status).toHaveTextContent('Next player: O');
    });
});