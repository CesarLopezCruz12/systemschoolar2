import { Modal, Form, Button, Checkbox, Segment, Select} from "semantic-ui-react";
import { modal } from "@nextui-org/react";
import React, { useState , useRef } from 'react';

import { FormularioUsuario } from "@/components/Layout/CrearUsuario/FormularioUsuario";

import styles from './CrearUsuario.module.scss'



export  function CrearUsuario({ isOpen, onClose }) {

  
    return (
        <div className={styles.crearusuariolayout}>
          <Modal open={isOpen} onClose={onClose} className={styles.modal}>
            <Modal.Header className={styles.modalheader}>Añadir Usuario</Modal.Header>
            <Modal.Content>
              <FormularioUsuario />
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={onClose}>Cerrar</Button>
            </Modal.Actions>
          </Modal>
        </div>
      );
}
