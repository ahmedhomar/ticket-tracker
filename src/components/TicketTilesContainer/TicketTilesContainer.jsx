import "./TicketTilesContainer.scss";

import TicketTile from "../TicketTile/TicketTile";

const TicketTilesContainer = ({ team }) => {
  // make one tile for each employee
  const employeeTicket = team.map((teamMember) => {
    return <TicketTile name={teamMember.name} role={teamMember.role} />;
  });

  return <div className="ticket-tiles-container">{employeeTicket}</div>;
};

export default TicketTilesContainer;
