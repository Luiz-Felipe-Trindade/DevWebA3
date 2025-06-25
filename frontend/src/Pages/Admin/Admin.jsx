import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@mui/material';

function Admin() {
  const [leads, setLeads] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState([]);
  const [senha, setSenha] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  const autenticar = () => {
    if (senha === 'admin123') {
      setAutenticado(true);
    } else {
      alert('Senha incorreta');
    }
  };

  useEffect(() => {
    if (autenticado) {
      fetch('http://localhost:5000/api/leads')
        .then(res => res.json())
        .then(data => {
          setLeads(data);
          setFiltro(data);
        });
    }
  }, [autenticado]);

  const filtrar = (valor) => {
    setBusca(valor);
    const resultado = leads.filter(lead =>
      lead.nome.toLowerCase().includes(valor.toLowerCase()) ||
      lead.email.toLowerCase().includes(valor.toLowerCase())
    );
    setFiltro(resultado);
  };

  const exportarCSV = () => {
    const csv = filtro.map(lead => `${lead.nome},${lead.email},${lead.createdAt}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'leads.csv';
    link.click();
  };

  const excluirLead = async (id) => {
    await fetch(`http://localhost:5000/api/leads/${id}`, { method: 'DELETE' });
    setFiltro(filtro.filter(l => l.id !== id));
  };

  if (!autenticado) {
    return (
      <Container maxWidth="sm">
        <Box
          minHeight="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Typography variant="h5" fontWeight="bold">
            Área Administrativa
          </Typography>
          <TextField
            type="password"
            label="Digite a senha"
            variant="outlined"
            fullWidth
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{height: 40}}
            onClick={autenticar}
          >
            Entrar
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xg">
      <Box my={4}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            label="Buscar por nome ou e-mail"
            variant="outlined"
            fullWidth
            value={busca}
            onChange={e => filtrar(e.target.value)}
            sx={{ mr: 2 }}
          />
          <Button
            variant="contained"
            color="success"
            onClick={exportarCSV}
            sx={{width:200}}
          >
            Exportar CSV
          </Button>
        </Box>

        <Paper elevation={3} sx={{overflowY: 'auto', height: '80vh'}}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell><strong>Nome</strong></TableCell>
                <TableCell><strong>E-mail</strong></TableCell>
                <TableCell><strong>Data/Hora</strong></TableCell>
                <TableCell><strong>Ações</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {filtro.map(lead => (
                <TableRow key={lead.id}>
                  <TableCell>{lead.nome}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>
                    {new Date(lead.createdAt).toLocaleString('pt-BR', {
                      timeZone: 'America/Sao_Paulo'
                    })}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => excluirLead(lead.id)}
                    >
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Container>
  );
}

export default Admin;
