import "./AllTicketTiles.scss";
import team from "../../assets/data/team.js";
import TicketTiles from "../TicketTiles/TicketTiles";

const AllTicketTiles = ({ team }) => {
  const employeeTicketJSX = team.map((teamMember) => {
    return (
      <>
        <p className="ticket-tiles__name" key={team.id}>
          {team.name}
        </p>
        <p className="ticket-tiles__role" key={team.id}>
          {team.role}
        </p>
      </>
    );
  });

  return (
    <>
      <div className="all-ticket-tiles">
        <TicketTiles />
      </div>
    </>
  );
};

export default AllTicketTiles;
