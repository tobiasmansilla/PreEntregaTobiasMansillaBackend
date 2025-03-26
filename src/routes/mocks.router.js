const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');  
const Pet = require('../models/pet');   
const { faker } = require('@faker-js/faker');

const router = express.Router();

// Función para generar usuarios
const generateUsers = async (numUsers) => {
  // console.log(`Generando ${numUsers} usuarios...`);
  const users = [];
  const hashedPassword = await bcrypt.hash('coder123', 10);

  for (let i = 0; i < numUsers; i++) {
    users.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: Math.random() > 0.5 ? 'user' : 'admin',
      pets: []
    });
  }
  // console.log('Users generados:', users);
  return users;
};

// Función para generar mascotas
const generatePets = (numPets) => {
  // console.log(`Generando ${numPets} mascotas...`);
  const pets = [];

  for (let i = 0; i < numPets; i++) {
    console.log(`Generando mascota ${i + 1}...`);
    pets.push({
      name: faker.animal.dog(), 
      type: 'dog',               
      age: faker.number.int({ min: 1, max: 15 }), 
      owner: faker.internet.userName()
    });
  }
  console.log('Mascotas generadas:', pets);
  return pets;
};

// mockingusers para generar 50 usuarios
router.get('/mockingusers', async (req, res) => {
  try {
    const users = await generateUsers(50);
    res.json(users); 
  } catch (error) {
    res.status(500).json({ message: 'Error al generar usuarios', error });
  }
});


router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;

  if (!users || !pets) {
    return res.status(400).json({ message: 'Debe proporcionar cantidades para users y pets.' });
  }

  try {
    const generatedUsers = await generateUsers(parseInt(users));
    const insertedUsers = await User.insertMany(generatedUsers);

    const generatedPets = generatePets(parseInt(pets)); 
    const insertedPets = await Pet.insertMany(generatedPets); 

    res.status(201).json({
      message: 'Datos generados exitosamente',
      users: insertedUsers,
      pets: insertedPets
    });
  } catch (error) {
    console.error('Error al generar o insertar datos:', error); 
    res.status(500).json({ message: 'Error al generar datos', error });
  }
});


// verificar los usuarios insertados
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
});

// verificar las mascotas insertadas
router.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener mascotas', error });
  }
});

module.exports = router;
