import React from 'react';
import { Table, Progress } from 'semantic-ui-react';
import styles from './TablaRanking.module.scss'
import { CirculoProgreso } from '@/components/Layout/CirculoProgreso/CirculoProgreso';

export function TablaRanking() {
  return (
    <div className={styles.rankingEstudiantil}>
     <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Puesto#</Table.HeaderCell>
            <Table.HeaderCell>Estudiante</Table.HeaderCell>
            <Table.HeaderCell>Carrera</Table.HeaderCell>
            <Table.HeaderCell>Trimestre</Table.HeaderCell>
            <Table.HeaderCell>Materias</Table.HeaderCell>
            <Table.HeaderCell>Indice General</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Aurora</Table.Cell>
            <Table.Cell>SC</Table.Cell>
            <Table.Cell>6/8</Table.Cell>
            <Table.Cell>80/140</Table.Cell>
            <Table.Cell>
              <CirculoProgreso percent={75}/>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}