import styles from './ContentAdmin.module.scss';
import { TopLogo } from '@/components/Layout/TopLogo/TopLogo';
import { HeaderLogo } from '@/components/Layout/HeaderLogo/HeaderLogo';
import { FiltrarUsuarios } from '@/components/Layout/FiltrarUsuarios/FiltrarUsuarios';
import { FiltrarAsignaturas } from '@/components/Layout/FiltrarAsignaturas/FiltrarAsignaturas';
import { FiltrarCalificaciones } from '@/components/Layout/FiltrarCalificaciones/FiltrarCalificaciones';
import { Ranking } from '@/components/Layout/Ranking/Ranking';
import { Reportes } from '@/components/Layout/Reportes/Reportes';
import { Seleccion } from '../Seleccion';
import { CalificacionFinal } from '../CalificacionFinal';
import { CalificacionMedioTermino } from '../CalificacionMedioTermino';
import { InicioEstudiante } from '../InicioEstudiante';
import { Retiros } from '../Retiros';
import { HistorialAcademico } from '../HistorialAcademico';
import { Pensum } from '../Pensum';

export function ContentAdmin({ menuVisible, selectedOption }) {
    
    const contentClass = menuVisible ? styles.contentExpanded : styles.contentCollapsed;
    let content = null;
    switch (selectedOption) {
      case 'usuarios':
        content = <FiltrarUsuarios />;
      break;
      case 'asignaturas':
        content = <FiltrarAsignaturas />;
      break;
      case 'calificaciones':
        content = <FiltrarCalificaciones />;
      break;
      case 'ranking':
        content = <Ranking />;
      break;
      case 'reportes':
        content = <Reportes />;
      break;
      case 'inicio':
        content = <Reportes />;
      break 
      case 'seleccion':
        content = <Seleccion />;
      break;
      case 'retiros':
        content = <Retiros />;
      break;
      case 'rankingestudiante':
        content = <Ranking />;
      break;
      case 'calificacionesmediotermino':
        content = <CalificacionMedioTermino />;
      break;
      case 'calificacionfinal':
        content = <CalificacionFinal />;
      break;
      case 'historialacademico':
        content = <HistorialAcademico />;
      break;
      case 'pensum':
        content = <Pensum />;
      break;
      // Agrega más casos según tus opciones de menú
      default:
        content = <div>Selecciona una opción del menú</div>;
    }



    return (
      <div className={`${styles.content} ${contentClass}`}>
        < TopLogo />
        {content}
      </div>
    )
  }
  