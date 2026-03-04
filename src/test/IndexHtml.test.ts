import fs from 'fs';
import path from 'path';

describe('index.html meta tags', () => {
  const htmlPath = path.join(__dirname, '..', '..', 'index.html');
  let content: string;

  beforeAll(() => {
    content = fs.readFileSync(htmlPath, 'utf8');
  });

  it('contains geo position meta tags', () => {
    expect(content).toMatch(/geo\.position/i);
    expect(content).toMatch(/ICBM/i);
  });

  it('includes an Open Graph description mentioning Nagcarlan', () => {
    expect(content).toMatch(/Nagcarlan, Laguna/i);
  });
});
