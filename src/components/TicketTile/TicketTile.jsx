import "./TicketTile.scss";
import CounterTile from "../CounterTile/CounterTile";

const TicketTile = ({ name, role }) => {
  return (
    <div className="ticket-tile">
      {name} <br />
      <br />
      {role}
      <div className="counter-container">
        <CounterTile />
      </div>
    </div>
  );
};

export default TicketTile;
