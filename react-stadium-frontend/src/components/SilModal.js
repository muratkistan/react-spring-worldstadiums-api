import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Icon, Modal } from 'semantic-ui-react';
import { stadiumSil } from '../actions';

const SilModal = ({stadium}) => {

   
    const [open , setOpen] = useState(false);
    const hata = useSelector(state => state.stadiumSilHata)

    const show = () => setOpen(true);
    const close = () => setOpen(false);
    const { push } = useHistory();

    const dispatch = useDispatch();   

    const  handleDelete = (id) =>{
        dispatch(stadiumSil(id,close,push));

    } ;

    return (
        
        <React.Fragment>

            <Button inverted color='red' onClick={show}><Icon  name='remove'  />Delete</Button>
            <Modal size="mini" open={open} onClose={close}>
                <Modal.Header>Stadyumu Sil</Modal.Header>
                <Modal.Content>
                    <p><b>{stadium.name }</b> isimli stadyumu silmek istediginizden emin misiniz?</p>
                    {hata && <p>{hata}</p>}
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={close}>Cancel</Button>
                    <Button positive icon="delete" labelPosition="right" content="Yes , Delete!" onClick={() => handleDelete(stadium.id)}/>
                </Modal.Actions>
            </Modal>



        </React.Fragment>
    );
};

export default SilModal;