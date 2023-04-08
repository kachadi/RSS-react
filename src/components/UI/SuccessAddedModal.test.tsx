import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import SuccessAddedModal from './SuccessAddedModal';

describe('SuccessAddedModal component', () => {
  it('renders the About us component', () => {
    render(
      <SuccessAddedModal
        // eslint-disable-next-line react/jsx-no-bind
        onCloseModal={(): void => {
          throw new Error('Function not implemented.');
        }}
      />,
    );
  });
});
