import React, {useState, useRef} from 'react';
 
return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={PaymentResponse.onConfirm}/> )}
    </React.Fragment>
)

const nameInputRef = useRef();
const ageInputRef = useRef();

<input type="text" ref={nameInputRef} />
<input type="number" ref={ageInputRef} />

const enteredName = nameInputRef.current.value;
const enteredUserAge = ageInputRef.current.value;

