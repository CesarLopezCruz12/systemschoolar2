import React, { useState } from 'react';
import { Checkbox, Segment } from 'semantic-ui-react';

import styles from './CrearUsuario.module.scss';
import { FormularioEstudiante } from '@/components/Layout/CrearUsuario/FormularioEstudiante';
import { FormularioProfesor } from '@/components/Layout/CrearUsuario/FormularioProfesor';
import { FormularioAdministrador } from '@/components/Layout/CrearUsuario/FormularioAdministrador';


export function CheckboxCambios() {
    const [selectedUser, setSelectedUser] = useState(null);
  
    const handleUserSelection = (user) => {
      setSelectedUser(user);
    };
  
    return (
      <div className={styles.userSelector}>
        <div className={styles.checkboxContainer}>
          <Checkbox
            label="Profesor"
            onChange={() => handleUserSelection('profesor')}
            checked={selectedUser === 'profesor'}
          />
          <Checkbox
            label="Estudiante"
            onChange={() => handleUserSelection('estudiante')}
            checked={selectedUser === 'estudiante'}
          />
          <Checkbox
            label="Administrador"
            onChange={() => handleUserSelection('administrador')}
            checked={selectedUser === 'administrador'}
          />
        </div>
        <div className={styles.contentContainer}>
          {selectedUser === 'profesor' && (
            <Segment>
              <FormularioProfesor/>
            </Segment>
          )}
          {selectedUser === 'estudiante' && (
            <Segment>
              <FormularioEstudiante />
            </Segment>
          )}
          {selectedUser === 'administrador' && (
            <Segment>
              <FormularioAdministrador/>
            </Segment>
          )}
          {selectedUser === null && (
            <div className={styles.noSelection}>
              Selecciona un perfil
            </div>
          )}
        </div>
      </div>
    );
  }
  