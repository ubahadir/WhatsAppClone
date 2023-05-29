import React from "react";
import FontAwesome from "react-fontawesome";

import StyledStatus from "../elements/StyledStatus";
import StyledAvatar from "../elements/StyledAvatar";

const Status = (props: any): JSX.Element => {
  return (
    // notification styled status sol bölümde
    <StyledStatus color="blue">
      <StyledAvatar>
        <FontAwesome name="bell-slash" size="2x" className="icon--color" />
      </StyledAvatar>
      <div className="status--textContainer">
        <div className="text--big">Etre Averti(e) de nouveaux messages</div>
        <span className="text--small">
          Afficher les notifications ssur le vureau
        </span>
      </div>
    </StyledStatus>
  );
};

export default Status;
