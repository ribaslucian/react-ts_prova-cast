import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { UserFormLogin } from '../dtos/UserFormLogin';
import { useForm } from "react-hook-form";
import { UsersController } from '../controllers/UsersController';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SingIn() {
    const navigate = useNavigate();
    const { register, setValue, handleSubmit, formState } = useForm<UserFormLogin>({
        mode: "onChange"
    });
    const errors = formState.errors

    const onSubmit = handleSubmit(data => {
        // console.log(data)
        if (UsersController.signIn(data))
            navigate('/dashboard')
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Informe seus dados abaixo.
                    </Typography>

                    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            id="email"
                            label="E-mail:"
                            margin="normal"
                            autoComplete="off"
                            fullWidth
                            autoFocus

                            {...register("email", {
                                required: "Preencha seu e-mail por favor.",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Revise seu e-mail, este parece não estar certo."
                                }
                            })}

                            {...(errors.email ? ({ error: true, helperText: errors.email.message }) : null)}
                        />

                        <TextField
                            id="password"
                            label="Senha:"
                            margin="normal"
                            type="password"
                            autoComplete="current-password"
                            required
                            fullWidth

                            {...register("password", {
                                required: "Preencha sua senha por favor.",
                                minLength: {
                                    value: 3,
                                    message: "Confira aqui pois sua senha deve ter ao menos 3 caracteres."
                                },
                                maxLength: {
                                    value: 12,
                                    message: "Confira aqui pois sua não deve ter mais que 12 caracteres."
                                },
                            })}

                            {...(errors.password ? ({ error: true, helperText: errors.password.message }) : null)}
                        />

                        <Button
                            id="LoginButton"
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ fontWeight: "bold" }}
                            size="large"
                            sx={{ mt: 2, mb: 2 }}

                            // {...(errors ? { disabled: true } : null)}
                            {...(!formState.isValid ? { disabled: true } : { disabled: false })}
                        >
                            Acessar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}