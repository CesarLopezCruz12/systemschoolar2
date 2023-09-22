import React, { useState } from 'react';
import { Table, Image, Dropdown } from 'semantic-ui-react';
import styles from './TablaCalificaciones.module.scss';

export function TablaCalificaciones({ alumnos }){
    const opcionesCalificacion = [
        { key: '10', text: '10', value: '10' },
        { key: '9', text: '9', value: '9' },
        { key: '8', text: '8', value: '8' },
        { key: '7', text: '7', value: '7' },
        { key: '6', text: '6', value: '6' },
        { key: '5', text: '5', value: '5' },
        { key: '4', text: '4', value: '4' },
        { key: '3', text: '3', value: '3' },
        { key: '2', text: '2', value: '2' },
        { key: '1', text: '1', value: '1' },
        { key: 'NP', text: 'NP', value: 'NP' },
      ];

      const [calificaciones, setCalificaciones] = useState({});

      const handleCalificacionChange = (e, { name, value }) => {
        setCalificaciones({ ...calificaciones, [name]: value });
      };

      return (
        <div className={styles.tableContainer}>
          <Table basic="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Imagen de Alumno</Table.HeaderCell>
                <Table.HeaderCell className={styles.nameUser}>Nombre Completo de Alumno</Table.HeaderCell>
                <Table.HeaderCell>Matrícula</Table.HeaderCell>
                <Table.HeaderCell>Calificación</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {alumnos.map((alumno, index) => (
                <Table.Row key={index}>
                  <Table.Cell className={styles.imageCell} collapsing textAlign='left'>
                    <Image src={alumno.imagen}   size="tiny" rounded  className={styles.imagestudent}/>
                  </Table.Cell>
                  <Table.Cell>{alumno.nombre}</Table.Cell>
                  <Table.Cell>{alumno.matricula}</Table.Cell>
                  <Table.Cell className={styles.selectCell} collapsing textAlign='right'>
                    <div className={styles.selectorconteiner}>
                      <Dropdown
                        name={`calificacion-${index}`}
                        options={opcionesCalificacion}
                        value={calificaciones[`calificacion-${index}`] || ''}
                        onChange={handleCalificacionChange}
                        selection
                        placeholder="NA"
                        fluid
                        className={styles.selector}
                      />
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      );
      
}