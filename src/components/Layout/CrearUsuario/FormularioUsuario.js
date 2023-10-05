import React, { useState } from 'react';
import { Modal, Form, Button, Checkbox, Segment, Select} from "semantic-ui-react";

import { CheckboxCambios } from '@/components/Layout/CrearUsuario/CheckboxCambios';
import styles from './CrearUsuario.module.scss'



const opcionesEstado = [
    { key: 'activo', text: 'Activo', value: 'activo' },
    { key: 'inactivo', text: 'Inactivo', value: 'inactivo' },
  ];
  
export function FormularioUsuario(){

    const [mostrarFormulario, setMostrarFormulario] = useState(true);


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

      const handleSubmit = () => {
        // Aquí puedes manejar la lógica para guardar los datos
        console.log(formData);
        setMostrarFormulario(false);
      };


    return(

        <div>
          {mostrarFormulario ? (
              <Form className={styles.form} >
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
                <Button primary onClick={handleSubmit}>
                  Guardar
                </Button>
            </Form>
            ) : (
              <CheckboxCambios />
            )}

        </div>
        
    )
}