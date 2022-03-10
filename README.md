# Ticket-Tracker

This is the repo for a ticket-tracker application that I built using Create React App as part of the Nology Consultancy Course.

The Brief:

1."As an employee I want to keep a count of all the tickets I have completed
so that I can manage my workflow."

2."As an employee I want to be able to track the number of tickets my coworkers have completed
so that I can compare the number of tickets we complete."

Your task is to create a ticket tracking system. Each employee is on the data file and should be able to increment/decrement their ticket count.

The requirements:

1.Should be built in React
2.Each component should manage its own state
3.The components should be generated using a .map().

I created a CounterTile and TicketTile components. I then put these components in a AllTicketTiles container in which the .map() method is applied to the [team] (from the data file) to output a ticket tile per employee. The data was passed in as props using object destructuring.

I used React State to handle the increment and decrement of tickets inside CounterTile. Here I made sure that tickets can never be a negative value.

The app was styled using Sass (SCSS) with a grid applied to the AllTicketTiles Container.

The Design:

<img src="./src/assets/images/ticket-tracker-img.png>">

The Code:
<img src="./src/assets/images/counter-tile.png>">

<img src="./src/assets/images/app-jsx.png>">
