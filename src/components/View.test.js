import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import '@testing-library/jest-dom';


import articleService from '../services/articleServices';
jest.mock('../services/articleServices')
const testZeroArticles = [];
const testThreeArticles = [
    {
        id: 1,
        headline: "Less than half of Seattle homes ...",
        createdOn: Date.now(),
        author:"Jon Doe",
        image: 134,
        summary: "Triple-digit temperatures ...."   
    },
    {
        id: 2,
        headline: "Community College of Philadelphia ...",
        createdOn: Date.now(),
        author: "Jon Doe",
        image: 175,
        summary: "The requirement, which will allow exemptions ...",
        body: "The Pennsylvania State System ..."
    },
    {
        headline: "A tropical depression could ...",
        id: 3,
        createdOn: Date.now(),
        author: "Jon Doe",
        image: 171,
        summary: "Forecasters said the system will likely ...",
        body: "Forecasters continue to monitor a disturbance in ..."
    } 
]

test("renders zero articles without errors", async () => {
    // * [ ] Build a test that shows the `View` component can render zero articles without errors. Make sure the mock service called made when View mounts.
    
    // render(<View  />)
    // articleService.mockResolvedValueOnce(testZeroArticles);

    // const header = await screen.findByText(/view articles/i);
    // console.log('VIEW TEST 1.1 - Header: ', header);

    // const articles = await screen.findByTestId('view-article');
    // console.log('VIEW TEST 1.2 - Test ID: ', articles);

    // const authors = await screen.findAllByText(/jon doe/i);
    // console.log('VIEW TEST 1.3 - Authors: ', authors);
});

test("renders three articles without errors", async ()=> {
    // * [ ] Build a test that shows the `View` component can render three articles without errors. Make sure the mock service called made when View mounts.
   
    articleService.mockResolvedValueOnce(testThreeArticles);
    render(<View />);

    const header = await screen.findByText(/view articles/i);
    console.log('VIEW TEST 2.1 - Header: ', header);

    const articles = await screen.findByTestId('view-article');
    console.log('VIEW TEST 2.2 - Test ID: ', articles);

    const authors = await screen.findAllByText(/jon doe/i);
    console.log('VIEW TEST 2.3 - Authors: ', authors);

});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.