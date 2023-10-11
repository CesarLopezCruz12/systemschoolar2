import React, { useState } from 'react';
import { Modal, Button, Grid, Input } from 'semantic-ui-react';
import styles from './ModificarUsuario.module.scss';

export function ModificarUsuario({ isOpen, onClose, userId, onSave, data}){

    const user = data.find((item) => item.id === userId);


    if (!isOpen) {
        return null;
      }
      const [formData, setFormData] = useState(user);
      const handleSave = () => {
        // Realiza la lógica de guardar los cambios y luego cierra el modal
        onSave();
        onClose();
      };
    const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
    };
    
    return(
        <Modal open={isOpen} onClose={onClose} className={styles.modalsize} size="tiny">
            <Modal.Header>Editar Usuario</Modal.Header>
            <Modal.Content className={styles.modalcontent}> 
                
                {user && (
                <div>
                    {/* Mostrar los campos de edición aquí */}
                    <div>Name: {user.Name}</div>
                    <div>Email: {user.Email}</div>
                    {/* Agrega más campos de edición según tus necesidades */}
                </div>
                )}
                <Grid columns={2} className={styles.gridsize}>
                    <Grid.Column className={styles.gridcolumn}>
                    <div className={styles.imagecontainer}>
                        <img src='/PhotoUser.PNG' alt="User" className={styles.photouser} />
                    </div>
                    <div className={styles.labelContainer}>
                        <label>Tipo de Usuario</label>
                        <div className={styles.field}>
                            <Input
                            name="userType"
                            // value={formData.userType}
                            onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.labelcontainer}>
                        <label>Matrícula</label>
                        <div className={styles.field}>
                            <Input
                            name="matricula"
                            // value={formData.matricula}
                            readOnly
                            />
                        </div>
                    </div>
                    </Grid.Column>
      <Grid.Column className={styles.gridcolumn}>
        <label>Nombre(s)</label>
        <div className="input-field">
          <Input
            name="name"
           
            //value={formData.name}
            onChange={handleChange}
          />
        </div>
        <label>Apellido(s)</label>
        <div className="input-field">
          <Input
            name="lastName"
            //value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <label>Email</label>
        <div className="input-field">
          <Input
            name="email"
            //value={formData.email}
            onChange={handleChange}
          />
        </div>
        <label>Estado</label>
        <div className="input-field">
          <Input
            name="active"
            //value={formData.active}
            onChange={handleChange}
          />
        </div>
        <label>Contraseña</label>
        <div className="input-field">
          <Input
            name="password"
            //value={formData.password}
            onChange={handleChange}
          />
        </div>
        <label>Confirmar Contraseña</label>
        <div className="input-field">
          <Input
            name="confirmPassword"
            //value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </Grid.Column>
    </Grid>
            </Modal.Content>
            <Modal.Actions>
                <div className={styles.actionscointeiner}>
                    <Button color="black" onClick={onClose}>
                    Cancelar
                    </Button>
                    <Button color="green" onClick={handleSave}>
                    Guardar
                    </Button>
                </div>
                
            </Modal.Actions>
        </Modal>
    )    
}