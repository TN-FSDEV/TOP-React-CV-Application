import { useState } from "react";
import '../styles/section.css';

export default function General({ initialInfo, onSave, onEdit, editMode }) {
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
                        Full Name: {' '}
                        <input name='name' type='text' value={info.name} onChange={handleInfo} />
                    </label>
                    <label>
                        Email: {' '}
                        <input name='email' type='email' value={info.email} onChange={handleInfo} />
                    </label>
                    <label>
                        Phone: {' '}
                        <input name='phone' type='tel' value={info.phone} onChange={handleInfo} />
                    </label>
                    <label>
                        Address: {' '}
                        <input name='address' type='text' value={info.address} onChange={handleInfo} />
                    </label>
                    <button onClick={() => onSave(info)}>Save</button>
                </>
            ) : (
                // edit below later to make it look cool
                <>
                    <label>
                        Full Name: {' '}
                        <input name='name' readOnly type='text' value={info.name} />
                    </label>
                    <label>
                        Email: {' '}
                        <input name='email' readOnly type='email' value={info.email} />
                    </label>
                    <label>
                        Phone: {' '}
                        <input name='phone' readOnly type='tel' value={info.phone} />
                    </label>
                    <label>
                        Address: {' '}
                        <input name='address' readOnly type='text' value={info.address} />
                    </label>
                    <button onClick={onEdit}>Edit</button>
                </>
            )
            }
        </>
    )
}

