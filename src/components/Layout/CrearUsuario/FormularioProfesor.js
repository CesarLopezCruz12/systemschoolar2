import React, { useState } from 'react';
import { Form, Button, Input , Select} from 'semantic-ui-react';
import styles from './CrearUsuario.module.scss';

const opcionesTitulo = [
    { key: 'sr', text: 'Sr.', value: 'Sr.' },
    { key: 'sra', text: 'Sra.', value: 'Sra.' },
    { key: 'srta', text: 'Srta.', value: 'Srta.' },
  ];

export function FormularioProfesor (){

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false); // Variable de estado

    
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
    
    const handleTitleChange = (_, { value }) => {
      setSelectedTitle(value);
    };
    
    const handleSave = () => {
      // Aquí puedes manejar la lógica para guardar la imagen y el título
      console.log('Título:', selectedTitle);
      console.log('Archivo:', selectedFile);
      setButtonDisabled(true);
    };
  return (
    <div className={styles.container}>
      <Form>
      <Form.Field>
          <label>Título:</label>
          <Select
            options={opcionesTitulo}
            placeholder="Selecciona un título"
            value={selectedTitle}
            onChange={handleTitleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Subir imagen:</label>
          <Input type="file" onChange={handleFileChange} />
        </Form.Field>
        <Button primary className={styles.saveButton} onClick={handleSave} disabled={isButtonDisabled}>
          Guardar
        </Button>
      </Form>
    </div>
  );
};