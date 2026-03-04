import { render, screen } from '@testing-library/react';
import App, { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_LINK } from '../App';
import { ThemeProvider } from '../context/ThemeContext';

describe('Store location embedding', () => {
  beforeEach(() => {
    // theme provider uses matchMedia; tests elsewhere stub it
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));

    // framer-motion uses IntersectionObserver; provide a basic stub so
    // rendering the full <App /> doesn't crash in the JSDOM environment.
    vi.stubGlobal('IntersectionObserver', class {
      constructor() {}
      observe() {}
      disconnect() {}
      unobserve() {}
    });
  });

  it('exports a sensible Google Maps URL', () => {
    // the link should reference Nagcarlan in some fashion
    expect(GOOGLE_MAPS_LINK).toContain('maps.app');
    expect(GOOGLE_MAPS_EMBED_URL).toContain('Nagcarlan');
  });

  it('renders an iframe pointing to the embed URL', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    const iframe = screen.getByTitle("Danrick's Store Location");
    expect(iframe).toHaveAttribute('src', GOOGLE_MAPS_EMBED_URL);
  });
});
