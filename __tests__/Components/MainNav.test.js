import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MainNav from '~/components/NavBar';

describe('Components/Header', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render Main Nav Without Crash', () => {
    const { findByTestId } = render(
      <BrowserRouter>
        <MainNav />
      </BrowserRouter>
    );

    expect(findByTestId('main-nav')).toMatchSnapshot();
  });
});
