import { Box } from "@mui/material";
import Barchart from "../components/Barchart";
import Header from "../components/global/Header";

const Bar = () => {
  return (
    <Box m='20px'>
        <Header title='Bar Chart' subtitle='Simple Bar Chart' />
        <Box height='75vh'>
            <Barchart />
        </Box>
    </Box>
  )
}

export default Bar;