const mydata = require('../Config/database')
const login = (req, res) => {
    const { name, password } = req.body;
    console.log(name);

    try {
        const query = `SELECT * FROM registration WHERE name=?`;
        mydata.connection.query(query, [name], (error, result) => {
            if (error) {
                console.log(error)
                return res.status(500).json({ message: 'internal server error' });
            }

            if (result.length === 0) {
                return res.status(404).json({ message: 'user not found' })
            }
            const user = result[0]
            console.log(result)
            if (user.password !== password) {
                return res.status([401].json({ message: "invaild password" }));
            }
            res.status(200).json({ message: "login successful" })


        })

    }
    catch (error) {
        console.log("error during login", error)
        return res.status(500).json({ message: "internal server error" })

    }
}
// ========================================for registration==============================================
const register = async (req, res) => {
  const { email, name, password } = req.body;
  console.log(email)
  try {
    const query = 'INSERT INTO registration (email, name, password) VALUES (?, ?, ?)';
    mydata.connection.query(query, [email, name, password], (error, result) => {
      if (error) {
        return res.status(500).json({ message: 'database errro' });
      }

      res.status(200).json({ message: 'registration successful' });
    });
  } catch (error) {
    console.log('error during registration', error);
    return res.status(500).json({ message: 'internal server error' });
  }
};

module.exports = {
  register,
  login,
};
