import { render } from '@test/testUtils';

import ReactHookFormSelect from './ReactHookFormSelect';

describe('ReactHookFormSelect', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<ReactHookFormSelect />);

    expect(
      getByRole('heading', { name: /ReactHookFormSelect/i })
    ).toBeInTheDocument();
  });
});
