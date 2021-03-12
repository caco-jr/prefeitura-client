import { render } from '@test/testUtils';

import HomeHighlight from './Highlight';

describe('Highlight', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<HomeHighlight />);

    expect(getByRole('heading', { name: /Highlight/i })).toBeInTheDocument();
  });
});
