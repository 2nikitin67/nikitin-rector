import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios, { AxiosError } from 'axios';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #fff',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            width: 400,
            borderRadius: 20,
        },
        sumbit: {
            marginTop: 40,
        }
    })
);

interface Props {
    open: boolean;
    handleClose: () => void;
}

interface LoginResponse {
    message?: string;
    [key: string]: any;
}

export default function SimpleModal(props: Props) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await Axios.post<LoginResponse>('/api/login', {
                email,
                password,
            });
            console.log(response.data);
        } catch (err) {
            const axiosError = err as AxiosError;
            setError(
                axiosError.response?.statusText || 'An unexpected error occurred'
            );
        }
    };

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.open}
            onClose={props.handleClose}
            className={classes.modal}
        >
            <div className={classes.paper}>
                <h2 id="simple-modal-title">Login</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form noValidate autoComplete="off on" onSubmit={handleLogin}>
                    <TextField
                        id="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        fullWidth
                    />
                    <Button className={classes.sumbit} variant="contained" color="primary" type="submit">
                        Login
                    </Button>
                </form>
            </div>
        </Modal>
    );
}
