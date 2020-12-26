import Button from "@material-ui/core/Button";
import React from "react";

const ProposalsRegistrationEnd = ({ etapes, isOwner }) => {


  if (!isOwner) {
    return (
      <div>
        attendez l'ouverture de la sessio de vote
      </div>
    );
  }

  return (
    <div>
      <h3>debut de session de vote </h3>

      <div>
        <Button
          type="button"
          onClick={() => etapes.votingSessionStart()}
        >
            cliquez ici </Button>
      </div>
    </div>
  );
};

export default ProposalsRegistrationEnd;
