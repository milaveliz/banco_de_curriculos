const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name,
    intendedPosition,
    birthDate,
    maritalStatus,
    sex,
    email,
    phone1,
    phone2,
    phone3,
    phone4,
    idCard,
    cpf,
    car,
    licence,
    cep,
    rua,
    bairro,
    cidade,
    estado,
    numero, 
  } = req.body;

  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log('Error: ', err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: 'Já existe um cadastro com esse email! Por favor utilize outro!' });
  }

  const alreadyExistsUser2 = await User.findOne({ where: { cpf } }).catch(
    (err) => {
      console.log('Error: ', err);
    }
  );

  if (alreadyExistsUser2) {
    return res.status(409).json({ message: 'Usuário com esse CPF já realizou o cadastrado!' });
  }

  const newUser = new User({
    name,
    intendedPosition,
    birthDate,
    maritalStatus,
    sex,
    email,
    phone1,
    phone2,
    phone3,
    phone4,
    idCard,
    cpf,
    car,
    licence,
    cep,
    rua,
    bairro,
    cidade,
    estado,
    numero, 
  });

  const savedUser = await newUser.save().catch((err) => {
    console.log('Error: ', err);
    res.status(500).json({ error: 'Não foi possível completar o seu registro no momento!' });
    res.status(500).json({ error: {err} });
  });

  if (savedUser) {
    return res.json({ message: 'Seu cadastro foi efetuado com sucesso!' });
  }

  return res.json({ message: 'Seu cadastro foi efetuado com sucesso!' });

});

module.exports = router;
