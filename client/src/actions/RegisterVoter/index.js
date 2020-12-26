import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const RegisterVoter = ({ etapes, isOwner }) => {

  const [address, setAddress] = useState(""); //reinitialisation de l'etat initial . les adresses

  if (!isOwner) {
    return (
      <div>
        Attendez la prochaine etape !
      </div>
    );
  }

  return (
    <div>
      <h3>Ajouter une adresse </h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await etapes.registerVoter(address);
        }}
        noValidate
        autoComplete="off"
      >
        <form>
          <input
            onInput={(e) => setAddress(e.target.value)}
            label="Ajouter Adresse"
          />
          <Button
            type="submit"
          >
            Ajouter
          </Button>
        </form>
      </form>
      <div>

        <Button
          disabled={!isOwner}
          type="button"


          onClick={() => etapes.proposalsRegistrationStartedSession()}
        >
      enregistrement  des propositions
        </Button>
      </div>
    </div>
  );
};

export default RegisterVoter;
