# Random Quote Generator

## Overview
This project is a simple React application that fetches and displays random quotes from an external API. Users can generate a new random quote by clicking a button. The application uses the `useState` and `useEffect` hooks from React to manage state and side effects.

## Installation

1. Clone the repository:
`git clone https://github.com/your-username/quote-generator.git
cd quote-generator`

2. Install dependencies:
`npm install`

3. Run the application:
`npm start`

## Code explanation

App.js

1. Imports:

- `useEffect` and `useState` are imported from React to manage component state and side effects.
- The CSS file `App.css` is imported for styling the application.

2. State Management:

- `quotes`: An object that stores the current quote and its author.
- `cat`: A string that represents the category of the quotes (not actively used in the current implementation).

3. getQuote Function:

- This is an asynchronous function that fetches a quote from the API based on the given category.
- The URL for the API request includes the category.
- The `fetch` function is used to make the GET request, with headers specifying the API key and content type.
- If the response is not okay, it logs an error.
- The response is converted to JSON, and the first quote's author and text are stored in the quotes state.
  
4. useEffect Hook:

- This hook calls getQuote whenever the cat state changes. It ensures that a quote is fetched whenever the category is updated.
  
5. Return Statement (JSX):

- The component returns JSX to render the UI.
- The UI consists of:
  - A container with the quote and author.
  - A button to generate a new random quote.
 
## Usage

- Generate a Random Quote:
  - Click the "GENERATE A RANDOM QUOTE!" button to fetch and display a new random quote from the API.
    
## File Structure
- App.js: The main component that contains the logic and UI for fetching and displaying quotes.
- App.css: The CSS file for styling the application.

## API Information
The application uses the [API Ninjas Quotes API](https://api-ninjas.com/api/quotes) to fetch quotes. You need to have an API key to use this API, which is included in the request headers.





