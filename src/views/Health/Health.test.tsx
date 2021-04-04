import { render } from '@test/testUtils';

import Health from './Health';

describe('Health', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Health />);

    expect(getByRole('heading', { name: /Health/i })).toBeInTheDocument();
  });
});
