import { useState } from "react";
import '../styles/section.css';

export default function Work({ initialInfo, onSave, onCancel, onEdit, editMode }) {
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
                        Company: {' '}
                        <input name='company' type='text' value={info.company} onChange={handleInfo} />
                    </label>
                    <label>
                        Position: {' '}
                        <input name='position' type='text' value={info.position} onChange={handleInfo} />
                    </label>
                    <label>
                        Description: {' '}
                        <textarea name='desc' type='text' value={info.desc} onChange={handleInfo} cols={40} rows={6}/>
                    </label>
                    <label>
                        Start: {' '}
                        <input name='start' type='text' value={info.start} onChange={handleInfo}/>
                    </label>
                    <label>
                        End: {' '}
                        <input name='end' type='text' value={info.end} onChange={handleInfo}/>
                    </label>
                    <button onClick={() => onSave(info)}>Save</button>
                    <button onClick={onCancel}>Remove</button>
                </>
            ) : (
                <>
                    <label>
                        Company : {' '}
                        <input name='company' readOnly type='text' value={info.company} />
                    </label>
                    <label>
                        Position: {' '}
                        <input name='position' readOnly type='email' value={info.position} />
                    </label>
                    <label>
                        Description: {' '}
                        <textarea name='desc' readOnly type='text' value={info.desc} cols={50} rows={6}/>
                    </label>
                    <label>
                        Start: {' '}
                        <input name='start' readOnly type='tel' value={info.start} />
                    </label>
                    <label>
                        End: {' '}
                        <input name='end' readOnly type='text' value={info.end} />
                    </label>
                    <button onClick={onEdit}>Edit</button>
                </>
            )
            }
        </>
    )
}