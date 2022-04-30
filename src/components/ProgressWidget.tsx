import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const ProgressWidget = () => {
    return (
        <>
            <div className="progressWidget">
                <div className='progressWidget__avatar'>
                    <ManageAccountsIcon color='primary' />
                </div>
                <div className='progressWidget__info'>
                    <span className='progressWidget__info--title'>
                        Adverse effect & contraindications
                    </span>

                    <div className='progressWidget__info--pWrapper'>
                        <span className='progressWidget__info--count'>546</span>
                        <span className='progressWidget__info--progressBar'>
                            <span className="pBar pBar1"></span>
                            <span className="pBar pBar2"></span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressWidget