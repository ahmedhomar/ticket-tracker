import "./App.scss";
import team from "./assets/data/team.js";
import TicketTilesContainer from "./components/TicketTilesContainer/TicketTilesContainer";

const App = () => {
  return (
    <>
      <div className="app">
        <header className="app__header">
          <h1 className="app__header__heading">Ticket Tracker</h1>
        </header>
        <section className="ticket-section">
          <TicketTilesContainer team={team} />
        </section>
      </div>
    </>
  );
};

export default App;

/* 
AS AN employee:

1.I WANT to keep a count of all the tickets I have completed
SO THAT I can manage my workflow

2.I WANT to be able to track the number of tickets my coworkers have completed
SO THAT I can compare the number of tickets we complete

Task:
 1.To create a ticket tracking system. 
 2.Each employee is on the data file and should be able to increment/decrement their ticket count.


Requirements:

1. Should be built in React
2. Each component should manage its own state
3. The components should be generated using a map()

Plan:

− Create the components you think you will need (at least an employee component, possibly more)
− Map over the data file below to create the components
− Pass data into them via props
− Use State to handle the increment and decrement of tickets
− Style it however you like, but don’t leave it blank.
*/

// .input-wrapper{
//   width: 4rem;
//   height: 4rem;
//   border-radius: 0.6rem/0.8rem;
//   background-color: $cAccent;
//   overflow: hidden;
//   box-shadow:
//     inset 0 0 0.8rem 0.1rem rgba(darken($cAccent, 20%), 0.2),
//     0 20px 30px -10px rgba(darken($cAccent, 20%), 0.26);
// }

// .input{
//   height: 100%;
//   width: 100%;
//   background: none;
//   border: none;
//   text-align: center;
//   color: #fff;
//   font-weight: 900;
//   font-size: 2rem;
//   outline: none;
//   transition-property: transform, opacity;
//   text-transform: linear;
//   transition-duration: 0.25s;
// }

// .button{
//   background: none;
//   border: none;
//   padding: 0.8rem;
//   color: rgba($cAccent, 0.35);
//   font-size: 1.6rem;
//   outline: none;
//   cursor: pointer;
//   transition: color 0.2s ease-in-out;

//   &:hover{
//     color: $cAccent;
//   }
// }
