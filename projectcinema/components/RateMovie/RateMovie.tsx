//Material
import { Gauge, gaugeClasses  } from '@mui/x-charts/Gauge';
import { Box } from "@mui/material";

export default function RateMovie({rate}){
    return(
        <Box>
            <Gauge 
                width={100} 
                height={100} 
                value={rate} 
                aria-labelledby="battery_level_label"
                text={`${rate}%`}
                sx={{
                    [`& text.${gaugeClasses.valueText}`]:  {
                        color: '#FFFFFF'
                      },
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: 'rgba(77, 161, 79, 1)',
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: 'rgba(77, 161, 79, 0.5)',
                    },
                }}
            />  
        </Box>
    );
}