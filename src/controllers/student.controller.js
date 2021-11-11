const pool = require('../database')

const readAlumno = async (req, res) => {
    try {
        const response = await pool.query('select a.idstudent, a.name, a.lastname, a.address, a.celphone, a.idschool, e.school from student a, school e where a.idschool = e.idschool;');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error!');
    }
}

const createAlumno = async (req, res) => {
    try {
        const { nombres, apellidos, direccion, telefono, idescuela } = req.body;
        await pool.query('INSERT INTO student(name, lastname, address, celphone, idschool) VALUES ( $1, $2, $3, $4, $5);',
            [name, lastname, address, celphone, idschool]);
        return res.status(200).json(
            `Alumno ${nombres} create correct.`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error!');
    }
}

const readAlumnoID = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select a.idalumno, a.nombres, a.apellidos, a.direccion, a.telefono, a.idescuela, e.nom_escuela from alumno a, escuela e where a.idescuela = e.idescuela and a.idalumno=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error!');
    }
}

const updateAlumno = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombres, apellidos, direccion, telefono, idescuela } = req.body;
        const response = await pool.query('UPDATE alumno set nombres = $1, apellidos = $2, direccion = $3, telefono = $4, idescuela = $5 where idalumno = $6',
            [nombres, apellidos, direccion, telefono, idescuela, id]);
        return res.status(200).send(`El Alumno ${id} se ha actualizado correctamente.`);
            
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error!');
    }
}

const deleteAlumno = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query('delete from alumno where idalumno=$1', [id]);
        return res.status(200).json(
            `Alumno ${id} eliminado correctamente.`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error!');
    }
}

module.exports = {readAlumno, 
                 createAlumno, 
                 readAlumnoID, 
                 updateAlumno, 
                 deleteAlumno};