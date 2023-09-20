import styles from './ContentAdmin.module.scss';
import { TopLogo } from '@/components/Layout/TopLogo/TopLogo';
import { FiltrarUsuarios } from '@/components/Layout/FiltrarUsuarios/FiltrarUsuarios';
import { FiltrarAsignaturas } from '@/components/Layout/FiltrarAsignaturas/FiltrarAsignaturas';
import { FiltrarCalificaciones } from '@/components/Layout/FiltrarCalificaciones/FiltrarCalificaciones';
import { Ranking } from '@/components/Layout/Ranking/Ranking';
import { Reportes } from '@/components/Layout/Reportes/Reportes';

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
      // Agrega más casos según tus opciones de menú
      default:
        content = <div>Selecciona una opción del menú</div>;
    }



    return (
      <div className={`${styles.content} ${contentClass}`}>
        <TopLogo/>
        {content}
      </div>
    )
  }
  