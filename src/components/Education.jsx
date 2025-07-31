import { useState } from "react";
import '../styles/section.css';

export default function Education({ initialInfo, onSave, onCancel, onEdit, editMode }) {
    const [info, setInfo] = useState(initialInfo);

    function handleInfo(e) {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        });
    }

    return (
        <>
            {editMode ? (
                <>
                    <label>
                        School: {' '}
                        <input name='school' type='text' value={info.school} onChange={handleInfo} required/>
                    </label>
                    <label>
                        Degree: {' '}
                        <input name='degree' type='text' value={info.degree} onChange={handleInfo} required/>
                    </label>
                    <label>
                        Start Date: {' '}
                        <input name='start' type='text' value={info.start} onChange={handleInfo} required/>
                    </label>
                    <label>
                        End Date: {' '}
                        <input name='end' type='text' value={info.end} onChange={handleInfo} required/>
                    </label>
                    <button onClick={() => onSave(info)}>Save</button>
                    <button onClick={onCancel}>Remove</button>
                </>
            ) : (
                <>
                    <label>
                        School: {' '}
                        <input name='school' readOnly type='text' value={info.school}/>
                    </label>
                    <label>
                        Degree: {' '}
                        <input name='degree' readOnly type='text' value={info.degree}/>
                    </label>
                    <label>
                        Start Date: {' '}
                        <input name='start' readOnly type='text' value={info.start}/>
                    </label>
                    <label>
                        End Date: {' '}
                        <input name='end' readOnly type='text' value={info.end}/>
                    </label>
                    <button onClick={onEdit}>Edit</button>
                </>
            )
            }
        </>
    )
}