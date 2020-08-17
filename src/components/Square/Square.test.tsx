import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Square } from '../';

describe('Square', () => {
    it('renders disabled component', () => {
        const screen = render(<Square disabled value='X' handleClick={jest.fn()} />);
        const button = screen.getByText('X');
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    it('renders component', () => {
        const handleClick = jest.fn();
        const screen = render(<Square value='X' handleClick={handleClick} />);
        const button = screen.getByText('X');
        expect(button).toBeInTheDocument();
        expect(button).toBeEnabled();
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});