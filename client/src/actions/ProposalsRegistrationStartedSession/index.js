import React, { useState } from "react";
import Button from "@material-ui/core/Button";



const ProposalsRegistrationStarted = ({ etapes, isOwner }) => {
  const [proposal, setProposal] = useState("");

  return (
    <div>
      <h3>Ajouter une proposition</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await etapes.addProposals(proposal);
        }}
        noValidate
        autoComplete="off"
      >
          <input
            multiline={true}
            onInput={(e) => setProposal(e.target.value)}
            label="Write your proposal"

          />
          <Button
            type="submit"
          >
            Ajouter
          </Button>
      </form>

      <div>
        <Button
          disabled={!isOwner}
          type="button"
          onClick={() => etapes.proposalsRegistrationEnd()}
        >
         Finir la session d'enregistrement
        </Button>
      </div>
    </div>
  );
};

export default ProposalsRegistrationStarted;
