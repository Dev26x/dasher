import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { colorTemplate } from "../theme";
import Header from "../components/global/Header";
import { mockDataContacts } from "../data/mockData";

const Team = () => {
    const theme = useTheme();
    const colors = colorTemplate(theme.palette.mode);
    const Columns = [
        { 
            field: 'id', 
            headerName: 'ID',
            flex: 0.5
        },
        { 
            field: 'registrarId', 
            headerName: 'REGISTRAR ID',
        },
        { 
            field: 'name', 
            headerName: 'NAME', 
            flex: 1,
            cellClassName: 'name-column--cell',
        },
        { 
            field: 'age', 
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
        },
        { 
            field: 'email', 
            headerName: 'Email', 
            flex: 1,
        },
        { 
            field: 'phone', 
            headerName: 'Phone Number', 
            flex: 1,
        },
        { 
            field: 'address', 
            headerName: 'ADDRESS', 
            flex: 1,
        },
        { 
            field: 'city', 
            headerName: 'CITY', 
            flex: 1,
        },
        { 
            field: 'zipCode', 
            headerName: 'ZIP CODE', 
            flex: 1,
        },
    ]
    
  return (
    <Box m='20px'>
        <Header title='CONTACTS' subtitle='Contact List for future reference'/>
        <Box m='40px 0 0 0 ' height='75vh' 
            sx={{
                '& .MuiDataGrid-root': {
                    border: 'none',
                },
                '& .MuiDataGrid-cell': {
                    borderBottom: 'none',
                },
                '& .name-column--cell': {
                    color: colors.greenAccent[300],
                },
                '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: 'none',
                },
                '& .MuiDataGrid-virtualScroller': {
                    backgroundColor: colors.primary[400],
                },
                '& .MuiDataGrid-footerContainer': {
                    borderTop: 'none',
                    backgroundColor: colors.blueAccent[700],
                },
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                    color: `${colors.grey[100]} !important`,
                },
            }}
        >
            <DataGrid 
                rows={mockDataContacts}
                columns={Columns}
                slots={{ toolbar: GridToolbar }}
            />
        </Box>
    </Box>
  )
}

export default Team;