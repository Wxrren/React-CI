import React from 'react';
import NavBarSimple from '../NavBarSimple';
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

/* 
Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.763 s

- Tested states render to screen on the navbar
- Tested states are updated following a button click on the Navbar
*/