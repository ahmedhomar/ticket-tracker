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
