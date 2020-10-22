import React from 'react';

const ConfirmSwap = ({selectedProduct}) => {
    return (
        <div>
            <h3>Confirm swap</h3>
            <p>{selectedProduct.cost}</p>
        </div>
    );
};

export default ConfirmSwap;