import { render } from '@test/testUtils';

import MedicalAppointmentAdd from './Add';

describe('Add', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<MedicalAppointmentAdd />);

    expect(getByRole('heading', { name: /Add/i })).toBeInTheDocument();
  });
});
