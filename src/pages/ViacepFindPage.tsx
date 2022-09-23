import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { ViacepFindDto } from '../dtos/ViacepFindDto';
import { useEffect, useState } from 'react';
import { ViacepFindedDto } from '../dtos/Viacep/ViacepFindedDto';
import { ViacepService } from '../services/ViacepService';
import { Alert } from '@mui/material';

const theme = createTheme();
export default function ViacepFindPage() {

    useEffect(() => {
        document.title = 'Viacep';
    });

    const [showResults, setShowResults] = useState<boolean>(false);
    const [viacepFindedDto, setViacepFindedDto] = useState<ViacepFindedDto>({});

    const { register, setValue, handleSubmit, formState } = useForm<ViacepFindDto>({
        mode: "onChange"
    });
    const errors = formState.errors;


    const [messageCepSearched, setMessageCepSearched] = useState<{}>();
    const onSubmit = handleSubmit(viaCepFindDto => {
        ViacepService.search(viaCepFindDto).then(response => {
            console.log(response.data);
            setShowResults(true);
            setViacepFindedDto(response.data);
            setMessageCepSearched({
                message: 'Cep buscado com sucesso.'
            });
        }, err => {
            setShowResults(false);
            console.log(err);
        });
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
                        Para buscar os dados da região, informe seu do CEP abaixo:
                    </Typography>

                    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            id="cep"
                            label="CEP (sem máscara):"
                            margin="normal"
                            autoComplete="off"
                            fullWidth
                            autoFocus

                            {...register("cep", {
                                required: "Preencha o CEP por favor.",
                                pattern: {
                                    value: /[0-9]{8}/i,
                                    message: "Digite apenas números."
                                },
                                minLength: {
                                    value: 8,
                                    message: "Confira aqui pois o CEP não deve ter menos que 8 caracteres."
                                },
                                maxLength: {
                                    value: 8,
                                    message: "Confira aqui pois o CEP não deve ter mais que 8 caracteres."
                                },
                            })}

                            {...(errors.cep ? ({ error: true, helperText: errors.cep.message }) : null)}
                        />

                        <Button
                            id="FindCepButton"
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ fontWeight: "bold" }}
                            size="large"
                            sx={{ mt: 2, mb: 2 }}

                            // {...(errors ? { disabled: true } : null)}
                            {...(!formState.isValid ? { disabled: true } : { disabled: false })}
                        >
                            Buscar dados da região
                        </Button>
                    </Box>

                    <br />

                    {messageCepSearched && (
                        <Alert id="messageCepSearched" severity="success">
                            {messageCepSearched.message}
                        </Alert>
                    )}

                    <br />

                    {showResults && (
                        <div>
                            <div>
                                <strong>CEP:</strong>
                                <span>{viacepFindedDto.cep}</span>
                            </div>

                            <div>
                                <strong>Logradouro:</strong>
                                <span>{viacepFindedDto.logradouro}</span>
                            </div>

                            <div>
                                <strong>Complemento:</strong>
                                <span>{viacepFindedDto.complemento}</span>
                            </div>

                            <div>
                                <strong>Bairro:</strong>
                                <span>{viacepFindedDto.bairro}</span>
                            </div>

                            <div>
                                <strong>Localidade:</strong>
                                <span>{viacepFindedDto.localidade}</span>
                            </div>

                            <div>
                                <strong>UF:</strong>
                                <span>{viacepFindedDto.uf}</span>
                            </div>

                            <div>
                                <strong>IBGE:</strong>
                                <span>{viacepFindedDto.ibge}</span>
                            </div>

                            <div>
                                <strong>GIA:</strong>
                                <span>{viacepFindedDto.gia}</span>
                            </div>

                            <div>
                                <strong>DDD:</strong>
                                <span>{viacepFindedDto.ddd}</span>
                            </div>

                            <div>
                                <strong>SIAFI:</strong>
                                <span>{viacepFindedDto.siafi}</span>
                            </div>
                        </div>
                    )}
                </Box>
            </Container>
        </ThemeProvider>
    );
}