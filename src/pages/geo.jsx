import { Box, useTheme } from "@mui/material";
import Header from "../components/global/Header";
import GeoChart from "../components/GeoChart";
import { colorTemplate } from "../theme";

const Geo = () => {
    const theme = useTheme();
    const colors = colorTemplate(theme.palette.mode)

  return (
    <Box m='20px'>
        <Header title='Geography Chart' subtitle='Simple Geography Chart'/>
        <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
          <GeoChart />
        </Box>
    </Box>
  )
}

export default Geo;