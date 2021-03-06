import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Pagination from './Pagination';


describe('Tests for dropdown component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    const setPage = jest.fn();

    render(
      <Pagination pageQuantity={20} setPage={setPage} />
    );

    const el = screen.getByText("19");

    expect(el).toBeInTheDocument();
  });

  test('Should not render the component', () => {
    render(
      <Pagination />
    );

    const el = screen.queryByTestId('pagination-test');

    expect(el).not.toBeInTheDocument();
  });

  test('Should render the component with pagination scroll', () => {
    const setPage = jest.fn();

    render(
      <Pagination pageQuantity={20} setPage={setPage} />
    );

    const prev = screen.getByText('<');
    fireEvent.click(prev);

    const next = screen.getByText('>');
    fireEvent.click(next);

    expect(prev).toHaveAttribute('href')
    expect(next).toHaveAttribute('href');
  });
});
