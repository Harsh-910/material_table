import MaterialTable from "material-table";
// import { forwardRef } from 'react';

// import AddBox from '@material-ui/icons/AddBox';

const table = () => {
  // const tableIcons = {
  //   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  // }
  return (
    <div>
      <h1>Table Data</h1>
      <MaterialTable
        // icons={tableIcons}
        options={{
          exportButton: true,
          // filtering: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF"
          },
          rowStyle: {
            backgroundColor: "#EEE"
          },
          selection: true
        }}
        columns={[
          { title: "First Name", field: "name" },
          { title: "Last Name", field: "surname" },
          { title: "Birth Year", field: "birthYear" },
          { title: "Birth City", field: "birthCity" }
        ]}
        data={[
          {
            name: "Abc",
            surname: "Def",
            birthYear: 1987,
            birthCity: 63
          }
        ]}
        title="Demo Title"
      />
    </div>
  );
};

export default table;
