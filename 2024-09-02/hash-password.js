const bycrypt = require('bcrypt');

async function hashPassword() {
  const saltOrRounds = 10;
  const data = 'minhasenha';
  const hash = await bycrypt.hash(data, saltOrRounds);

  console.log(hash);
}

hashPassword();