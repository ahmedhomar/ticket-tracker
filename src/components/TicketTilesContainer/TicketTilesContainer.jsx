import "./TicketTilesContainer.scss";

import TicketTile from "../TicketTile/TicketTile";

const TicketTilesContainer = ({ team }) => {
  // make one tile for each employee
  const employeeTicket = team.map((teamMember) => {
    return (
      <TicketTile name={teamMember.name} role={teamMember.role} />
      // <>
      //   <TicketTile>
      //     <p className="ticket-tiles__name" key={id}>
      //       {name}
      //     </p>
      //     <p className="ticket-tiles__role" key={id}>
      //       {role}
      //     </p>
      //   </TicketTile>
      // </>
    );
  });

  return <div className="ticket-tiles-container">{employeeTicket}</div>;
};

export default TicketTilesContainer;
