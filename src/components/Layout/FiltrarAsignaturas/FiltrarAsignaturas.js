import styles from './FiltrarAsignaturas.module.scss';
import { Table, Icon } from "semantic-ui-react";
import React, { useState } from 'react';
import { MateriaHorario } from '@/components/Layout/MateriaHorario/MateriaHorario';

export function FiltrarAsignaturas({ clave }) {
 
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


    return (
      <div>
      <h2>Gestionar Asignaturas</h2>
      <Table >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Clave</Table.HeaderCell>
            <Table.HeaderCell>Nombre de Asignatura</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {/* Aquí puedes mapear tus asignaturas y crear filas para cada una */}
          <Table.Row>
            <Table.Cell>123</Table.Cell>
            <Table.Cell>Matemáticas</Table.Cell>
            <Table.Cell>
            <div className="icon-container" onClick={handleOpenModal} >
              <Icon name="pencil" className={styles.editIcon} /> Editar
              <MateriaHorario clave={clave} isOpen={modalOpen} onClose={handleCloseModal}/>
            </div>
            </Table.Cell>
          </Table.Row>
          {/* Agrega más filas según sea necesario */}
        </Table.Body>
      </Table>
      
    </div>
    )
  }
  