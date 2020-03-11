import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Main from '~/pages/Main';

describe('Pages/Main', () => {
  it('Should Render Main Page Without Crash', () => {
    const { findByTestId } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    expect(findByTestId('pages-main')).toMatchSnapshot();
  });
});
