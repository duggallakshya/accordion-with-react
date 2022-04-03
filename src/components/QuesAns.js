import React, {useState} from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const QuesAns = ({question, correct_answer}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className={!show? "inner-div-close": "inner-div-open"}>
                <p onClick={() => setShow(!show)}> {!show? <AddCircleIcon className="circle-icon"/> : <RemoveCircleIcon className="circle-icon"/>}</p>
                <h3>{question}</h3>
            </div>
            { show && <p className="answer">{correct_answer}</p> }
        </>
    )
}

export default QuesAns;