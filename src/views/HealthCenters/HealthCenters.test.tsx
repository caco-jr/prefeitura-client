import { render } from '@test/testUtils';

import HealthCenters from './HealthCenters';

describe('HealthCenters', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<HealthCenters />);

    expect(
      getByRole('heading', { name: /HealthCenters/i })
    ).toBeInTheDocument();
  });
});
