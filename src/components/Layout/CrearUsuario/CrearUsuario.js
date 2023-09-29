import { Modal, Form, Button, Checkbox, Segment, Select} from "semantic-ui-react";
import styles from './CrearUsuario.module.scss'
import React, { useState } from 'react';
import  { TipoUsuario } from '@/components/Layout/TipoUsuario/TipoUsuario';
import { modal } from "@nextui-org/react";

const opcionesEstado = [
  { key: 'activo', text: 'Activo', value: 'activo' },
  { key: 'inactivo', text: 'Inactivo', value: 'inactivo' },
];

export  function CrearUsuario({ isOpen, onClose }) {
  
  
    const handleSubmit = () => {
      // Aquí puedes manejar la lógica para guardar los datos
      console.log(formData);
      onClose(); // Cierra el modal después de guardar
    };
      
      const handleGuardarClick = () => {
        handleGuardarClick
        handleSubmit(); // Ejecuta handleSubmit
        
        
      };
      
    
  
    const [formData, setFormData] = useState({
      nombres: '',
      apellidos: '',
      email: '',
      estado: 'activo',
      password: '',
      confirmPassword: '',
    });

    const handleChange = (e, { name, value }) => {
      setFormData({ ...formData, [name]: value });
    };

    

  
    

    return (
        <div className={styles.crearusuariolayout}>
          <Modal open={isOpen} onClose={onClose} className={styles.modal}>
            <Modal.Header className={styles.modalheader}>Añadir usuario</Modal.Header>
            <Modal.Content>
              <Form className={styles.form} onSubmit={handleSubmit}>
                <Form.Input
                  label="Nombre(s)"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <Form.Input
                  label="Apellido(s)"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <Form.Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <Form.Field
                  label="Estado"
                  control={Select}
                  name="estado"
                  options={opcionesEstado}
                  value={formData.estado}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <Form.Input
                  label="Contraseña"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
                <Form.Input
                  label="Confirmar Contraseña"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </Form>
            </Modal.Content>
            <Modal.Actions>
            <div className={styles.buttonContainer}>
              <Button negative onClick={onClose} className={styles.button}>
                Cancelar
              </Button>
              <Button primary onClick={handleGuardarClick} className={styles.button}>
                Guardar
              </Button>
            </div>
           
        
            </Modal.Actions>
          </Modal>
        </div>
      );
}
