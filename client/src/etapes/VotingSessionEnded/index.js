import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";



const VotingSessionEnded = ({ etapes, isOwner }) => {

  if (!isOwner) {
    return <div>Only owner can start counting votes, come back later !</div>;
  }

  return (
    <div>
      <div>
        <Button
          type="button"
          onClick={() => etapes.compteVotes()}
        >
         Compter les  votes
        </Button>
      </div>
    </div>
  );
};

export default VotingSessionEnded;
