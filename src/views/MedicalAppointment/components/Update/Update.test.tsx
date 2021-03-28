import { render } from '@test/testUtils';

import MedicalAppointmentUpdate from './Update';

describe('Add', () => {
  it('should render the heading', () => {
    const { getByRole } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <MedicalAppointmentUpdate updateScreen={() => {}} />
    );

    expect(getByRole('heading', { name: /Add/i })).toBeInTheDocument();
  });
});
