import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggler from '../components/ThemeToggler';
import { ThemeProvider } from '../context/ThemeContext';

function renderToggler() {
  return render(
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
}

describe('ThemeToggler', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders with the correct initial aria-label for light mode', () => {
    renderToggler();
    expect(
      screen.getByRole('button', { name: 'Switch to dark mode' })
    ).toBeInTheDocument();
  });

  it('renders with the correct aria-label for dark mode', () => {
    localStorage.setItem('theme', 'dark');
    renderToggler();
    expect(
      screen.getByRole('button', { name: 'Switch to light mode' })
    ).toBeInTheDocument();
  });

  it('toggles theme on click and updates aria-label', async () => {
    const user = userEvent.setup();
    renderToggler();

    const button = screen.getByRole('button', { name: 'Switch to dark mode' });
    await user.click(button);

    expect(
      screen.getByRole('button', { name: 'Switch to light mode' })
    ).toBeInTheDocument();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggles back to light on second click', async () => {
    const user = userEvent.setup();
    renderToggler();

    const button = screen.getByRole('button', { name: 'Switch to dark mode' });
    await user.click(button);
    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }));

    expect(
      screen.getByRole('button', { name: 'Switch to dark mode' })
    ).toBeInTheDocument();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
