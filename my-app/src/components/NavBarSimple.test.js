import React from 'react';
import NavBarSimple from './NavBarSimple';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

// Clean and make sure tests start from same starting point.
afterEach(() => {
    cleanup();
});

describe('NavBarSimple', () => {
  test("NavBar renders initial state to screen", () => {
    render(<NavBarSimple />);
    expect(screen.getByRole('heading', { name: /my gallery/i })).toBeInTheDocument();
    expect(screen.getByText(/hello, guest!/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
  });

  test("Updates the state when button is clicked", () => {
    render(<NavBarSimple />);

    // Set button variable
    const button = screen.getByRole('button');

    // Simulate click event
    fireEvent.click(button);

    // state checks
    expect(screen.getByText(/Log out/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome back, user!/i)).toBeInTheDocument();
  });
});

