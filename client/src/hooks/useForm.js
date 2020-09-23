// write your custom hook here to control your checkout form

import { useState } from 'react';

const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        console.log("Handle changes running");
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return [values, handleChanges];
}

export default useForm;
