import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Toastify = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: var(--border-radius);

    &-body {
      padding: 0 8px;
      font-size: var(--text-md);
    }

    &--info {
      background: 'rgb(51, 102, 255)';
    }

    &--success {
      background: var(--success-color);
    }

    &--warning {
      background: var(--warning-color);
    }

    &--error {
      background: var(--error-color);
    }
  }
`;
