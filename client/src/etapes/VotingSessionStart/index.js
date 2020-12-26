import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";



const getProposals = async (totalProposals, etapes, setProposals) => {
  const results = [];

  for (let i = 1; i < totalProposals; i++) {
    const description = await etapes.getProposal(i);

    results.push(
      <div key={i}>
        <div>
          <Button
            onClick={() => etapes.vote(i)}
          >
            Voter
          </Button>
        </div>
        <div>{description}</div>
      </div>
    );
  }

  setProposals(results);
};

const RegisterVoter= ({ totalProposals, etapes, isOwner }) => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    getProposals(totalProposals, etapes, setProposals);
  }, [totalProposals, etapes]);

  return (
    <div>
    <div>{proposals}</div>

    <div>
      <Button
        disabled={!isOwner}
        type="button"
        onClick={() => etapes.votingSessionEnded()}
      >
         End vote session
      </Button>
    </div>
  </div>
  );
};

export default RegisterVoter;
