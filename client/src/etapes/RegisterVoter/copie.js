import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import { makeStyles } from "@material-ui/core/styles";
//import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const RegisterVoter = ({ actions, isOwner }) => {
  const useStyles = makeStyles((theme) => ({
    container: { marginTop: theme.spacing(4) },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    form: {
      justifyContent: "center",
      display: "flex",
    },
    button: {
      marginTop: theme.spacing(1),
    },
    formGroup: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
    },
    startRegistration: {
      marginTop: theme.spacing(5),
    },
  }));
  const classes = useStyles();
  const [address, setAddress] = useState("");

  if (!isOwner) {
    return (
      <div className={classes.container}>
        Only owner can register voters, come back later !
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <h3>Ajouter une adresse </h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await actions.registerVoter(address);
        }}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <FormGroup className={classes.formGroup}>
          <TextField
            onInput={(e) => setAddress(e.target.value)}
            className={classes.textField}
            label="Ajouter Adresse"
          />
          <Button
            variant="outlined"
            className={classes.button}
            color="blue"
            type="submit"
          >
            Ajouter
          </Button>
        </FormGroup>
      </form>
      <div className={classes.startRegistration}>
        <Button
          disabled={!isOwner}
          variant="contained"
          color="primary"
          type="button"
          onClick={() => actions.startProposalsRegistration()}
        >
            registrationSessionStart
        </Button>
      </div>
    </div>
  );
};

export default RegisterVoter;
