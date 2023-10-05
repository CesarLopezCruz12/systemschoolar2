import React, { useState } from 'react';
import { Form, Button, Input , Select} from 'semantic-ui-react';
import styles from './CrearUsuario.module.scss';

export function FormularioAdministrador (){

    const [selectedFile, setSelectedFile] = useState(null);
    const [isButtonDisabled, setButtonDisabled] = useState(false); // Variable de estado


    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
    
    const handleTitleChange = (_, { value }) => {
      setSelectedTitle(value);
    };
    
    const handleSave = () => {
      console.log('Archivo:', selectedFile);
      setButtonDisabled(true);
    };
  return (
    <div className={styles.container}>
      <Form>
      
        <Form.Field>
          <label>Subir imagen de fotografía:</label>
          <Input type="file" onChange={handleFileChange} />
        </Form.Field>
        <Button primary className={styles.saveButton} onClick={handleSave}  disabled={isButtonDisabled}>
          Guardar
        </Button>
      </Form>
    </div>
  );
};