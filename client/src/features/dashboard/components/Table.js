import React, { Fragment, useState, useEffect } from "react";
import MaterialTable from "material-table";
import AddMealModal from "./AddMealModal";
import {
  presentableItems,
  getFormattedDate,
} from "../../../common/utils/appUtils";

export default ({ items, deleteItem, addItem, editItem }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(presentableItems(items));
  }, [items]);
  return (
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
          backgroundColor: rowData.calCount < 2000 ? "green" : "red",
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
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                if (typeof newData.date == "object")
                  newData.date = getFormattedDate(newData.date.toISOString());

                editItem(oldData._id, newData);
              }
            }, 300);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              deleteItem(oldData._id);
              resolve();
            }, 300);
          }),
      }}
    />
  );
};
