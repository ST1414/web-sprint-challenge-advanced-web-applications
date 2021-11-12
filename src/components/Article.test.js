import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react'; // Added
import userEvent from '@testing-library/user-event';

import Article from './Article';


const article = {
    id: 123,
    headline: "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: Date.now(),
    author:"",
    image: 134,
    summary: "Triple-digit temperatures led t.",
    body: "Inside the attic of a one-story gray house ."   
};
const handleDelete = () => {
    
}
const handleEditSelect = () => {

}

test('renders component without errors', () => {

    render(<Article key={article.id} article={article} handleDelete={handleDelete} handleEditSelect={handleEditSelect} />)

});

test('renders headline, author from the article when passed in through props', ()=> {

    render(<Article key={article.id} article={article} handleDelete={handleDelete} handleEditSelect={handleEditSelect} />)

    const headline = screen.getByTestId('headline');
    const author = screen.getByTestId('author');
    const summary = screen.getByTestId('summary');
    const body = screen.getByTestId('body');

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();

});

test('renders "Associated Press" when no author is given', ()=> {

    render(<Article key={article.id} article={article} handleDelete={handleDelete} handleEditSelect={handleEditSelect} />)

    const author = screen.getByText(/Associated Press/i);

    expect(author).toBeTruthy;

});

test('executes handleDelete when the delete button is pressed', ()=> {
    
});

//Task List:
//1. Complete all above tests. Create test article data when needed.