import { render } from '@test/testUtils';

import Footer from './Footer';

describe('Footer', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Footer />);

    expect(getByRole('heading', { name: /Footer/i })).toBeInTheDocument();
  });
});
