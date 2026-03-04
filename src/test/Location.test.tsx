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

  it('exports sensible Google Maps URLs', () => {
    // link constant stays as the short shareable URL
    expect(GOOGLE_MAPS_LINK).toContain('maps.app');
    // embed URL uses explicit coordinates with output=embed
    expect(GOOGLE_MAPS_EMBED_URL).toContain('14.1123629');
    expect(GOOGLE_MAPS_EMBED_URL).toContain('121.415928');
    expect(GOOGLE_MAPS_EMBED_URL).toContain('output=embed');
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
