import React, { useState } from 'react';
import { Form, Button, Input , Select} from 'semantic-ui-react';

import styles from './CrearUsuario.module.scss';
import { CrearUsuario } from './CrearUsuario';

const opcionesTitulo = [
    { key: '1', text: 'Sistemas', value: '1' },
    { key: '2', text: 'Programación', value: '2' },
  ];

export function FormularioEstudiante (){

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedCarrer, setSelectedCarrer] = useState('');
    const [selectedID, setSelectedID] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false); // Variable de estado
   

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };

    const handleIDChange = (_, { value }) => {
        setSelectedID(value);
      };
    
    const handleCarrerChange = (_, { value }) => {
      setSelectedCarrer(value);
    };
    
    const handleSave = () => {
      // Aquí puedes manejar la lógica para guardar la imagen y el título
      console.log('Carrera:', selectedCarrer);
      console.log('Archivo:', selectedFile);
      console.log('Matricula:',selectedID);
      setButtonDisabled(true);
    
    };
  return (
    <div className={styles.container}>
      <Form>
      <Form.Field>
          <label>Carrera:</label>
          <Select
            options={opcionesTitulo}
            placeholder="Selecciona un título"
            value={selectedCarrer}
            onChange={handleCarrerChange}
          />
        </Form.Field>
        <Form.Field>
            <label>Matricula:</label>
            <Input type='text' placeholder="Mátricula" value={selectedID} onChange={handleIDChange}></Input>
        </Form.Field>
        <Form.Field>
          <label>Subir imagen:</label>
          <Input type="file" value={selectedFile} onChange={handleFileChange} />
        </Form.Field>
        <Button primary className={styles.saveButton} onClick={handleSave} disabled={isButtonDisabled} >
          Guardar
        </Button>
      </Form>
      
    </div>
  );
};