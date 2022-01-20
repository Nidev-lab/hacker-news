import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Header from './Header';


describe('Tests for header component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {

    render(
      <Header />
    );

    const el = screen.getByAltText("logo-hacker-news");

    expect(el).toBeInTheDocument();
  });
});
