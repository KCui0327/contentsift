import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

const ToggleButton = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (val: boolean): void => {
        setChecked(val);
    };
    

    return (
        <ReactSwitch
            checked={checked}
            onChange={handleChange}
        />
    )
}

export default ToggleButton;