import Link from "next/link"
import { Icon, Menu , Button, Image} from 'semantic-ui-react'; 
import styles from './MenuBarEstudiante.module.scss';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi'; 

export function MenuBarEstudiante({ menuVisible, setMenuVisible, onSelectOption  }) {
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
    
      const [selectedOption, setSelectedOption] = useState(null);

      const handleOptionClick = (option) => {
        setSelectedOption(option);
        onSelectOption(option);
      };

    return (
        <div className={`${styles.sidebar} ${menuVisible ? '' : styles.collapsed}`}>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        <FiMenu />
      </button>
      {menuVisible && (
        <>
          <div className={styles.photoUser} onClick={() => handleOptionClick('')}>
            <Image src='/PhotoUser.PNG' alt='User_Photo' className={styles.photo}/>
          </div>
          <div className={styles.nameUser}>
            Asril Mochammad
          </div>
          <div className={styles.typeUser}>
            Estudiante
          </div>
          <div className={styles.menuItem} onClick={() => handleOptionClick('inicio')}>
          <div className={styles.itemWrapper}>
            <Icon name="users" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Inicio</span>
          </div>
          </div>
          <div className={styles.menuItem}>
          <div className={styles.itemWrapper}>
            <Icon name="book" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Asignaturas</span>
          </div>
        </div>

        
        <div className={styles.menuItem} onClick={() => handleOptionClick('seleccion')}>
          <div className={styles.itemWrapper}>
            <Icon name="book" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Seleccion</span>
          </div>
        </div>
        <div className={styles.menuItem} onClick={() => handleOptionClick('retiros')}>
          <div className={styles.itemWrapper}>
            <Icon name="book" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Retiros</span>
          </div>
        </div>
        <div className={styles.menuItem} onClick={() => handleOptionClick('rankingestudiante')}>
          <div className={styles.itemWrapper}>
            <Icon name="trophy" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Ranking</span>
          </div>
        </div>
        <div className={styles.menuItem} >
          <div className={styles.itemWrapper}>
            <Icon name="chart bar" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Reportes</span>
          </div>
        </div>
        <div className={styles.menuItem} onClick={() => handleOptionClick('calificacionesmediotermino')}>
          <div className={styles.itemWrapper}>
            <Icon name="chart bar" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Calificaciones medio término</span>
          </div>
        </div>
        <div className={styles.menuItem} onClick={() => handleOptionClick('calificacionfinal')}>
          <div className={styles.itemWrapper}>
            <Icon name="chart bar" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Calificacion Final</span>
          </div>
        </div>
        <div className={styles.menuItem} onClick={() => handleOptionClick('historialacademico')}>
          <div className={styles.itemWrapper}>
            <Icon name="chart bar" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Histroial academico</span>
          </div>
        </div>
        <div className={styles.menuItem} onClick={() => handleOptionClick('pensum')}>
          <div className={styles.itemWrapper}>
            <Icon name="chart bar" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Pensum</span>
          </div>
        </div>
        <div className={styles.logoutFooter}>
          <div className={styles.finalline}>
            <hr/>
          </div>
          <div className={styles.logout} >
            Cerrar sesión
          </div>
        </div>
        </>
      )}
      {!menuVisible && (
          <>
          <div className={styles.photoUserConteiner}>
            <Image src='/PhotoUser.PNG' alt='User_Photo'/>
          </div>
          <div className={styles.menuItemConteiner} onClick={() => handleOptionClick('usuarios')}>
            <Icon name="users" />
            
          </div>
          <div className={styles.menuItemConteiner} onClick={() => handleOptionClick('asignaturas')}>
            <Icon name="book" />
            
          </div>
          <div className={styles.menuItemConteiner} onClick={() => handleOptionClick('calificaciones')}>
            <Icon name="star" />
            
          </div>
          <div className={styles.menuItemConteiner} onClick={() => handleOptionClick('ranking')}>
            <Icon name="trophy" />
            
          </div>
          <div className={styles.menuItemConteiner} onClick={() => handleOptionClick('reportes')}>
            <Icon name="chart bar" />
            
          </div>
        </>
      )}
    </div>
    )
  }