import { render } from '@test/testUtils';

import Login from './Login';

describe('Login', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Login />);

    expect(getByRole('heading', { name: /Login/i })).toBeInTheDocument();
  });
});
