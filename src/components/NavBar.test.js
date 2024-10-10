import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

test('renders NavBar and checks search form', () => {
    const mockSearch = jest.fn();
    render(<NavBar search={mockSearch} />);


    const myRecipe = screen.getByTestId('my-recipe');
    expect(myRecipe).toHaveTextContent('My Recipe');

    const searchInput = screen.getByRole('searchbox');
    fireEvent.change(searchInput, { target: { value: 'Test' } });
    expect(searchInput.value).toBe('Test');

    const form = screen.getByTestId('form-search');
    fireEvent.submit(form);

    expect(mockSearch).toHaveBeenCalledWith('Test');
});
