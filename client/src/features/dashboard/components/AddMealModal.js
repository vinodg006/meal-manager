import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  makeStyles,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { getFormattedDate } from "../../../common/utils/appUtils";

const useStyles = makeStyles({
  root: {
    display: "block",
    marginTop: "25px",
    maxWidth: 160,
  },
});

export default ({ addItem }) => {
  const classes = useStyles();
  const [modal, openModal] = useState(false);
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState(0);
  const [date, setDate] = useState(getFormattedDate(new Date().toISOString()));

  const resetForm = () => {
    setMeal("");
    setCalories(0);
    setDate(getFormattedDate(new Date().toISOString()));
  };

  const handleCancel = () => {
    openModal(false);
    resetForm();
  };

  const handleSubmit = () => {
    console.log(date, "datedatedate");
    addItem({ name: meal, calories, date });
    openModal(false);
    resetForm();
  };

  return (
    <div style={{ display: "inline", margin: " 0 40px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => openModal(true)}
      >
        Add Meal
      </Button>
      <Dialog
        open={modal}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Add Meal</DialogTitle>
        <DialogContent>
          <form noValidate>
            <TextField
              id="date"
              label="Date"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="meal"
              label="Meal"
              type="text"
              onChange={(e) => setMeal(e.target.value)}
              value={meal}
              classes={{
                root: classes.root,
              }}
            />
            <FormControl
              variant="outlined"
              classes={{
                root: classes.root,
              }}
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Calories
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">Cal</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            disabled={meal.replace(/\s/g, "") === ""}
          >
            Add Meal
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
