import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';


describe('Tests for deopdown component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    const onChangeFn = jest.fn();

    render(
      <Dropdown handleSelectChange={onChangeFn}/>
    );

    const el = screen.getByText("Angular");

    expect(el).toBeInTheDocument();
  });

  test('Should not render the component', () => {
    render(
      <Dropdown />
    );

    const el = screen.queryByTestId('data-title');

    expect(el).not.toBeInTheDocument();
  });
});
