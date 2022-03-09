import "./TicketTile.scss";
import CounterTile from "../CounterTile/CounterTile";

const TicketTile = ({ name, role }) => {
  return (
    <>
      <div className="ticket-tiles">
        {name} <br />
        {role}
      </div>
      <div className="counter-container">
        <CounterTile />
      </div>
    </>
  );
};

export default TicketTile;
