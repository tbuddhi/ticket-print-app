import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import chart from '../assets/chart.png';

export const ChartWidget = () => {
    return (
        <>
            <div className="chartWidget">
                <div className='chartWidget__chart'>
                    <img src={chart} alt="Bar Chart" />
                </div>
                <div className='chartWidget__info'>
                    <span className='chartWidget__info--title'>
                        Similarity measures between molecules
                    </span>

                    <div className='chartWidget__info--numbers'>
                        <span className='chartWidget__info--percentage'>125%</span>
                        <span className='chartWidget__info--status'>
                            <span className='sIcon'><PlayArrowIcon color='success' /></span>
                            <span>10%</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
