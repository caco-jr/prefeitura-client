import { render } from '@test/testUtils';

import HomeHero from './Hero';

describe('HomeHero', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<HomeHero />);

    expect(getByRole('heading', { name: /HomeHero/i })).toBeInTheDocument();
  });
});
