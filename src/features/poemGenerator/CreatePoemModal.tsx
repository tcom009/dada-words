import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Button, Grid } from '@mui/material';

interface Props {
  open: boolean;
  onClose: Function;
  onCreatePoem: Function;
  handleChange: Function;
  poem: string;
  saveSuccess: boolean;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CreatePoemModal = ({
  open,
  onClose,
  poem,
  handleChange,
  onCreatePoem,
  saveSuccess,

}: Props) => {
  return (
    <Modal
      open={open}
      onClose={() => onClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Tu poema:
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {poem}
        </Typography>
        <TextField
          sx={{ my: 2 }}
          label="Autor"
          variant="standard"
          name="author"
          onChange={(event) => handleChange(event)}
        />
        <Grid display="flex" direction="column" justifyContent="center" container>
          <Button variant="contained" onClick={() => onCreatePoem()}> Guardar </Button>
          {saveSuccess && <Typography variant="body1" sx={{ textAlign:'center' }}> Guardado con exito</Typography>}
        </Grid>
      </Box>
    </Modal>
  );
};

export default CreatePoemModal;
