import {
  toast,
  ToastContainerProps,
  ToastOptions,
  ToastContent,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import * as S from './styles';

type IPropsShowToast = {
  type: 'success' | 'error' | 'warn';
  content: ToastContent;
  options?: ToastOptions;
};

export const showToast = ({
  type,
  content,
  options,
}: IPropsShowToast): void => {
  switch (type) {
    case 'success':
      toast.success(content, options);
      break;

    case 'warn':
      toast.warn(content, options);
      break;

    case 'error':
      toast.error(content, options);
      break;

    default:
      toast.info(content, options);
  }
};

const Toast = (props: ToastContainerProps): JSX.Element => (
  <S.Toastify {...props} />
);

export default Toast;
