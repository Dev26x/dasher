import { Box, useTheme } from "@mui/material";
import Barchart from "../components/Barchart";
import Header from "../components/global/Header";
import useMediaQuery from '@mui/material/useMediaQuery';

const Bar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box m='20px' maxWidth={mobile? 'undefined' : '850px'} ml={mobile? 'undefined' : '80px'}>
        <Header title='Bar Chart' subtitle='Simple Bar Chart' />
        <Box height='75vh'>
            <Barchart />
        </Box>
    </Box>
  )
}

export default Bar;