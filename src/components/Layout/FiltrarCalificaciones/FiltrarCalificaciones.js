import styles from './FiltrarCalificaciones.module.scss'; // Importa tus estilos SCSS
import { TablaCalificaciones } from '@/components/Layout/TablaCalificaciones/TablaCalificaciones';
import { Dropdown, Button } from 'semantic-ui-react';

const alumnos = [
  {
    imagen: '/PhotoUser.PNG',
    nombre: 'Nombre Alumno 1',
    matricula: '123456',
  },
  {
    imagen: '/PhotoUser.PNG',
    nombre: 'Nombre Alumno 2',
    matricula: '789012',
  },
  // Agrega más datos de alumnos según sea necesario
];
const periodosOptions = [
  { key: '1', text: 'Enero - Junio', value: 'semestre1' },
  { key: '1', text: 'Julio - Diciembre', value: 'semestre2' },
  
];

const aniosOptions = [
  { key: '2018', text: '2018', value: '2018' },
  { key: '2019', text: '2019', value: '2019' },
  { key: '2020', text: '2020', value: '2020' },
  { key: '2021', text: '2021', value: '2021' },
  { key: '2022', text: '2022', value: '2022' },
  { key: '2023', text: '2023', value: '2023' },
  // Otras opciones de años
];

const claveOptions = [
  { key: 'CBM208', text: 'CBM208', value: 'CBM208' },
  { key: 'CBM208', text: 'CBM209', value: 'CBM208' },
  // Otras opciones de claves
];

const seccionOptions = [
  { key: '01', text: '01', value: '01' },
  { key: '02', text: '02', value: '02' },
  // Otras opciones de secciones
];
export function FiltrarCalificaciones(){
    return (
      <div className={styles.calificaciones}>
            <div className="header">
              Modificar Calificaciones
            </div>
            <div className={styles.filterRow}>
              <div className={styles.leftSection}>
               <div className={styles.filterContainer}>
                  <span>Filtrar por</span>
                  <div className={styles.selectContainer}>
                    
                    <Dropdown placeholder="Periodo" selection options={periodosOptions} fluid  className={styles.selperiod}/>
                    <Dropdown placeholder="Año" selection options={aniosOptions} fluid className={styles.selyear} />
                    <Dropdown placeholder="Clave" search selection options={claveOptions} fluid className={styles.selid}/>
                    <Dropdown placeholder="Sección" search selection options={seccionOptions} fluid className={styles.selseccion}/>
                   </div> 
                </div>
              </div>
              <div className={styles.rightSection}>
              <Button primary>Realizar Modificación</Button>
            </div>
          </div>
          <div className={styles.tablecontainer}>
        </div>
          <TablaCalificaciones alumnos={alumnos}/>
      </div>
    )
  }
  