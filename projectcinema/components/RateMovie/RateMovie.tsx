//Material
import { Gauge, gaugeClasses  } from '@mui/x-charts/Gauge';
import { Box } from "@mui/material";

interface RateMovieProps { 
    width: number;
    height: number;
    rate: number; 
}

const RateMovie: React.FC<RateMovieProps> = ({width, height, rate}) => {
    return(
        <Box>
            <Gauge 
                width={width} 
                height={height} 
                value={rate} 
                aria-labelledby="rate_movie_label"
                text={`${Math.round(rate)}%`}
                sx={{
                    [`& text.${gaugeClasses.valueText}`]:  {
                        color: '#fff',
                        fontSize: 9,
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

export default RateMovie;