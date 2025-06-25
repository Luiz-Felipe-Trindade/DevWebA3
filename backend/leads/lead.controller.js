import express from 'express';
import { getAll, create, remove } from './lead.model.js';
import { DateTime } from 'luxon';

const router = express.Router();


router.get('/', (req, res) => {
  getAll((err, rows) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar leads' });

    const leadsFormatados = rows.map(lead => {
      return {
        ...lead,
        createdAt: DateTime.fromSQL(lead.createdAt, { zone: 'utc' })
          .setZone('America/Sao_Paulo')
          .toFormat('yyyy-MM-dd HH:mm:ss')
      };
    });

    res.json(leadsFormatados);
  });
});

router.post('/', (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) return res.status(400).json({ error: 'Nome e email obrigatórios' });

  create(nome, email, (err) => {
    if (err) return res.status(500).json({ error: 'Erro ao salvar lead' });
    res.json({ message: 'Lead registrado com sucesso!' });
  });
});

router.delete('/:id', (req, res) => {
  remove(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: 'Erro ao excluir lead' });
    res.json({ message: 'Lead excluído com sucesso' });
  });
});

export default router;
