import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import InputRadio from './InputRadio';


describe('Tests for deopdown component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    const setIsFav = jest.fn();

    render(
      <InputRadio setIsFav={setIsFav} isFav={true} />
    );

    const el = screen.getByText("All");

    expect(el).toBeInTheDocument();
  });

  test('Should not render the component', () => {
    render( 
      <InputRadio />
    );

    const el = screen.queryByTestId('input-radio');

    expect(el).not.toBeInTheDocument();
  });

  test('Should render the component with click in option 1', () => {
    const setIsFav = jest.fn();

    render(
      <InputRadio setIsFav={setIsFav} />
    );

    const label = screen.getByTestId('option-1');

    fireEvent.click(label);

    expect(label).toBeDefined();
  });
});
