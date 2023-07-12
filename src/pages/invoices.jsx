import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { colorTemplate } from "../theme";
import Header from "../components/global/Header";
import { mockDataInvoices } from "../data/mockData";

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport 
            csvOptions={{
                fileName: 'Invoice Report'
            }}
        />
      </GridToolbarContainer>
    );
  }
  

const Invoices = () => {
    const theme = useTheme();
    const colors = colorTemplate(theme.palette.mode);
    const Columns = [
        { 
            field: 'id', 
            headerName: 'ID',
        },
        { 
            field: 'name', 
            headerName: 'NAME', 
            flex: 1,
            cellClassName: 'name-column--cell',
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
            field: 'cost', 
            headerName: 'COST', 
            flex: 1,
            renderCell: (params) => (
                <Typography>
                    ${params.row.cost}
                </Typography>
            )
        },
        { 
            field: 'date', 
            headerName: 'DATE', 
            flex: 1,
        },
    ]
    
  return (
    <Box m='20px'>
        <Header title='INVOICES' subtitle='Invoice balance List'/>
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
                '& .MuiCheckbox-root': {
                    color: `${colors.greenAccent[200]} !important`,
                },
            }}
        >
            <DataGrid 
                checkboxSelection
                rows={mockDataInvoices}
                columns={Columns}
                slots={{
                    toolbar: CustomToolbar,
                }}
            />
        </Box>
    </Box>
  )
}

export default Invoices;