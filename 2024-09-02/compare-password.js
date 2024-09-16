const bcrypt = require('bcrypt');

async function comparePasswords() {
    const data = "minhasenha";
    const encrypted = "$2b$10$fxP/cEX.LtCS1jfPVdEUWOD/Owge..qlNIIjct.xwf0rTJf8I64om";

    const result = await bcrypt.compare(data, encrypted);

    console.log(result);
}

comparePasswords();