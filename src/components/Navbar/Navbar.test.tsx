import { render } from '@test/testUtils';

import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Navbar />);

    expect(getByRole('heading', { name: /Navbar/i })).toBeInTheDocument();
  });
});
