import "./TicketTiles.scss";

const TicketTiles = ({ teamArr }) => {
  return (
    <>
      <div className="ticket-tiles">
        <p className="ticket-tiles__role">{teamArr.name}</p>
        <p className="ticket-tiles__role">{teamArr.role}</p>
      </div>
    </>
  );
};

export default TicketTiles;
