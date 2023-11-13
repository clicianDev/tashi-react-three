import React from 'react';
import Data from './PartnersList.json'


function PartnersList() {
    return ( 
        <div className='grid grid-cols-3 lg:grid-flow-col my-5 text-center px-5 lg:px-36 w-auto'>
            {Data.map((item, index) => (
                <div key={index} className='m-auto'> 
                    <img width="100%" src= {`./images/partners/logo/${item.path}.svg`} />
                </div>
            ))}
        </div>
        );
}

export default PartnersList;