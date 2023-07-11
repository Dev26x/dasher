import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { colorTemplate } from "../theme";
import Header from "../components/global/Header";
import { mockDataTeam } from "../data/mockData";


const Team = () => {
    const theme = useTheme();
    const colors = colorTemplate(theme.palette.mode);
    const Columns = [
        { 
            field: 'id', 
            headerName: 'ID'
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
            field: 'access', 
            headerName: 'Access Level', 
            flex: 1,
            renderCell: ({ row: { access }}) => {
              return (
                        <Box
                            width='60%'
                            m='0 auto'
                            display='flex'
                            justifyContent='center'
                            backgroundColor={
                                access === 'admin'
                                ? colors.greenAccent[600]
                                : colors.greenAccent[700]
                            }
                            borderRadius='4px'
                       >
                           {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
                           {access === 'manager' && <SecurityOutlinedIcon />}
                           {access === 'user' && <LockOpenOutlinedIcon />}
                          <Typography>
                             {access}
                          </Typography>
                       </Box>
                   )
            },
        },
    ]
    
  return (
    <Box>
        <Header title='TEAM' subtitle='Managing the team members'/>
        <Box>
            <DataGrid 
                rows={mockDataTeam}
                columns={Columns}
            />
        </Box>
    </Box>
  )
}

export default Team;