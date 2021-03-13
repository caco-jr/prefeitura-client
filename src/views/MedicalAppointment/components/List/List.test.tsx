import { render } from '@test/testUtils';

import MedicalAppointmentList from './List';

describe('List', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<MedicalAppointmentList list={[]} />);

    expect(getByRole('heading', { name: /List/i })).toBeInTheDocument();
  });
});
