import { Box } from "@mui/material";
import Header from "../components/global/Header";
import PieChart from "../components/PieChart";

const Pie = () => {
  return (
    <Box m='20px' height="75vh" p="2px">
        <Header title='Pie Chart' subtitle='Simple Pie Chart'/>
        <PieChart />
    </Box>
  )
}

export default Pie;

