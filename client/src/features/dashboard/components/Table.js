import React, { Fragment, useState, useEffect } from "react";
import MaterialTable from "material-table";
import AddMealModal from "./AddMealModal";
import {
  presentableItems,
  getFormattedDate,
} from "../../../common/utils/appUtils";
import appConstants from "../../../common/constants/appConstants";

export default ({ items, deleteItem, addItem, editItem }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(presentableItems(items));
  }, [items]);

  const onRowUpdate = (newData, oldData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        if (oldData) {
          if (typeof newData.date == "object")
            newData.date = getFormattedDate(newData.date.toISOString());

          editItem(oldData._id, newData);
        }
      }, 300);
    });

  const onRowDelete = (oldData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        deleteItem(oldData._id);
        resolve();
      }, 300);
    });

  return (
    //https://github.com/mbrn/material-table/pull/2369
    <MaterialTable
      title={
        <Fragment>
          {"All Meals"}
          <AddMealModal addItem={addItem} />
        </Fragment>
      }
      columns={[
        { title: "Date", field: "date", type: "date" },
        { title: "Meal", field: "name" },
        { title: "Calories", field: "calories", type: "numeric" },
      ]}
      data={data}
      options={{
        filtering: true,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
        },
        rowStyle: (rowData) => ({
          backgroundColor:
            rowData.calCount < appConstants.CALORIES_THRESHOLD
              ? "green"
              : "red",
        }),
      }}
      style={{
        position: "relative",
        width: "80%",
        margin: "30px auto",
        padding: "15px",
        borderRadius: "15px",
        opacity: 0.9,
      }}
      editable={{
        onRowUpdate,
        onRowDelete,
      }}
    />
  );
};
