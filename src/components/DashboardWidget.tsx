import React from 'react'
import { ChartWidget } from './ChartWidget'
import ProgressWidget from './ProgressWidget'
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const DashboardWidget = () => {
    return (
        <>
            <div className='btnHome-wrapper'>
                <Link to="/"><HomeOutlinedIcon sx={{ color: 'white' }} /></Link>
            </div>
            <div className="widget-wrapper">
                <ProgressWidget />
                <ChartWidget />
            </div>
        </>
    )
}


export default DashboardWidget