const { Pool } = require ('pg')

const pool = new Pool({
    host: 'ec2-34-224-239-147.compute-1.amazonaws.com',
    user: 'nhquycznqvpvej',
    password: 'd46922014eb8d9d826460fbb8d5251a076d297224cb789c693cfc5fa3f30a107',
    database: 'des5tgf3h4sqfp',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})
module.exports = pool;