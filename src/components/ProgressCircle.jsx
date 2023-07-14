import { Box, useTheme } from "@mui/material";
import { colorTemplate } from "../theme";

import React from 'react'

const ProgressCircle = ({ progress='0.75', size='40' }) => {
    const theme = useTheme();
    const colors = colorTemplate(theme.palette.mode);
    const angles = progress * 360;

  return (
    <Box 
        sx={{
            background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angles}deg, ${colors.blueAccent[500]}
                    ${angles}deg 360deg),
                    ${colors.greenAccent[500]}
            `,
            borderRadius: '50%',
            width: `${size}px`,
            height: `${size}px`,
        }}
    />
  )
}

export default ProgressCircle;