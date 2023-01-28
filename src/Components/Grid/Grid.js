import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Grid = ({ filterData }) => {
    const [gridData, setGridData] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/users`)
            .then(response => response.json())
            .then(data => setGridData(data));
        console.log(gridData);
    }, []);


    const columnDefs = [
        { headerName: "ID", field: "id", sortable: true, resizable: true },
        { headerName: "First Name", field: "firstName", sortable: true, resizable: true },
        { headerName: "Last Name", field: "lastName", sortable: true, resizable: true },
        { headerName: "Age", field: "age", sortable: true, resizable: true },
        { headerName: "Gender", field: "gender", sortable: true, resizable: true },
        { headerName: "Email", field: "email", sortable: true, resizable: true },
        { headerName: "Phone", field: "phone", sortable: true, resizable: true },
    ];


    return (
        <div className="ag-theme-material" style={{ height: '100vh', width: '100%' }}>
            <AgGridReact
                columnDefs={columnDefs}
                //Display rows based on filterData
                rowData={gridData}
                pagination={true}
                paginationPageSize={30}
                onGridReady={params => params.api.sizeColumnsToFit()}
            />
        </div>
    );
}

export default Grid;
