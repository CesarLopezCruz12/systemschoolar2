import Link from "next/link"
import { Icon, Menu , Button, Image} from 'semantic-ui-react'; 
import styles from './MenuBar.module.scss';
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; 

export function MenuBar({ menuVisible, setMenuVisible }) {
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };
    return (
        <div className={`${styles.sidebar} ${menuVisible ? '' : styles.collapsed}`}>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        <FiMenu />
      </button>
      {menuVisible && (
        <>
          <div className={styles.photoUser}>
            <Image src='/PhotoUser.PNG' alt='User_Photo' className={styles.photo}/>
          </div>
          <div className={styles.nameUser}>
            Asril Mochammad
          </div>
          <div className={styles.typeUser}>
            Administrador
          </div>
          <div className={styles.menuItem}>
          <div className={styles.itemWrapper}>
            <Icon name="users" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Usuarios</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.itemWrapper}>
            <Icon name="book" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Asignaturas</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.itemWrapper}>
            <Icon name="star" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Calificaciones</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.itemWrapper}>
            <Icon name="trophy" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Ranking</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.itemWrapper}>
            <Icon name="chart bar" size="large" className={menuVisible ? styles.iconVisible : styles.iconHidden} />
            <span>Reportes</span>
          </div>
        </div>
        <div className={styles.logoutFooter}>
          <div className={styles.finalline}>
            <hr/>
          </div>
          <div className={styles.logout}>
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
          <div className={styles.menuItemConteiner}>
            <Icon name="users" />
            
          </div>
          <div className={styles.menuItemConteiner}>
            <Icon name="book" />
            
          </div>
          <div className={styles.menuItemConteiner}>
            <Icon name="star" />
            
          </div>
          <div className={styles.menuItemConteiner}>
            <Icon name="trophy" />
            
          </div>
          <div className={styles.menuItemConteiner}>
            <Icon name="chart bar" />
            
          </div>
        </>
      )}
    </div>
    )
  }