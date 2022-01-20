import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';


describe('Tests for Content Card component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    const data = [{
      author: "bluedino",
      created_at: "2022-01-20T01:52:01.000Z",
      objectID: "30003270",
      story_title: "Before wave of train thefts, Union Pacific laid off some of its police force",
      story_url: "https://www.lataco.com/union-pacific-theft-police-laid-off/"
    }]

    render(
      <Card data={data} favorite={[]}/>,
    );

    const el = screen.getByText("Before wave of train thefts, Union Pacific laid off some of its police force");

    expect(el).toBeInTheDocument();
  });

  test('Should not render the component without story_title prop', () => {
    const data = [{
      author: "bluedino",
      created_at: "2022-01-20T01:52:01.000Z",
      objectID: "30003270",
    }]

    render(
      <Card data={data} favorite={[]} />,
    );
    
    const title = screen.queryByTestId('data-title');

    expect(title).not.toBeInTheDocument();
  });

  test('Should render the component with icon like', () => {
    const data = [{
      author: "bluedino",
      created_at: "2022-01-20T01:52:01.000Z",
      objectID: "30003270",
      story_title: "Before wave of train thefts, Union Pacific laid off some of its police force",
      story_url: "https://www.lataco.com/union-pacific-theft-police-laid-off/"
    }]

    const favorite = [{
      author: "bluedino",
      created_at: "2022-01-20T01:52:01.000Z",
      objectID: "30003270",
      story_title: "Before wave of train thefts, Union Pacific laid off some of its police force",
      story_url: "https://www.lataco.com/union-pacific-theft-police-laid-off/"
    }]

    render(
      <Card data={data} favorite={favorite} />,
    );

    const img = screen.getByAltText('fav-icon');

    expect(img).toBeInTheDocument();
  });

  test('Should render the component with click in button', () => {
    const data = [{
      author: "bluedino",
      created_at: "2022-01-20T01:52:01.000Z",
      objectID: "30003270",
      story_title: "Before wave of train thefts, Union Pacific laid off some of its police force",
      story_url: "https://www.lataco.com/union-pacific-theft-police-laid-off/"
    }]

    const favorite = [{
      author: "bluedino",
      created_at: "2022-01-20T01:52:01.000Z",
      objectID: "30003270",
      story_title: "Before wave of train thefts, Union Pacific laid off some of its police force",
      story_url: "https://www.lataco.com/union-pacific-theft-police-laid-off/"
    }]

    render(
      <Card data={data} favorite={favorite} />,
    );

    const img = screen.getByAltText('fav-icon');

    fireEvent.click(img);

    expect(img).toBeDefined();
  });
});
