import React, { useState } from 'react';
import { Modal, Form, Button, Checkbox, Segment, Select} from "semantic-ui-react";
import styles from './TipoUsuario.module.scss'

export function TipoUsuario({  onClose }){
    const [seleccionados, setSeleccionados] = useState([]);

    const handleCheckboxChange = (e, { value }) => {
        // Actualiza el estado de las selecciones de checkboxes
        if (seleccionados.includes(value)) {
        setSeleccionados(seleccionados.filter(item => item !== value));
        } else {
        setSeleccionados([...seleccionados, value]);
        }
    };

    const handleCerrarClick = () => {
        onClose(); // Cierra el modal secundario
      };

    return(
        <div>
            <Modal onClose={onClose} className={styles.modal}>
                <Modal.Header>Tipo de Usuario</Modal.Header>
                <Modal.Content>
        <div className={styles.checkboxContainer}>
          <Checkbox
            label="Administrador"
            value="administrador"
            checked={seleccionados.includes('administrador')}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Estudiante"
            value="estudiante"
            checked={seleccionados.includes('estudiante')}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Profesor"
            value="profesor"
            checked={seleccionados.includes('profesor')}
            onChange={handleCheckboxChange}
          />
        </div>

        {/* Mostrar información basada en las selecciones */}
        <div className={styles.informacion}>
          {seleccionados.length > 0 ? (
            <p>Tipos de usuario seleccionados: {seleccionados.join(', ')}</p>
          ) : (
            <p>Seleccione al menos un tipo de usuario.</p>
          )}
        </div>
      </Modal.Content>
    </Modal>
        </div>
    )
}