import mysql from "mysql"

export const db = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10687780",
    password: "jbyaHHaDzE",
    database: "sql10687780"
})