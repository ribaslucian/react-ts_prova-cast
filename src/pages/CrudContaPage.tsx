import { Alert, Box, Button, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContaDto } from '../dtos/ContaDto';
import { ContasService } from '../services/ContasService';

const theme = createTheme();
export default function CrudContaPage() {

    useEffect(() => {
        document.title = 'CRUD Conta';
    });

    const { register, setValue, handleSubmit, formState } = useForm<ContaDto>({ mode: "onChange" });
    const errors = formState.errors


    const [messageContaCreated, setMessageContaCreated] = useState<{}>();

    const onSubmit = handleSubmit(contaDto => {
        ContasService.create(contaDto).then(response => {
            console.log(response);
            setMessageContaCreated({
                message: 'conta criada com sucesso.'
            });
        });
    });

    const [contas, setContas] = useState<ContaDto[]>([]);
    ContasService.all().then(response => {
        setContas(response.data);
    });

    const columns: GridColDef[] = [
        {
            field: 'nome',
            headerName: 'Nome da Conta',
        },
        {
            field: 'descricao',
            headerName: 'Descrição da Conta',
        },
    ];

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
                        Para criar uma conta preencha os dados abaixo:
                    </Typography>

                    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            id="nome"
                            label="Nome:"
                            margin="normal"
                            autoComplete="off"
                            fullWidth
                            autoFocus

                            {...register("nome")}
                        />

                        <TextField
                            id="descricao"
                            label="Descrição:"
                            margin="normal"
                            type="text"
                            autoComplete="current-password"
                            multiline
                            rows={4}
                            required
                            fullWidth

                            {...register("descricao")}
                        />

                        <Button
                            id="CreateContaButton"
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ fontWeight: "bold" }}
                            size="large"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Salvar conta
                        </Button>
                    </Box>
                </Box>
            </Container>

            <br />

            {messageContaCreated && (
                <Alert id="messageContaCreated" severity="success">
                    {messageContaCreated.message}
                </Alert>
            )}

            <br />

            <Box sx={{ height: 300 }}>
                <DataGrid
                    rows={contas}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    checkboxSelection
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </ThemeProvider>
    );
}