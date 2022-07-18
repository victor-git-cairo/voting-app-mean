module.exports = {
    port: 8081, 
    db: {
      database: process.env.BD_NAME || 'votingAppDB',
      user: process.env.BD_USER || 'root',
      password:  process.env.BD_PASS || 'root',
      host: process.env.HOST || 'localhost'   
    } 
  }