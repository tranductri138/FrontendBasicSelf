import { Pool, PoolClient } from 'pg';


const pool: Pool = new Pool({
    user: 'postgres',
    host: process.env.HOST,
    database: 'postgres',
    password: 'tri123',
    port: 5432,
  });

pool.on('error', (error: Error) => {
  console.log('error', 'pg client error', error);
  setTimeout(() => {
    pool.connect();
  });
});

async function connectToPostgres(): Promise<void> {
  try {
    await pool.connect();
    pool.query(`
    CREATE TABLE  IF NOT EXISTS Persons (
    Personid SERIAL UNIQUE,
    LastName varchar(10),
    FirstName varchar(10),
    Age int,
    PRIMARY KEY (Personid)
);`)
  } catch (error) {
    console.error('Lỗi kết nối PostgreSQL:', error);
  } 
}


// Export hàm kết nối PostgreSQL để sử dụng ở nơi khác
export {connectToPostgres , pool};