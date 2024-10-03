var express = require('express');
var router = express.Router();
const { ddd, regexEmail } = require('../utils/constantes');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('matriculaForm', { title: 'Escola Virtual' });
});

router.post('/submit', (req, res) => {
  const dataForm = req.body;

  let response = {
    camposVazios: [],
    errors: []
  };

  // Verificação de todos os campos obrigatórios
  for (let key in dataForm) {
    if (key === 'ramal') {
      continue; // Ramal não é obrigatório
    }
    if (!dataForm[key]) {
      response.errors.push({ field: key, message: 'Campo obrigatório' });
    }
  }

  // Valida e-mail
  if (!regexEmail.test(dataForm.email)) {
    response.errors.push({ field: 'email', message: 'E-mail inválido' });
  }

  // Valida telefone
  if (dataForm.tel.length < 8 || dataForm.tel.length > 9) {
    response.errors.push({ field: 'tel', message: 'Telefone inválido' });
  }

  // Valida DDD
  if (ddd.indexOf(parseInt(dataForm.ddd)) === -1) {
    response.errors.push({ field: 'ddd', message: 'DDD inválido' });
  }

  // Valida data de nascimento
  const date = new Date(dataForm.nascimento);
  const dateNow = new Date();
  if (date > dateNow) {
    response.errors.push({ field: 'nascimento', message: 'Data de nascimento inválida' });
  }

  // Verifica se o array de atividades contém mais de 3 itens
  if (dataForm.atividades) {
    if (dataForm.atividades.length > 3) {
      response.errors.push({ field: 'atividades', message: 'Selecione no máximo 3 atividades' });
    }
  } else if (dataForm.atividades.length == 1) {
    response.errors.push({ field: 'atividades', message: 'Selecione ao menos 1 atividade' });
  }

  if (response.errors.length === 0 && response.camposVazios.length === 0) {
    response.status = 'success';
  } else {
    response.status = 'error';
  }

  res.json(response);
});

module.exports = router;
