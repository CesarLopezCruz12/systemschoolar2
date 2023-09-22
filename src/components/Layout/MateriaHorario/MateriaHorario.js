import React, { useState } from 'react';
import { Modal, Form, Button, Checkbox, Segment, Image, Dropdown, Input, ModalActions} from "semantic-ui-react";
import styles from './MateriaHorario.module.scss';

export function MateriaHorario({ clave , isOpen, onClose}){

    const ProfesoresArea = [
        { key: '1', value: 'CMD56', text:'Nehomar Salazar'},
        { key: '2', value: 'CMD55', text:'Rendso Rodriguez'},
      ]

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div className={styles.desplegableMateria}>
        <Modal open={isOpen} onClose={onClose} className={styles.modal}>
           
                <Modal.Content>
                <div className={styles.photoback}>
                <Image src='/asignaturafondo.PNG' alt='asigphoto' fluid className={styles.imagepage}/>
                </div>
                    <div className={styles.namesubject}>
                        Cálculo Vectorial
                    </div>
                    <div className={styles.selectContainer}>
                    <Dropdown 
                        fluid
                        selection
                        options={ProfesoresArea}
                        className={styles.selprof}
                        />
                        </div>
                <input type='text' placeholder='Jueves 12/15; Viernes 18/20'/>
                <div className={styles.selectContainer}>
                <Dropdown 
                fluid
                selection
                options={ProfesoresArea}
                className={styles.selprof}
                />
                </div>
                <input type='text' placeholder='Jueves 12/15; Viernes 18/20'/>
                
                </Modal.Content>
                <Modal.Actions>
                <Button positive className={styles.addSeccion}>
                  Agregar seccion
                </Button>
                <Button positive className={styles.saveButton}>
                  Guardar
                </Button>
                </Modal.Actions>
        </Modal>
      </div>
    );
}