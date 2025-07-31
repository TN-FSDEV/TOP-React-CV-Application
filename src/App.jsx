import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import Work from "./components/Work.jsx";
import './styles/App.css'

function App() {
    const [field, setField] = useState({
        0: {
            type: 'general',
            info: null,
            isEditing: true
        }
    });

    function handleAdd(key) {
        const hasBlankEntry = Object.values(field).some(
            (entry) => entry.type === key && entry.info === null
        );
        if (hasBlankEntry) return;
        const newId = crypto.randomUUID();
        setField({
            ...field, 
            [newId]: {
                type: key, 
                info: null,
                isEditing: true
            }
        });
    }

    function handleSave(idToSave, newInfo) {
        setField(
            {...field, 
                [idToSave]: {
                    ...field[idToSave],
                    info: newInfo,
                    isEditing: false
                }
            });
        // toggleEdit(idToSave)
    }

    function handleCancel(idToCancel) {
        const newField = {...field};
        delete newField[idToCancel];
        setField(newField);
    }

    function toggleEdit(idToEdit) {
        const editField = {
            ...field, 
            [idToEdit]: {
                ...field[idToEdit],
                isEditing: !field[idToEdit].isEditing
            }
        };
        setField(editField);
    }

    return (
        <main>
        <section>
            <fieldset>
                <legend>General Info</legend>
                {Object.entries(field)
                .filter(([, entry]) => entry.type === 'general')
                .map(([id, entry]) => (
                    <div key={id}>
                        <General 
                            initialInfo={entry.info || { name: '', email: '', phone: '', address: '' }}
                            onSave={(data) => handleSave(id, data)}
                            onEdit={() => toggleEdit(id)}
                            editMode={entry.isEditing}
                        />
                    </div>
                ))}   
            </fieldset>
            <fieldset>
                <legend>Education</legend>
                {Object.entries(field)
                .filter(([, entry]) => entry.type === 'edu')
                .map(([id, entry]) => (
                    <div key={id}>
                        <Education 
                            initialInfo={entry.info || { school: '', degree: '', start: '', end: '' }}
                            onSave={(data) => handleSave(id, data)}
                            onCancel={() => handleCancel(id)}
                            onEdit={() => toggleEdit(id)}
                            editMode={entry.isEditing}
                        />
                    </div>
                ))}
                <button onClick={() => handleAdd('edu')}>Add</button>
            </fieldset>
            <fieldset>
                <legend>Work Experience</legend>
                {Object.entries(field)
                .filter(([, entry]) => entry.type === 'work')
                .map(([id, entry]) => (
                    <div key={id}>
                        <Work 
                            initialInfo={entry.info || { company: '', position: '', desc: '', start: '', end: ''}}
                            onSave={(data) => handleSave(id, data)}
                            onCancel={() => handleCancel(id)}
                            editMode={entry.info === null}
                        />
                    </div>
                ))}
                <button onClick={() => handleAdd('work')}>Add</button>
            </fieldset>
        </section>
        <section>
  <div>
    <h3>General Information</h3>
    {Object.entries(field)
      .filter(([, entry]) => entry.type === 'general' && entry.info)
      .map(([id, entry]) => (
        <p key={id}>
          <strong>{entry.info.name}</strong>
          <span>{entry.info.email} | {entry.info.phone}</span>
          <span>{entry.info.address}</span>
        </p>
      ))}
  </div>

  <div>
    <h3>Education</h3>
    {Object.entries(field)
      .filter(([, entry]) => entry.type === 'edu' && entry.info)
      .map(([id, entry]) => (
        <p key={id}>
          <strong>{entry.info.school}</strong>
          <span>{entry.info.degree}</span>
          <span>{entry.info.start} – {entry.info.end}</span>
        </p>
      ))}
  </div>

  <div>
    <h3>Work Experience</h3>
    {Object.entries(field)
      .filter(([, entry]) => entry.type === 'work' && entry.info)
      .map(([id, entry]) => (
        <p key={id}>
          <strong>{entry.info.company}</strong>
          <span>{entry.info.position}</span>
          <span>{entry.info.start} – {entry.info.end}</span>
          <span>{entry.info.desc}</span>
        </p>
      ))}
  </div>
</section>

        </main>
    );
}

export default App;
