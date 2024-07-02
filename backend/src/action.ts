import { pool } from "./connect"

export async function getUserId(id: number) {
    console.log(id)
    try {
        const res= await pool.query(`select * from persons where personid = $1` , [id])
        return res.rows
    } catch (err) {
        console.log(err)
    }
}

export async function createUser(body: any) {
    console.log({body})
    const {lastname, firstname , age} = body
    try {
        const res = await pool.query(
            `insert into persons (lastname, firstname, age)
            values ($1,$2,$3)
            returning *
           `,[
            lastname, 
            firstname,
            age,
           ])
            return res.rows
    } catch (err) {
        console.log(err)
    }
}
/***
 * CREATE TABLE Persons (
    PersonID int,
    LastName varchar(20),
    FirstName varchar(20),
    Address varchar(20),
    City varchar(20)
 * 
 */