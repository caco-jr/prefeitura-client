import { render } from '@test/testUtils';

import MedicalAppointmentAdd from './Add';

describe('Add', () => {
  it('should render the heading', () => {
    const { getByRole } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <MedicalAppointmentAdd updateScreen={() => {}} />
    );

    expect(getByRole('heading', { name: /Add/i })).toBeInTheDocument();
  });
});
